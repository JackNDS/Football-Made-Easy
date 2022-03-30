const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const social = document.querySelector('.social');
const scrollDown = document.querySelector('.scroll-down');
const sectionHeading = document.querySelector('.section-2-heading');
const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');

menu.addEventListener('click', () => {
  navbar.classList.toggle('change');
  menu.classList.toggle('change');
  social.classList.toggle('change');
});

scrollDown.addEventListener('click', () => {
  sectionHeading.classList.add('change');
  box1.classList.add('change');
  box2.classList.add('change');
  box3.classList.add('change');
});

var counter = 1;
const leftClick = document.querySelector('.left-arrow');
const rightClick = document.querySelector('.right-arrow');


leftClick.addEventListener('click', () => {
  document.getElementById('radio' + counter).checked = true;
  counter--;
  if (counter < 1) {
    counter = 4;
  }
});

rightClick.addEventListener('click', () => {
  document.getElementById('radio' + counter).checked = true;
  setInterval(0);
  counter++;
  if (counter > 4) {
    counter = 1;
  }
});

(function() {
  var d = document,
    accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
    setAria,
    setAccordionAria,
    switchAccordion,
    touchSupported = 'ontouchstart' in window,
    pointerSupported = 'pointerdown' in window;

  skipClickDelay = function(e) {
    e.preventDefault();
    e.target.click();
  };

  setAriaAttr = function(el, ariaType, newProperty) {
    el.setAttribute(ariaType, newProperty);
  };
  setAccordionAria = function(el1, el2, expanded) {
    switch (expanded) {
      case 'true':
        setAriaAttr(el1, 'aria-expanded', 'true');
        setAriaAttr(el2, 'aria-hidden', 'false');
        break;
      case 'false':
        setAriaAttr(el1, 'aria-expanded', 'false');
        setAriaAttr(el2, 'aria-hidden', 'true');
        break;
      default:
        break;
    }
  };
  //function
  switchAccordion = function(e) {
    console.log('triggered');
    e.preventDefault();
    var thisAnswer = e.target.parentNode.nextElementSibling;
    var thisQuestion = e.target;
    if (thisAnswer.classList.contains('is-collapsed')) {
      setAccordionAria(thisQuestion, thisAnswer, 'true');
    } else {
      setAccordionAria(thisQuestion, thisAnswer, 'false');
    }
    thisQuestion.classList.toggle('is-collapsed');
    thisQuestion.classList.toggle('is-expanded');
    thisAnswer.classList.toggle('is-collapsed');
    thisAnswer.classList.toggle('is-expanded');

    thisAnswer.classList.toggle('animateIn');
  };
  for (var i = 0, len = accordionToggles.length; i < len; i++) {
    if (touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if (pointerSupported) {
      accordionToggles[i].addEventListener(
        'pointerdown',
        skipClickDelay,
        false
      );
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();

// Club Promo Codes

function copyFunction() {
  var copyText = document.getElementById('myInput');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('Copied the text: ' + copyText.value);
}

function copyFunction2() {
  var copyText = document.getElementById('myInput2');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('Copied the text: ' + copyText.value);
}
