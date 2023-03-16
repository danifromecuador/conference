const ham = document.querySelector('.ham');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const about = document.querySelector('#about-link');

ham.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide');
});

mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide');
});

about.addEventListener('click', () => {
    alert('About');
    mobileMenu.classList.toggle('hide');
});