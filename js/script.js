// ---------- mobile menu toggle ----------
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-menu');
    menuIcon.classList.toggle('bx-x');
  });

  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });
}

// ---------- scroll-spy active nav link ----------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = window.scrollY + 120;
    if (top >= sec.offsetTop && top < sec.offsetTop + sec.offsetHeight) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });

  document.querySelector('.header').style.boxShadow =
    window.scrollY > 40 ? '0 6px 24px -12px rgba(0,0,0,0.6)' : 'none';
});

// ---------- typed.js rotating role text ----------
if (window.Typed) {
  new Typed('.multiple-text', {
    strings: [
      'Software QA Engineer',
      'Manual & Automation Tester',
      'API Testing Specialist',
      'Bug Hunter'
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1400,
    loop: true
  });
}

// ---------- scrollreveal animations ----------
if (window.ScrollReveal) {
  const sr = ScrollReveal({
    distance: '40px',
    duration: 900,
    easing: 'cubic-bezier(.5,0,0,1)',
    reset: false
  });

  sr.reveal('.home-content', { origin: 'left', delay: 100 });
  sr.reveal('.home-img', { origin: 'right', delay: 200 });
  sr.reveal('.about-img', { origin: 'left' });
  sr.reveal('.about-content', { origin: 'right' });
  sr.reveal('.services-box', { origin: 'bottom', interval: 120 });
  sr.reveal('.portfolio-box', { origin: 'bottom', interval: 100 });
  sr.reveal('.contact form', { origin: 'bottom' });
}

// ---------- generic dialog (modal) open/close ----------
function wireDialog(openId, dialogId, closeId) {
  const openBtn = document.getElementById(openId);
  const dialog = document.getElementById(dialogId);
  const closeBtn = document.getElementById(closeId);
  if (!openBtn || !dialog || !closeBtn) return;

  openBtn.addEventListener('click', () => dialog.showModal());
  closeBtn.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
}

wireDialog('abtreadmore', 'aboutdialog', 'okbtn0');
wireDialog('readmore', 'favDialog', 'okbtn');
wireDialog('readmore2', 'favDialog2', 'okbtn2');
wireDialog('readmore3', 'favDialog3', 'okbtn3');
