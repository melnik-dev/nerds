var labeles = document.querySelectorAll('[for^="btn-"]');
var slides = document.querySelectorAll('.slides');
var slideHaid = function (slides) {
    for (var j = 0; j < slides.length; j++) {
      slides[j].classList.add('haid-slid');
    }
};

var clickHandler = function (label, slid) {
  label.addEventListener('click', function () {
    slideHaid(slides);
    slid.classList.remove('haid-slid');
  });
};

for (var i = 0; i < labeles.length; i++) {
  clickHandler(labeles[i], slides[i]);
}


var feedback = document.querySelector('.button.feedback-btn');
var modal = document.querySelector('.feedback');
var modalClose = document.querySelector('.feedback-close');
var form = modal.querySelector('form');
var names = modal.querySelector('#you-name');
var emails = modal.querySelector('#you-mail');
var messages = modal.querySelector('#text-field');


feedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('feedback-show');
    names.focus();
});

modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('feedback-show');
    modal.classList.remove('feedback-error');
});

form.addEventListener('submit', function (evt) {
    if (!names.value || !emails.value || messages.value) {
    evt.preventDefault();
    modal.classList.remove('feedback-error');
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add('feedback-error');
    }
});

window.addEventListener('keydown', function (evt) {
    if(evt.keyCode === 27) {
        if (modal.classList.contains('feedback-show')) {
            evt.preventDefault();
            modal.classList.remove('feedback-show');
            modal.classList.remove('feedback-error');
        }

    }
});