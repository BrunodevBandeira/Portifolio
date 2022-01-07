const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');

let pos = 0;

btnRight.addEventListener('click', function() {
    pos = pos + 150;
    elements.style = `transform: translateX(${pos}px)`;
});

btnLeft.addEventListener('click', function() {
    pos = pos - 150;
    elements.style = `transform: translateX(${pos}px)`;
});

