/********************************** FACILITIES CAROUSEL **********************************/

const facilities_slider        = document.getElementById('facilities-slider');
const facilities_slider_nav    = document.getElementById('facilities-slider-nav');
const child_facilities         = document.getElementById('facilities-slider-nav').children;
const facilities_item_1        = document.getElementById('facilities-item-1');
const facilities_item_2        = document.getElementById('facilities-item-2');
const facilities_item_3        = document.getElementById('facilities-item-3');
const facilities_item_4        = document.getElementById('facilities-item-4');
const facilities_item_5        = document.getElementById('facilities-item-5');
const facilities_item_6        = document.getElementById('facilities-item-6');
const facilities_chevron_left  = document.getElementById('facilities-chevron-left');
const facilities_chevron_right = document.getElementById('facilities-chevron-right');

facilities_item_1.addEventListener("click", function(){
    facilities_slider.classList.remove('facilities-1', 'facilities-2', 'facilities-3', 'facilities-4', 'facilities-5', 'facilities-6');
    facilities_slider.classList.add('facilities-1');
    for (let i=0; i<child_facilities.length; i++) {
        child_facilities[i].classList.remove('active');
    }
    facilities_item_1.classList.add('active');
});
facilities_item_2.addEventListener("click", function(){
    facilities_slider.classList.remove('facilities-1', 'facilities-2', 'facilities-3', 'facilities-4', 'facilities-5', 'facilities-6');
    facilities_slider.classList.add('facilities-2');
    for (let i=0; i<child_facilities.length; i++) {
        child_facilities[i].classList.remove('active');
    }
    facilities_item_2.classList.add('active');
});
facilities_item_3.addEventListener("click", function(){
    facilities_slider.classList.remove('facilities-1', 'facilities-2', 'facilities-3', 'facilities-4', 'facilities-5', 'facilities-6');
    facilities_slider.classList.add('facilities-3');
    for (let i=0; i<child_facilities.length; i++) {
        child_facilities[i].classList.remove('active');
    }
    facilities_item_3.classList.add('active');
});
facilities_item_4.addEventListener("click", function(){
    facilities_slider.classList.remove('facilities-1', 'facilities-2', 'facilities-3', 'facilities-4', 'facilities-5', 'facilities-6');
    facilities_slider.classList.add('facilities-4');
    for (let i=0; i<child_facilities.length; i++) {
        child_facilities[i].classList.remove('active');
    }
    facilities_item_4.classList.add('active');
});
facilities_item_5.addEventListener("click", function(){
    facilities_slider.classList.remove('facilities-1', 'facilities-2', 'facilities-3', 'facilities-4', 'facilities-5', 'facilities-6');
    facilities_slider.classList.add('facilities-5');
    for (let i=0; i<child_facilities.length; i++) {
        child_facilities[i].classList.remove('active');
    }
    facilities_item_5.classList.add('active');
});
facilities_item_6.addEventListener("click", function(){
    facilities_slider.classList.remove('facilities-1', 'facilities-2', 'facilities-3', 'facilities-4', 'facilities-5', 'facilities-6');
    facilities_slider.classList.add('facilities-6');
    for (let i=0; i<child_facilities.length; i++) {
        child_facilities[i].classList.remove('active');
    }
    facilities_item_6.classList.add('active');
});
facilities_chevron_left.addEventListener("click", function(){
    let pos2 = facilities_slider.classList.value.includes('facilities-2');
    let pos3 = facilities_slider.classList.value.includes('facilities-3');
    let pos4 = facilities_slider.classList.value.includes('facilities-4');
    let pos5 = facilities_slider.classList.value.includes('facilities-5');
    let pos6 = facilities_slider.classList.value.includes('facilities-6');
    if(pos2) {
        facilities_slider.classList.remove('facilities-1', 'facilities-2', 'facilities-3', 'facilities-4', 'facilities-5', 'facilities-6');
        facilities_slider.classList.add('facilities-1');
        for (let i=0; i<child_facilities.length; i++) {
            child_facilities[i].classList.remove('active');
        }
        facilities_item_1.classList.add('active');
    }
    else if(pos3) {
        facilities_slider.classList.remove('facilities-1', 'facilities-2', 'facilities-3', 'facilities-4', 'facilities-5', 'facilities-6');
        facilities_slider.classList.add('facilities-2');
        for (let i=0; i<child_facilities.length; i++) {
            child_facilities[i].classList.remove('active');
        }
        facilities_item_2.classList.add('active');
        facilities_slider_nav.style.scrollBehavior = 'smooth';
        facilities_slider_nav.scrollLeft = -window.innerWidth;
    }
    else if(pos4) {
        facilities_slider.classList.remove('facilities-1', 'facilities-2', 'facilities-3', 'facilities-4', 'facilities-5', 'facilities-6');
        facilities_slider.classList.add('facilities-3');
        for (let i=0; i<child_facilities.length; i++) {
            child_facilities[i].classList.remove('active');
        }
        facilities_item_3.classList.add('active');
    }
    else if(pos5) {
        facilities_slider.classList.remove('facilities-1', 'facilities-2', 'facilities-3', 'facilities-4', 'facilities-5', 'facilities-6');
        facilities_slider.classList.add('facilities-4');
        for (let i=0; i<child_facilities.length; i++) {
            child_facilities[i].classList.remove('active');
        }
        facilities_item_4.classList.add('active');
    }
    else if(pos6) {
        facilities_slider.classList.remove('facilities-1', 'facilities-2', 'facilities-3', 'facilities-4', 'facilities-5', 'facilities-6');
        facilities_slider.classList.add('facilities-5');
        for (let i=0; i<child_facilities.length; i++) {
            child_facilities[i].classList.remove('active');
        }
        facilities_item_5.classList.add('active');
    }
});
facilities_chevron_right.addEventListener("click", function(){
    let pos1 = facilities_slider.classList.value.includes('facilities-1');
    let pos2 = facilities_slider.classList.value.includes('facilities-2');
    let pos3 = facilities_slider.classList.value.includes('facilities-3');
    let pos4 = facilities_slider.classList.value.includes('facilities-4');
    let pos5 = facilities_slider.classList.value.includes('facilities-5');
    if(pos1) {
        facilities_slider.classList.remove('facilities-1', 'facilities-2', 'facilities-3', 'facilities-4', 'facilities-5', 'facilities-6');
        facilities_slider.classList.add('facilities-2');
        for (let i=0; i<child_facilities.length; i++) {
            child_facilities[i].classList.remove('active');
        }
        facilities_item_2.classList.add('active');
    }
    else if(pos2) {
        facilities_slider.classList.remove('facilities-1', 'facilities-2', 'facilities-3', 'facilities-4', 'facilities-5', 'facilities-6');
        facilities_slider.classList.add('facilities-3');
        for (let i=0; i<child_facilities.length; i++) {
            child_facilities[i].classList.remove('active');
        }
        facilities_item_3.classList.add('active');
    }
    else if(pos3) {
        facilities_slider.classList.remove('facilities-1', 'facilities-2', 'facilities-3', 'facilities-4', 'facilities-5', 'facilities-6');
        facilities_slider.classList.add('facilities-4');
        for (let i=0; i<child_facilities.length; i++) {
            child_facilities[i].classList.remove('active');
        }
        facilities_item_4.classList.add('active');
    }
    else if(pos4) {
        facilities_slider.classList.remove('facilities-1', 'facilities-2', 'facilities-3', 'facilities-4', 'facilities-5', 'facilities-6');
        facilities_slider.classList.add('facilities-5');
        for (let i=0; i<child_facilities.length; i++) {
            child_facilities[i].classList.remove('active');
        }
        facilities_item_5.classList.add('active');
        facilities_slider_nav.style.scrollBehavior = 'smooth';
        facilities_slider_nav.scrollLeft = window.innerWidth;
    }
    else if(pos5) {
        facilities_slider.classList.remove('facilities-1', 'facilities-2', 'facilities-3', 'facilities-4', 'facilities-5', 'facilities-6');
        facilities_slider.classList.add('facilities-6');
        for (let i=0; i<child_facilities.length; i++) {
            child_facilities[i].classList.remove('active');
        }
        facilities_item_6.classList.add('active');
    }
});

facilities_slider_nav.addEventListener('wheel', (event) => {
    event.preventDefault();
    facilities_slider_nav.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
    });
});

let isDown = false;
let startX;
let scrollLeft;

facilities_slider_nav.addEventListener('mousedown', (event) => {
    isDown = true;
    startX = event.pageX - facilities_slider_nav.offsetLeft;
    scrollLeft = facilities_slider_nav.scrollLeft;
});
facilities_slider_nav.addEventListener('mouseleave', () => {
    isDown = false;
});
facilities_slider_nav.addEventListener('mouseup', () => {
    isDown = false;
});
facilities_slider_nav.addEventListener('mousemove', (event) => {
    if(!isDown) return;
    event.preventDefault();
    const x = event.pageX - facilities_slider_nav.offsetLeft;
    const walk = x - startX;
    facilities_slider_nav.scrollLeft = scrollLeft - walk;
    facilities_slider_nav.style.scrollBehavior = 'auto';
});

/********************************** EXTRA SERVICES CAROUSEL **********************************/

const extra_services_slider        = document.getElementById('extra-services-slider');
const extra_services_slider_nav    = document.getElementById('extra-services-slider-nav');
const child_extra_services         = document.getElementById('extra-services-slider-nav').children;
const extra_services_item_1        = document.getElementById('extra-services-item-1');
const extra_services_item_2        = document.getElementById('extra-services-item-2');
const extra_services_item_3        = document.getElementById('extra-services-item-3');
const extra_services_item_4        = document.getElementById('extra-services-item-4');
const extra_services_item_5        = document.getElementById('extra-services-item-5');
const extra_services_item_6        = document.getElementById('extra-services-item-6');
const extra_services_chevron_left  = document.getElementById('extra-services-chevron-left');
const extra_services_chevron_right = document.getElementById('extra-services-chevron-right');

extra_services_item_1.addEventListener("click", function(){
    extra_services_slider.classList.remove('extra-services-1', 'extra-services-2', 'extra-services-3', 'extra-services-4', 'extra-services-5', 'extra-services-6');
    extra_services_slider.classList.add('extra-services-1');
    for (let i=0; i<child_extra_services.length; i++) {
        child_extra_services[i].classList.remove('active');
    }
    extra_services_item_1.classList.add('active');
});
extra_services_item_2.addEventListener("click", function(){
    extra_services_slider.classList.remove('extra-services-1', 'extra-services-2', 'extra-services-3', 'extra-services-4', 'extra-services-5', 'extra-services-6');
    extra_services_slider.classList.add('extra-services-2');
    for (let i=0; i<child_extra_services.length; i++) {
        child_extra_services[i].classList.remove('active');
    }
    extra_services_item_2.classList.add('active');
});
extra_services_item_3.addEventListener("click", function(){
    extra_services_slider.classList.remove('extra-services-1', 'extra-services-2', 'extra-services-3', 'extra-services-4', 'extra-services-5', 'extra-services-6');
    extra_services_slider.classList.add('extra-services-3');
    for (let i=0; i<child_extra_services.length; i++) {
        child_extra_services[i].classList.remove('active');
    }
    extra_services_item_3.classList.add('active');
});
extra_services_item_4.addEventListener("click", function(){
    extra_services_slider.classList.remove('extra-services-1', 'extra-services-2', 'extra-services-3', 'extra-services-4', 'extra-services-5', 'extra-services-6');
    extra_services_slider.classList.add('extra-services-4');
    for (let i=0; i<child_extra_services.length; i++) {
        child_extra_services[i].classList.remove('active');
    }
    extra_services_item_4.classList.add('active');
});
extra_services_item_5.addEventListener("click", function(){
    extra_services_slider.classList.remove('extra-services-1', 'extra-services-2', 'extra-services-3', 'extra-services-4', 'extra-services-5', 'extra-services-6');
    extra_services_slider.classList.add('extra-services-5');
    for (let i=0; i<child_extra_services.length; i++) {
        child_extra_services[i].classList.remove('active');
    }
    extra_services_item_5.classList.add('active');
});
extra_services_item_6.addEventListener("click", function(){
    extra_services_slider.classList.remove('extra-services-1', 'extra-services-2', 'extra-services-3', 'extra-services-4', 'extra-services-5', 'extra-services-6');
    extra_services_slider.classList.add('extra-services-6');
    for (let i=0; i<child_extra_services.length; i++) {
        child_extra_services[i].classList.remove('active');
    }
    extra_services_item_6.classList.add('active');
});
extra_services_chevron_left.addEventListener("click", function(){
    let pos2 = extra_services_slider.classList.value.includes('extra-services-2');
    let pos3 = extra_services_slider.classList.value.includes('extra-services-3');
    let pos4 = extra_services_slider.classList.value.includes('extra-services-4');
    let pos5 = extra_services_slider.classList.value.includes('extra-services-5');
    let pos6 = extra_services_slider.classList.value.includes('extra-services-6');
    if(pos2) {
        extra_services_slider.classList.remove('extra-services-1', 'extra-services-2', 'extra-services-3', 'extra-services-4', 'extra-services-5', 'extra-services-6');
        extra_services_slider.classList.add('extra-services-1');
        for (let i=0; i<child_extra_services.length; i++) {
            child_extra_services[i].classList.remove('active');
        }
        extra_services_item_1.classList.add('active');
    }
    else if(pos3) {
        extra_services_slider.classList.remove('extra-services-1', 'extra-services-2', 'extra-services-3', 'extra-services-4', 'extra-services-5', 'extra-services-6');
        extra_services_slider.classList.add('extra-services-2');
        for (let i=0; i<child_extra_services.length; i++) {
            child_extra_services[i].classList.remove('active');
        }
        extra_services_item_2.classList.add('active');
        extra_services_slider_nav.style.scrollBehavior = 'smooth';
        extra_services_slider_nav.scrollLeft = -window.innerWidth;
    }
    else if(pos4) {
        extra_services_slider.classList.remove('extra-services-1', 'extra-services-2', 'extra-services-3', 'extra-services-4', 'extra-services-5', 'extra-services-6');
        extra_services_slider.classList.add('extra-services-3');
        for (let i=0; i<child_extra_services.length; i++) {
            child_extra_services[i].classList.remove('active');
        }
        extra_services_item_3.classList.add('active');
    }
    else if(pos5) {
        extra_services_slider.classList.remove('extra-services-1', 'extra-services-2', 'extra-services-3', 'extra-services-4', 'extra-services-5', 'extra-services-6');
        extra_services_slider.classList.add('extra-services-4');
        for (let i=0; i<child_extra_services.length; i++) {
            child_extra_services[i].classList.remove('active');
        }
        extra_services_item_4.classList.add('active');
    }
    else if(pos6) {
        extra_services_slider.classList.remove('extra-services-1', 'extra-services-2', 'extra-services-3', 'extra-services-4', 'extra-services-5', 'extra-services-6');
        extra_services_slider.classList.add('extra-services-5');
        for (let i=0; i<child_extra_services.length; i++) {
            child_extra_services[i].classList.remove('active');
        }
        extra_services_item_5.classList.add('active');
    }
});
extra_services_chevron_right.addEventListener("click", function(){
    let pos1 = extra_services_slider.classList.value.includes('extra-services-1');
    let pos2 = extra_services_slider.classList.value.includes('extra-services-2');
    let pos3 = extra_services_slider.classList.value.includes('extra-services-3');
    let pos4 = extra_services_slider.classList.value.includes('extra-services-4');
    let pos5 = extra_services_slider.classList.value.includes('extra-services-5');
    if(pos1) {
        extra_services_slider.classList.remove('extra-services-1', 'extra-services-2', 'extra-services-3', 'extra-services-4', 'extra-services-5', 'extra-services-6');
        extra_services_slider.classList.add('extra-services-2');
        for (let i=0; i<child_extra_services.length; i++) {
            child_extra_services[i].classList.remove('active');
        }
        extra_services_item_2.classList.add('active');
    }
    else if(pos2) {
        extra_services_slider.classList.remove('extra-services-1', 'extra-services-2', 'extra-services-3', 'extra-services-4', 'extra-services-5', 'extra-services-6');
        extra_services_slider.classList.add('extra-services-3');
        for (let i=0; i<child_extra_services.length; i++) {
            child_extra_services[i].classList.remove('active');
        }
        extra_services_item_3.classList.add('active');
    }
    else if(pos3) {
        extra_services_slider.classList.remove('extra-services-1', 'extra-services-2', 'extra-services-3', 'extra-services-4', 'extra-services-5', 'extra-services-6');
        extra_services_slider.classList.add('extra-services-4');
        for (let i=0; i<child_extra_services.length; i++) {
            child_extra_services[i].classList.remove('active');
        }
        extra_services_item_4.classList.add('active');
    }
    else if(pos4) {
        extra_services_slider.classList.remove('extra-services-1', 'extra-services-2', 'extra-services-3', 'extra-services-4', 'extra-services-5', 'extra-services-6');
        extra_services_slider.classList.add('extra-services-5');
        for (let i=0; i<child_extra_services.length; i++) {
            child_extra_services[i].classList.remove('active');
        }
        extra_services_item_5.classList.add('active');
        extra_services_slider_nav.style.scrollBehavior = 'smooth';
        extra_services_slider_nav.scrollLeft = window.innerWidth;
    }
    else if(pos5) {
        extra_services_slider.classList.remove('extra-services-1', 'extra-services-2', 'extra-services-3', 'extra-services-4', 'extra-services-5', 'extra-services-6');
        extra_services_slider.classList.add('extra-services-6');
        for (let i=0; i<child_extra_services.length; i++) {
            child_extra_services[i].classList.remove('active');
        }
        extra_services_item_6.classList.add('active');
    }
});

extra_services_slider_nav.addEventListener('wheel', (event) => {
    event.preventDefault();
    extra_services_slider_nav.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
    });
});

extra_services_slider_nav.addEventListener('mousedown', (event) => {
    isDown = true;
    startX = event.pageX - extra_services_slider_nav.offsetLeft;
    scrollLeft = extra_services_slider_nav.scrollLeft;
});
extra_services_slider_nav.addEventListener('mouseleave', () => {
    isDown = false;
});
extra_services_slider_nav.addEventListener('mouseup', () => {
    isDown = false;
});
extra_services_slider_nav.addEventListener('mousemove', (event) => {
    if(!isDown) return;
    event.preventDefault();
    const x = event.pageX - extra_services_slider_nav.offsetLeft;
    const walk = x - startX;
    extra_services_slider_nav.scrollLeft = scrollLeft - walk;
    extra_services_slider_nav.style.scrollBehavior = 'auto';
});