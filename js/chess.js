// Recorded positions remain the source of truth; animations only affect presentation.
(() => {
  const root = document.querySelector('.game-replay');
  if (!root || !window.featuredGame) return;
  const { positions, initialPly } = window.featuredGame;
  const names = { k: 'king', q: 'queen', r: 'rook', b: 'bishop', n: 'knight', p: 'pawn' };
  const board = root.querySelector('.board');
  const squares = [...board.querySelectorAll('.game-square')];
  const controls = root.querySelector('.game-controls');
  const preferenceKey = 'andy.chess.animationEnabled';
  let animationEnabled = true; // Default ON, independently of system preferences.
  try { animationEnabled = localStorage.getItem(preferenceKey) !== 'false'; } catch {}
  const motionLabel = document.createElement('label');
  motionLabel.className = 'chess-motion-choice';
  const motionToggle = document.createElement('input');
  motionToggle.type = 'checkbox';
  motionToggle.checked = animationEnabled;
  motionLabel.append(motionToggle, document.createTextNode('Animate chess moves'));
  controls.after(motionLabel);
  let index = Math.max(0, Math.min(initialPly, positions.length - 1));
  let busy = false;
  let activeAnimations = [];
  const coordinate = i => 'abcdefgh'[i % 8] + (8 - Math.floor(i / 8));
  const squareIndex = name => (8 - Number(name[1])) * 8 + 'abcdefgh'.indexOf(name[0]);
  const imagePath = piece => `images/chess/${piece === piece.toUpperCase() ? 'w' : 'b'}${piece.toLowerCase()}.svg`;
  function piecesAt(ply) {
    const pieces = [];
    for (const character of positions[ply].fen.split(' ')[0]) {
      if (character === '/') continue;
      if (/\d/.test(character)) pieces.push(...Array(Number(character)).fill(''));
      else pieces.push(character);
    }
    return pieces;
  }
  function updateLabels() {
    const position = positions[index];
    const pieces = piecesAt(index);
    squares.forEach((square, i) => {
      const piece = pieces[i];
      const name = coordinate(i);
      const description = `${name}: ${piece ? `${piece === piece.toUpperCase() ? 'White' : 'Black'} ${names[piece.toLowerCase()]}` : 'empty'}`;
      square.title = description;
      square.querySelector('.sr-only').textContent = description + '. ';
      square.classList.toggle('last-move', name === position.from || name === position.to);
    });
    board.setAttribute('aria-label', `Chess position: ${position.label}, White at the bottom`);
    root.querySelector('output').textContent = position.label;
    controls.querySelectorAll('button').forEach(button => {
      button.disabled = busy || (['start', 'previous'].includes(button.dataset.action) ? index === 0 : index === positions.length - 1);
    });
    root.setAttribute('aria-busy', String(busy));
  }
  function createImage(piece) {
    const image = document.createElement('img');
    image.className = 'game-piece';
    image.alt = '';
    image.setAttribute('aria-hidden', 'true');
    image.src = imagePath(piece);
    return image;
  }
  function instantRender() {
    piecesAt(index).forEach((piece, i) => {
      let image = squares[i].querySelector('.game-piece');
      if (!image && piece) { image = createImage(piece); squares[i].prepend(image); }
      if (image) {
        if (piece) image.src = imagePath(piece);
        else image.removeAttribute('src');
        image.hidden = !piece;
      }
    });
    updateLabels();
  }
  // Separate visual layer: it never participates in the grid or board rendering.
  const layer = document.createElement('div');
  layer.className = 'chess-animation-layer';
  layer.setAttribute('aria-hidden', 'true');
  board.append(layer);
  function overlay(piece, from, to) {
    const bounds = board.getBoundingClientRect();
    const source = squares[from].getBoundingClientRect();
    const destination = squares[to].getBoundingClientRect();
    const ghost = createImage(piece);
    ghost.className = 'chess-ghost';
    ghost.style.left = `${source.left - bounds.left + source.width * .07}px`;
    ghost.style.top = `${source.top - bounds.top + source.height * .07}px`;
    ghost.style.width = `${source.width * .86}px`;
    ghost.style.height = `${source.height * .86}px`;
    layer.append(ghost);
    return { ghost, dx: destination.left - source.left, dy: destination.top - source.top };
  }
  async function navigate(nextIndex) {
    if (busy || nextIndex === index) return;
    const adjacent = Math.abs(nextIndex - index) === 1;
    // Start/end jumps need no slide; only the manual setting controls animation.
    if (!adjacent || !animationEnabled || !Element.prototype.animate) {
      index = nextIndex; instantRender(); return;
    }
    const before = piecesAt(index);
    const after = piecesAt(nextIndex);
    const forward = nextIndex > index;
    const move = positions[forward ? nextIndex : index];
    const from = squareIndex(forward ? move.from : move.to);
    const to = squareIndex(forward ? move.to : move.from);
    const moving = [{ from, to }];
    if (before[from].toLowerCase() === 'k' && Math.abs(from - to) === 2) {
      const rank = Math.floor(from / 8) * 8;
      const kingSide = (forward ? to : from) % 8 === 6;
      const rookStart = rank + (kingSide ? 7 : 0);
      const rookEnd = rank + (kingSide ? 5 : 3);
      moving.push({ from: forward ? rookStart : rookEnd, to: forward ? rookEnd : rookStart });
    }
    const duration = parseFloat(getComputedStyle(board).getPropertyValue('--chess-move-duration')) || 280;
    const movers = moving.map(({ from, to }) => ({ ...overlay(before[from], from, to), to }));
    const movingSources = new Set(moving.map(piece => piece.from));
    const captured = [];
    // Keep captured pieces visible above the newly rendered board until arrival.
    // Comparing snapshots also catches an en-passant pawn on another square.
    before.forEach((piece, square) => {
      if (piece && !movingSources.has(square) && after[square] !== piece) {
        captured.push(overlay(piece, square, square).ghost);
      }
    });
    busy = true;
    index = nextIndex;
    instantRender();
    const hiddenDestinations = movers.map(({ to }) => squares[to].querySelector('.game-piece'));
    hiddenDestinations.forEach(image => { image.style.visibility = 'hidden'; });
    // Ghosts were placed at their source before state changes. Paint that frame
    // explicitly, then animate only the independent overlay elements.
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    if (animationEnabled) {
      activeAnimations = movers.map(({ ghost, dx, dy }) => ghost.animate([
        { transform: 'translate(0, 0)' },
        { transform: `translate(${dx}px, ${dy}px)` },
      ], { duration, easing: 'ease-out', fill: 'forwards' }));
      captured.forEach(ghost => activeAnimations.push(ghost.animate([
        { opacity: 1 }, { opacity: 0 },
      ], { delay: duration * .75, duration: duration * .25, fill: 'forwards' })));
      await Promise.all(activeAnimations.map(animation => animation.finished.catch(() => {})));
    }
    hiddenDestinations.forEach(image => { image.style.visibility = ''; });
    layer.replaceChildren();
    activeAnimations.forEach(animation => animation.cancel());
    activeAnimations = [];
    busy = false;
    updateLabels();
  }
  // Board-relative overlays naturally follow scrolling. If resized mid-flight,
  // settle the recorded state rather than retaining stale pixel measurements.
  window.addEventListener('resize', () => activeAnimations.forEach(animation => animation.cancel()));
  motionToggle.addEventListener('change', () => {
    animationEnabled = motionToggle.checked;
    try { localStorage.setItem(preferenceKey, String(animationEnabled)); } catch {}
    if (!animationEnabled) activeAnimations.forEach(animation => animation.cancel());
  });
  controls.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button || button.disabled || busy) return;
    const nextIndex = button.dataset.action === 'start' ? 0
      : button.dataset.action === 'end' ? positions.length - 1
      : Math.max(0, Math.min(positions.length - 1, index + (button.dataset.action === 'next' ? 1 : -1)));
    navigate(nextIndex);
  });
  instantRender();
  controls.hidden = false;
})();
