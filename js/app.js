/* ---------- Hamburger drawer ---------- */
const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');
const scrim  = document.getElementById('scrim');

function setDrawer(open) {
  drawer.classList.toggle('open', open);
  scrim.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  drawer.setAttribute('aria-hidden', String(!open));
}

burger.addEventListener('click', () => setDrawer(!drawer.classList.contains('open')));
scrim.addEventListener('click', () => setDrawer(false));
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setDrawer(false)));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && drawer.classList.contains('open')) {
    setDrawer(false);
    burger.focus();
  }
});

/* ---------- Logo upload ---------- */
const input    = document.getElementById('logoInput');
const dropzone = document.getElementById('dropzone');
const preview  = document.getElementById('logoPreview');
const empty    = document.getElementById('dzEmpty');
const card     = document.getElementById('logoCard');
const removeBtn = document.getElementById('removeLogo');
const STORAGE_KEY = 'restaurant-logo';

function showLogo(src) {
  preview.src = src;
  preview.hidden = false;
  empty.hidden = true;
  removeBtn.hidden = false;
  card.classList.add('has-logo');
}

function clearLogo() {
  preview.removeAttribute('src');
  preview.hidden = true;
  empty.hidden = false;
  removeBtn.hidden = true;
  card.classList.remove('has-logo');
  input.value = '';
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
}

function handleFile(file) {
  if (!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = () => {
    showLogo(reader.result);
    // Remember the logo in this browser (skipped silently if the image is too big)
    try { localStorage.setItem(STORAGE_KEY, reader.result); } catch (e) {}
  };
  reader.readAsDataURL(file);
}

input.addEventListener('change', () => handleFile(input.files[0]));
removeBtn.addEventListener('click', clearLogo);

// Keyboard: Enter or Space opens the file picker
dropzone.addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); }
});

// Drag and drop
['dragenter', 'dragover'].forEach(ev =>
  dropzone.addEventListener(ev, e => { e.preventDefault(); dropzone.classList.add('drag'); }));
['dragleave', 'drop'].forEach(ev =>
  dropzone.addEventListener(ev, e => { e.preventDefault(); dropzone.classList.remove('drag'); }));
dropzone.addEventListener('drop', e => handleFile(e.dataTransfer.files[0]));

// Restore saved logo on load
try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) showLogo(saved);
} catch (e) {}