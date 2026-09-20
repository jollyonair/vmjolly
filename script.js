const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];
const quickLinks = [...document.querySelectorAll('[data-open-tab]')];

function activateTab(name, { updateHash = true, focusPanel = false } = {}) {
  const tab = tabs.find((item) => item.dataset.tab === name);
  const panel = document.getElementById(name);
  if (!tab || !panel) return;

  tabs.forEach((item) => {
    const active = item === tab;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
  });

  panels.forEach((item) => item.classList.toggle('is-active', item === panel));

  if (updateHash) {
    history.replaceState(null, '', `#${name}`);
  }

  if (focusPanel) {
    panel.focus({ preventScroll: true });
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab.dataset.tab));

  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();

    let targetIndex = index;
    if (event.key === 'ArrowRight') targetIndex = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') targetIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') targetIndex = 0;
    if (event.key === 'End') targetIndex = tabs.length - 1;

    tabs[targetIndex].focus();
    activateTab(tabs[targetIndex].dataset.tab, { focusPanel: false });
  });
});

quickLinks.forEach((link) => {
  link.addEventListener('click', () => activateTab(link.dataset.openTab, { focusPanel: true }));
});

window.addEventListener('hashchange', () => {
  const name = location.hash.replace('#', '');
  if (name) activateTab(name, { updateHash: false });
});

const initial = location.hash.replace('#', '');
if (initial && panels.some((panel) => panel.id === initial)) {
  activateTab(initial, { updateHash: false });
} else {
  activateTab('home', { updateHash: false });
}

document.getElementById('year').textContent = new Date().getFullYear();
