let width = window.innerWidth;
let height = window.innerHeight;
const title = document.querySelector('.nav__title');
const mobileNav = document.querySelector('.nav__mobile');
const midBar = document.querySelector('.nav__toggle');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

const nav = document.querySelector(".nav__wrap");

function toggle() {
    if (nav.style.display == "block") {
        nav.style.display = "none"
        title.style.opacity = "1"
        mobileNav.style.animationDuration = '2s';
        one.style.top = '-3px';
        one.style.transform = "rotate(0)";
        one.style.width = '50%';
        one.style.transition = 'transform 1s';
        one.style.transitionDelay = 'background-color 2s';
        two.style.top = '-13px';
        two.style.transform = 'rotate(180deg)';
        two.style.opacity = '1';
        two.style.width = '50%';
        two.style.transition = 'transform 500ms, opacity 250ms';
        three.style.transform = "rotate(0)";
        three.style.transition = 'transform 1s';
        three.style.width = '50%';
        three.style.bottom = '23px';

    } else {
        nav.style.display = "block"
        title.style.opacity = "0.3"
        mobileNav.style.animationDuration = '0s';
        nav.style.display = 'block';
        one.style.top = '0';
        one.style.width = '70%';
        one.style.transition = 'transform 1s';
        one.style.transform = "rotate(315deg)";
        one.style.transitionDelay = 'top 1s';
        two.style.transform = 'rotate(90deg)';
        two.style.opacity = '0';
        two.style.transition = 'transform 250ms, opacity 250ms';
        three.style.transform = "rotate(-315deg)";
        three.style.width = '70%';
        three.style.transition = 'transform 1s';
        three.style.bottom = '36px';
    }
}

const sliderTop = document.querySelector('.slider-top');
window.onscroll = function() {scroll()};

function scroll() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        sliderTop.style.display = "block";
    } 
}