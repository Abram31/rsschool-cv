const burger  = document.querySelector('.header_burger');
const menu = document.querySelector('.header_menu');
console.log(burger);
console.log(menu);
burger.addEventListener('click', function () {
    menu.classList.toggle('active');
}  
    

)