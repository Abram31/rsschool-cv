var burger = document.querySelector('.header_burger');
var menu = document.querySelectorAll('.header_menu');
var firstLine = burger.querySelector('.burger-first-line');
var secondLine = burger.querySelector('.burger-second-line');
var thirdLine = burger.querySelector('.burger-third-line');
burger.addEventListener('click', function () {
    menu.forEach(function (block) {
        block.classList.toggle('active');
    });
    firstLine.classList.toggle('burger-first-line-active');
    secondLine.classList.toggle('burger-second-line-active');
    thirdLine.classList.toggle('burger-third-line-active');
});
