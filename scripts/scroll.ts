
// ----------------------Smooth scroll ----------------------------------------

const hrefs: any = document.querySelectorAll('a[href*="#"]');

for (let href of hrefs) {
    href.addEventListener('click', function (event) {
        event.preventDefault();
        const blockID = href.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "center"
        })

    })
}

// --------------------------Change Background Header with Scroll-----------------------------------

const header: any = document.querySelector('.header')

window.addEventListener('scroll', () => {
    if(window.scrollY > 135) {
        header.classList.add('header-background-color-scroll')
    } else { header.classList.remove('header-background-color-scroll')}
})