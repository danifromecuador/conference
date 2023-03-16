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

const speakerData = [
  {
    name: 'John Smith',
    position: 'university',
    details: 'lorem',
    photo: 'images/photos/photo1',
  },
  {
    name: 'John Smith 2',
    position: 'university 2',
    details: 'lorem 2',
    photo: 'images/photos/photo1 2',
  },
];

const html = `
  <div class="speaker">
    <img src="" alt="" class="photo">
    <div class="resume">
      <div class="name">${speakerData[0].name}</div>
      <div class="title">Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</div>
      <div class="horizontal-rule"></div>
      <div class="description">Lorem ipsum dolor sit amet  asperiores eius! Iste fuga vel perspiciatis iusto?</div>
    </div>
  </div
`;

const newSpeaker = document.querySelector('.new-speaker');

ham.addEventListener('click', () => {
  newSpeaker.innerHTML = html;

});