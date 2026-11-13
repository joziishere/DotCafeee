/* Menu page. The hamburger itself is handled by script.js (loaded first). */

/* If a dish photo is missing, hide the broken icon and keep the glass frame */
document.querySelectorAll('.item-pic img').forEach(img => {
  const markMissing = () => img.closest('.item-pic').classList.add('no-img');
  img.addEventListener('error', markMissing);
  if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) markMissing();
});

/* Highlight the current category in the hamburger panel while scrolling */
const links = [...document.querySelectorAll('#drawer a[href^="#"]')];
const byId = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => l.removeAttribute('aria-current'));
      const active = byId.get(entry.target.id);
      if (active) active.setAttribute('aria-current', 'true');
    });
  }, { rootMargin: '-35% 0px -55% 0px' });

  document.querySelectorAll('.menu-section').forEach(section => observer.observe(section));
}