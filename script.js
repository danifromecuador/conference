const ham = document.querySelector('.ham');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const about = document.querySelector('#about-link');
const navBar = document.querySelector('.nav-bar');
const body = document.querySelector('.body');
const aboutDesk = document.querySelector('#nav-desk-about');

ham.addEventListener('click', () => { // open mobile menu and hide nav bar
  mobileMenu.classList.toggle('hide');
  navBar.classList.toggle('hide');
  body.classList.toggle('mobile-menu-open'); // avoid scrolling body when mobile menu is open
});

mobileMenuClose.addEventListener('click', () => { // close mobile menu and show nav bar
  mobileMenu.classList.toggle('hide');
  navBar.classList.toggle('hide');
  body.classList.toggle('mobile-menu-open');
});

about.addEventListener('click', () => { // close mobile menu and show nav bar and navigate to about section
  mobileMenu.classList.toggle('hide');
  navBar.classList.toggle('hide');
  body.classList.toggle('mobile-menu-open');
});

aboutDesk.addEventListener('click', () => {
  about.classList.toggle('about');
});

const speakerData = [
  {
    name: 'Richard Dawkins',
    title: 'Professor of Evolutionary Biology at the University of Oxford',
    description: 'Dawkins is famous for his contributions to the theory of evolution, particularly for his book "The Selfish Gene" (1976)',
    photo: 'images/photos/speaker1_rd.jpg',
  },
  {
    name: 'Juan Eslava Galan',
    title: 'Professor of Contemporary History at the University of Zaragoza',
    description: 'Galán is famous for his literary works, which include novels and historical studies. His famous book: "En Busca del Unicornio"',
    photo: 'images/photos/speaker2_jeg.jpg',
  },
  {
    name: 'James Randy',
    title: 'Canadian-American magician, skeptic, and investigator of paranormal claims',
    description: ' He was famous for his work debunking pseudoscientific claims, particularly in the fields of psychic phenomena.',
    photo: 'images/photos/speaker3_jr.jpg',
  },
  {
    name: 'Mauricio-Jose Schwarz',
    title: 'Mexican novelist,journalist and photographer, based in Spain from 1999',
    description: 'Mainly oriented to gender literature (science fiction, terror, police) has published more than a hundred stories in magazines in the US.',
    photo: 'images/photos/speaker4_mjs.jpg',
  },
  {
    name: 'Carl Sagan',
    title: 'He worked in Harvard University, Cornell University, and the Jet Propulsion Laboratory',
    description: 'He is famous for his contributions to the study of the solar system, his work on the Voyager mission, and for popularizing science.',
    photo: 'images/photos/speaker5_cs.jpg',
  },
  {
    name: 'Bertrand Russell',
    title: ' British philosopher and mathematician at  Cambridge, and the University of Chicago',
    description: 'He is famous for his contributions to logic, set theory, and analytic philosophy, as well as his political activism and human rights.',
    photo: 'images/photos/speaker6_br.jpg',
  },
];

const speakerContainer = document.querySelector('.speaker-container');

document.addEventListener('DOMContentLoaded', () => { // when the DOM loads
  for (let i = 0; i < 6; i += 1) { // this loops 6 times for 6 speakers
    const html = `
  <div class="speaker">
    <img src="${speakerData[i].photo}" alt="" class="photo">
    <div class="resume">
      <div class="name">${speakerData[i].name}</div>
      <div class="title">${speakerData[i].title}</div>
      <div class="horizontal-rule"></div>
      <div class="description">${speakerData[i].description} </div>
    </div>
  </div
  `;
    speakerContainer.innerHTML += html; // this adds more speakers instead of replacing them
  }
});