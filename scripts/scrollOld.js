const hrefs = document.querySelectorAll('a[href*="#"]');
console.log(hrefs);
for (let href of hrefs ) {
    href.addEventListener('click',function (event) {
    event.preventDefault();
    const blockID = href.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
        behavior:"smooth",
        block:"center"
    })
    
} )
}


