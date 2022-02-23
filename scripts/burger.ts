const burger:any = document.querySelector('.header_burger');
const menu:any = document.querySelectorAll('.header_menu');

const firstLine: any = burger.querySelector('.burger-first-line')
const secondLine: any = burger.querySelector('.burger-second-line')
const thirdLine: any = burger.querySelector('.burger-third-line')


burger.addEventListener('click',  () => {
    menu.forEach(block => {
        block.classList.toggle('active');

    })
    firstLine.classList.toggle('burger-first-line-active')
    secondLine.classList.toggle('burger-second-line-active')
    thirdLine.classList.toggle('burger-third-line-active')

}


)