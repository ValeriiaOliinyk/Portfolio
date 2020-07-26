import { link, list, burger, body } from './refs';

const onChangeClass = () => {
  burger.classList.toggle('active');
  list.classList.toggle('active');
  body.classList.toggle('lock');
};

const onDeleteClass = e => {
  if (e.target.nodeName !== 'A') return;
  burger.classList.remove('active');
  list.classList.remove('active');
  body.classList.remove('lock');
};

burger.addEventListener('click', onChangeClass);
link.addEventListener('click', onDeleteClass);
