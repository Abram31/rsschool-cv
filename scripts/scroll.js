// ----------------------Smooth scroll ----------------------------------------
var hrefs = document.querySelectorAll('a[href*="#"]');
var _loop_1 = function (href) {
    href.addEventListener('click', function (event) {
        event.preventDefault();
        var blockID = href.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
};
for (var _i = 0, hrefs_1 = hrefs; _i < hrefs_1.length; _i++) {
    var href = hrefs_1[_i];
    _loop_1(href);
}
// --------------------------Change Background Header with Scroll-----------------------------------
var header = document.querySelector('.header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 135) {
        header.classList.add('header-background-color-scroll');
    }
    else {
        header.classList.remove('header-background-color-scroll');
    }
});
