var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle')
var blueHeader = document.querySelector('.page-header');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    blueHeader.classList.add('page-header--blue');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    blueHeader.classList.remove('page-header--blue');
  };
});