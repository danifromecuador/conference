const ham = document.querySelector('.ham');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const about = document.querySelector('#about-link');
const navBar = document.querySelector('.nav-bar');

ham.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide');
  navBar.classList.toggle('hide');
});

mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide');
  navBar.classList.toggle('hide');
});

about.addEventListener('click', () => {
    mobileMenu.classList.toggle('hide');
    navBar.classList.toggle('hide');
});
