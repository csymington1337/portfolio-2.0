const hamburger = document.querySelector('.header-container .nav-bar .nav-links .hamburger');
const mobile_menu = document.querySelector('.header-container .nav-bar .nav-links ul');
const menu_item = document.querySelectorAll('.header-container .nav-bar .nav-links ul li a');
const header = document.querySelector('.header-container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 100) {
        header.style.backgroundColor = '#060109';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach(item=>{
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})