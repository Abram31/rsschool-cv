let blockCodeExample = document.querySelector('.codeexample');

let buttonCodeExample = document.querySelector('.floating-button');


buttonCodeExample.addEventListener('click', toggleCode)

function toggleCode() {
    blockCodeExample.classList.toggle('show')
}