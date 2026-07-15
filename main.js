// Rok w stopce
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Hamburger menu (mobile)
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// Podświetlenie aktywnej strony w menu
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) link.setAttribute('aria-current', 'page');
});

// Formularz kontaktowy (demo)
const form = document.getElementById('contactForm');
if (form) {
  const successBox = document.getElementById('formSuccess');
  form.addEventListener('submit', function (e) {
    if (form.action.includes('PLACEHOLDER')) {
      e.preventDefault();
      successBox.classList.add('show');
      successBox.textContent = 'To wersja demonstracyjna — po uruchomieniu strony formularz będzie wysyłał wiadomości bezpośrednio na adres e-mail gabinetu.';
      form.reset();
    }
  });
}

// FAQ — accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-answer').style.maxHeight = null;
      }
    });
    if (isOpen) {
      item.classList.remove('open');
      answer.style.maxHeight = null;
    } else {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});
