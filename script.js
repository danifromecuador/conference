const ham = document.querySelector('.ham');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

ham.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide');
});

mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide');
});
