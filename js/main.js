// ── Scroll-aware nav background
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 40
    ? 'rgba(15,15,19,0.97)'
    : 'rgba(15,15,19,0.85)';
});

// ── Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
if (toggle && navLinks) {
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('open');
  });
  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

// ── Scroll-reveal — uses CSS .reveal / .visible classes
// so content is never invisible if JS is slow to parse
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target); // only animate once
    }
  }),
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll(
  '.feature-card, .showcase__row, .step, .device-card, .tour-card, .guide-step, .faq-item, .tour-card, .help-banner'
).forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
