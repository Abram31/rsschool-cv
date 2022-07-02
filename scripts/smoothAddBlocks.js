var main = document.querySelector('main');
var descripton = main.querySelector('.description');
var animItems = main.querySelectorAll('.container');
Array.from(descripton.children).forEach(function (child) {
    child.classList.add('active');
});
window.addEventListener("scroll", function () {
    if (main.children.length > 1) {
        for (var i = 1; i < main.children.length; i++) {
            var animationElement = animItems[i];
            var animStart = 8;
            var animationItemHeight = animationElement.offsetHeight;
            var animationItemOffset = offset(animationElement).top;
            var animItemPoint = window.innerHeight - animationItemHeight / animStart;
            if (animationItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animationItemOffset - animItemPoint) && pageYOffset < (animationItemOffset + animationItemHeight)) {
                animationElement.classList.add('active');
            }
            else {
                // animationElement.classList.remove('active')
            }
        }
    }
});
var offset = function (el) {
    var rect = el.getBoundingClientRect(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
};
