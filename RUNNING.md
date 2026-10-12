# Running and editing

## Running

Open `index.html` directly in a browser, or use VS Code Live Server. Nothing needs compiling or installing.

With Python installed, run this from PowerShell:

```powershell
Set-Location -LiteralPath 'C:\WorkSpace\MyWebPortfolio\AndyWebPortfolio'
python -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/. Keep the terminal open and press Ctrl+C to stop. This machine's Python command currently points to an unavailable Windows app alias; direct file opening or Live Server works without Python.

## Content and images

- `index.html`: hero, Lately values/date, and preview rows.
- `chess.html`: chess introduction, tournament highlights, player labels, and any future stories.
- `music.html`: all listening, Piano, Tenor saxophone, and Art content.
- `build.html`: project layout and readable HTML fallback content.
- `data/build-content.js`: editable project copy and screenshot configuration (`member`, `admin`, and `solve`). The browser applies these values through `js/build.js`; no server or build step is needed. If supporting visitors with JavaScript disabled after a content change, also update the matching fallback text in `build.html`.
- `css/build.css`: Build-page-only layout additions; shared site styling stays in `css/styles.css`.
- Shared navigation and contact/footer markup appears in each HTML file. Edit all four to update shared information.
- `css/styles.css`: fonts, palette variables, original layout, responsive rules, motion/focus styles, and chess styles. Comments separate major areas.

To replace a placeholder, add the image to `images/` and replace the placeholder's `<div class="photo-empty">...</div>` with:

```html
<img src="images/your-photo.jpg" alt="A meaningful description" loading="lazy">
```

Keep the outer `.photo` element and its existing class names. Remove `is-placeholder` from that outer element. Write a caption if appropriate. There is no stock imagery or album artwork. Art placeholders deliberately say "More here soon."

Contact values are currently placeholders. Replace them with normal links such as `<a href="mailto:your-address">your-address</a>` and full HTTPS profile URLs.

## Chess viewer

`js/chess.js` uses only browser JavaScript. It reads the recorded positions in `data/chess-game.js`, expands each position's FEN piece placement, and selects the matching local SVG images. It does not calculate moves, evaluate positions, or load a third-party library.

All 52 recorded positions correspond to the supplied game, including the initial board and all 51 half-moves. Captures and castling are already represented in the positions. Start, previous, next, and end controls are keyboard-accessible. Without JavaScript, the final board and game information remain visible.

- `data/featured-game.pgn`: exact original game and annotations, including the original White header.
- `data/chess-game.js`: `initialPly` selects the first displayed position; 0 starts the game, 51 opens after 26. Qf7. Each position has a label, FEN, and last-move squares.
- `chess.html`: public names, ratings, round, result, analysis link, and static fallback board.
- `images/chess/`: twelve consistent original SVG pieces.

Changing only the PGN text does not regenerate the recorded positions. For a different game, replace both the PGN and the corresponding FEN sequence, and update the static fallback/game labels in `chess.html`. No parser or build step is required to view the current game.

## Migration and validation

The former page templates became the four readable HTML documents. Shared layout/component output is repeated as ordinary HTML. Existing CSS was consolidated into `css/styles.css`; fonts and SVG assets were copied locally. The original PGN was retained, with recorded positions replacing package-based processing.

Before removing the old tooling, browser tests compared the new and original styles and section dimensions at 1280, 800, 390, and 320px. Every game position was checked in the browser, forward/backward navigation and keyboard activation passed, file URLs and no-JavaScript navigation worked, and no console errors or failed requests appeared.
