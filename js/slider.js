var reviewIndex = 1;

showReviews(reviewIndex);

function plusReview(n) {
  showReviews(reviewIndex += n); 
}

function currentReview(n) {
  reviewIndex = n;
  showReviews(n);
}


function showReviews(n) {
  var i;
  var reviews = document.getElementsByClassName("reviews__block");
  var toggles = document.getElementsByClassName("reviews__toggle");
// Следит за изменением ширины экрана на 660 px и при большем значении даёт нужному отзыву display:block, а при меньше 660px присваивает display:flex. 
  const tabletMediaQuery = window.matchMedia('(min-width: 660px)');

  tabletMediaQuery.addListener(function(evt) {
    // console.log(evt);
    const condition = evt.matches;

    if(condition){
      reviews[reviewIndex - 1].style.display = "block";
    } else {
        reviews[reviewIndex - 1].style.display = "flex";
      }
  });

// Присваивает block текущему отзыву при вьюпорте > 660px, иначе flex.
  const handleResize = function() {
    if(tabletMediaQuery.matches){
      reviews[reviewIndex - 1].style.display = "block";
    } else {
        reviews[reviewIndex - 1].style.display = "flex";
      }
  };

  if (n > reviews.length) {
    reviewIndex = 1; 
  }

  if (n < 1) {
    reviewIndex = reviews.length
  }
  
  for (i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }

  for (i = 0; i < toggles.length; i++) {
    toggles[i].classList.remove('active');
  }

  toggles[reviewIndex - 1].className += " active";
// Ф-ция выполняется каждый раз при нажатии на кнопку или загрузки страницы
  handleResize(); 
}

var prev = document.querySelector('.reviews__prev');
var next = document.querySelector('.reviews__next');
var reviews = document.querySelectorAll('.reviews__block');
var buttonToggles = document.querySelectorAll('.reviews__toggle');
// Присваение блокам отзывов анмации 'translate-left' при нжатии на prev и 'translate-right' при нажатии на next.
const handleArrowClick = function(direction) {
  for (let i = 0; i < reviews.length; i++) {
    reviews[i].classList.remove('translate-left');
    reviews[i].classList.remove('translate-right');

   if (direction === 'prev') {
    reviews[i].classList.add('translate-left'); 
    setTimeout (function() {
      reviews[i].classList.remove('translate-left');
    }, 600);
   } else {
    reviews[i].classList.add('translate-right');
    setTimeout (function() {
      reviews[i].classList.remove('translate-right');
    }, 600);
   }
  }
}

prev.addEventListener('click', function() { handleArrowClick('prev') });
next.addEventListener('click', function() { handleArrowClick() });

//Присваение блокам отзывов  класса с анимацией fade и удалением этого класса через 600мс
for (let j = 0; j < 3; j++) {
  buttonToggles[j].addEventListener('click', function() {
    for (let i = 0; i < reviews.length; i++) {
      reviews[i].classList.add('fade-animation');
      setTimeout (function() {
        reviews[i].classList.remove('fade-animation');;
      }, 600);
    }
  }); 
}

