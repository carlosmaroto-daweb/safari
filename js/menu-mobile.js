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