const main: any = document.querySelector('main')

const descripton: any = main.querySelector('.description')

const animItems = main.querySelectorAll('.container')

Array.from(descripton.children).forEach(child => {
    child.classList.add('active')
})



window.addEventListener("scroll", () => {
    if (main.children.length > 1) {
        for (let i:number = 1; i < main.children.length; i++) {
            const animationElement = animItems[i];
            const animStart = 8;
            const animationItemHeight:number = animationElement.offsetHeight;
            const animationItemOffset = offset(animationElement).top;

            let animItemPoint = window.innerHeight - animationItemHeight / animStart;
            if (animationItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animationItemOffset - animItemPoint) && pageYOffset < (animationItemOffset + animationItemHeight)) {
                animationElement.classList.add('active')
                
            } else { 
                // animationElement.classList.remove('active')
            }


        }
    }
}
)

let offset = (el: any) => {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}