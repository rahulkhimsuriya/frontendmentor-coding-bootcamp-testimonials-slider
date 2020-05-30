var slide1 = document.querySelector('.js--slide-1');
var slide2 = document.querySelector('.js--slide-2');

document
  .querySelector('.js--slide-1 .button-group .next')
  .addEventListener('click', (e) => {
    gotoSlide2();
  });

document
  .querySelector('.js--slide-1 .button-group .pre')
  .addEventListener('click', (e) => {
    gotoSlide2();
  });

document
  .querySelector('.js--slide-2 .button-group .next')
  .addEventListener('click', (e) => {
    gotoSlide1();
  });

document
  .querySelector('.js--slide-2 .button-group .pre')
  .addEventListener('click', (e) => {
    gotoSlide1();
  });

function gotoSlide1() {
  slide2.classList.remove('active');

  slide1.classList.add('active');
}

function gotoSlide2() {
  slide1.classList.remove('active');

  slide2.classList.add('active');
}
