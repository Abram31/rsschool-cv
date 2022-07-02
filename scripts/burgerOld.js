const burger  = document.querySelector('.header_burger');
const menu = document.querySelectorAll('.header_menu');
console.log(burger);
console.log(menu);
burger.addEventListener('click', function () {
    menu.forEach(block => {
        block.classList.toggle('active');
    })   
}  
    

)



