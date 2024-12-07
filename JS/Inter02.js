const buttonMenu = document.querySelector('.button-menu');
const headerRight = document.querySelector('.header-right');

buttonMenu.addEventListener('click', () => {
  headerRight.classList.toggle('hidden');
});