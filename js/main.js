const menuIcon = document.querySelector('.header__icon_menu');
const menu = document.querySelector('.header__nav_list');
const body = document.querySelector('body');
const menuLinks = document.querySelectorAll('.header__nav_item');

if(menuIcon && menu) {
    menuIcon.addEventListener('click', function(){
        menuIcon.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock');   
    })
};

if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', function(){
            menuIcon.classList.remove('_active');
            menu.classList.remove('_active');
            body.classList.remove('_lock');
        })
    })
        
}

