


const spoilers = document.querySelectorAll('.questions__spoiler');
const arrows = document.querySelectorAll('.spoiler__title');
spoilers.forEach(spoiler => {
  spoiler.addEventListener('click', showSpoiler);
});
function showSpoiler(event) {
  const spoilerParagraph = event.currentTarget.querySelector('.spoiler__paragraph');
  spoilerParagraph.classList.toggle('active');
  const spoilerTitle = event.currentTarget.querySelector('.spoiler__title');
  spoilerTitle.classList.toggle('active');
}

const menu = document.querySelector('.header__menu')
const burger = document.querySelector('.header__burger');
burger.addEventListener('click', showBurger);
const body = document.querySelector('body');
function showBurger(event){
  burger.classList.toggle('active');
  menu.classList.toggle('active');
}


const contacts = document.getElementById('contacts');
const technologies = document.getElementById('technologies');
const about = document.getElementById('about');
const prices = document.getElementById('prices');
const header = document.querySelector('.header');
const headerHeight = 0; 

contacts.addEventListener('click', scrollToPoint);
technologies.addEventListener('click', scrollToPoint);
about.addEventListener('click', scrollToPoint);
prices.addEventListener('click', scrollToPoint);

function scrollToPoint(event) {
  event.preventDefault();
  const targetId = this.getAttribute('data-target');
  const element = document.querySelector(`.${targetId}`);
  if (element) {
    const elementPosition = element.offsetTop - headerHeight;
    window.scrollTo({
      top: elementPosition + 1,
      behavior: 'instant'
    });
  }
}















  


