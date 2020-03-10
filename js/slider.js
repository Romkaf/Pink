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
    toggles[i].className = toggles[i].className.replace("active", "");
    // toggles[i].classList.remove('active');
  }

  if(window.matchMedia('(max-width: 659px)').matches){
    reviews[reviewIndex - 1].style.display = "flex";
    toggles[reviewIndex - 1].className += " active";
  } else {
      reviews[reviewIndex - 1].style.display = "block";
      toggles[reviewIndex - 1].className += " active";
    } 
  window.onresize = function() {
      if(window.matchMedia('(min-width: 660px)').matches){
        reviews[reviewIndex - 1].style.display = "block";
      } else {
          reviews[reviewIndex - 1].style.display = "flex";
        }
    };
}

var prev = document.querySelector('.reviews__prev');
var next = document.querySelector('.reviews__next');
var review = document.querySelectorAll('.reviews__block');
var buttonToggle = document.querySelectorAll('.reviews__toggle');

prev.addEventListener('click', function() {
  for (let i = 0; i < review.length; i++) {
    review[i].classList.remove('translate-right');
    review[i].classList.add('translate-left'); 
    setTimeout (function() {
      review[i].classList.remove('translate-left');;
    }, 600);
  }
});

next.addEventListener('click', function() {
  for (let i = 0; i < review.length; i++) {
    review[i].classList.remove('translate-left');
    review[i].classList.add('translate-right');
    setTimeout (function() {
      review[i].classList.remove('translate-right');;
    }, 600);
  }
});

for (let j = 0; j < 3; j++) {
  buttonToggle[j].addEventListener('click', function() {
    for (let i = 0; i < review.length; i++) {
      review[i].classList.add('fade-animation');
      setTimeout (function() {
        review[i].classList.remove('fade-animation');;
      }, 600);
    }
  }); 
}

