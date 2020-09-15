let width = window.innerWidth;
let height = window.innerHeight;
const title = document.querySelector('.nav__title');
const mobileNav = document.querySelector('.nav__mobile');

const nav = document.querySelector(".nav__wrap");

function toggle() {
    if (nav.style.display == "block") {
        nav.style.display = "none"
        title.style.opacity = "1"
        mobileNav.style.animationDuration = '2s';

    } else {
        nav.style.display = "block"
        title.style.opacity = "0.3"
        mobileNav.style.animationDuration = '0s';
    }
}

const sliderTop = document.querySelector('.slider-top');
window.onscroll = function() {scroll()};

function scroll() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        sliderTop.style.display = "block";
    } 
}