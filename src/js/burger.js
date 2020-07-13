const burger = document.querySelector('.nav__burger');
const list = document.querySelector('.nav__list');
const body = document.querySelector('body');

const onChangeClass = () => {
  burger.classList.toggle('active');
  list.classList.toggle('active');
  body.classList.toggle('lock');
};

burger.addEventListener('click', onChangeClass);
