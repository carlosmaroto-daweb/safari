/********************************** MENU MOBILE **********************************/

const header = document.getElementById('header');
const menu_collapse = document.getElementById('menu-collapse');
const menu_mobile = document.getElementById('menu-mobile');

menu_collapse.addEventListener("click", function(){
    if(!menu_collapse.classList.contains('menu-collapse-active')) {
        header.classList.add('dark-gray-color');
        menu_mobile.classList.add('display-block');
        menu_collapse.classList.add('menu-collapse-active');
    } else {
        header.classList.remove('dark-gray-color');
        menu_mobile.classList.remove('display-block');
        menu_collapse.classList.remove('menu-collapse-active');
    }
});

/********************************** SCROLL TO TOP **********************************/

let scroll_to_top = document.getElementById('scroll-to-top');

function isInBottomHalf() {
    let result;
    let middle = document.body.clientHeight/2;
    if(window.scrollY>middle) {
        result = true;
    }
    else {
        result = false;
    }
    return result;
}

function manageAnimations() {
    if (isInBottomHalf()) {
        scroll_to_top.classList.replace('animate-slide-top', 'animate-slide-top-viewport');
    }
    else {
        scroll_to_top.classList.replace('animate-slide-top-viewport', 'animate-slide-top');
    }
}

window.addEventListener('load', manageAnimations);
window.addEventListener('scroll', manageAnimations);