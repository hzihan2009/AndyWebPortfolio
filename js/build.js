// Keep editable copy in one place while retaining readable HTML fallbacks.
// No fetch, routing, framework, or build step: also works from file://.
(() => {
  const content = window.buildContent;
  if (!content) return;
  function valueAt(key) {
    return key.split('.').reduce((value, part) => value?.[part], content);
  }
  document.querySelectorAll('[data-copy]').forEach(element => {
    const text = valueAt(element.dataset.copy);
    if (typeof text === 'string') element.textContent = text;
  });
  document.querySelectorAll('[data-features]').forEach(list => {
    const items = valueAt(list.dataset.features);
    if (!Array.isArray(items)) return;
    list.replaceChildren(...items.map(text => {
      const item = document.createElement('li');
      item.textContent = text;
      return item;
    }));
  });
  document.querySelectorAll('[data-screenshot]').forEach(figure => {
    const screenshot = valueAt(figure.dataset.screenshot);
    if (!screenshot) return;
    const caption = figure.querySelector('figcaption');
    caption.textContent = screenshot.label;
    const placeholderLabel = figure.querySelector('.screenshot-label');
    if (placeholderLabel) placeholderLabel.textContent = screenshot.label;
    if (screenshot.src) {
      const image = figure.querySelector('img') || document.createElement('img');
      image.src = screenshot.src;
      image.alt = screenshot.alt;
      image.loading = 'lazy';
      if (screenshot.width) image.width = screenshot.width;
      if (screenshot.height) image.height = screenshot.height;
      const link = figure.querySelector('.photo a') || document.createElement('a');
      link.href = screenshot.src;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `Open ${screenshot.label} screenshot at full size (new tab)`);
      if (image.parentElement !== link) link.replaceChildren(image);
      if (link.parentElement !== figure.querySelector('.photo')) figure.querySelector('.photo').replaceChildren(link);
      figure.querySelector('.photo').classList.remove('is-placeholder');
    }
  });
  const liveLink = document.querySelector('[data-live-link]');
  if (liveLink && /^https:\/\//i.test(content.solve.liveUrl)) {
    liveLink.href = content.solve.liveUrl;
    liveLink.hidden = false;
  }
})();
