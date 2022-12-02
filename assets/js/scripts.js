const hamburgerMenuImg = './assets/images/hamburger-menu.svg';
const closeMenuImg = './assets/images/close.svg';

const openMenu = () => {
    $('#mobile-menu-btn').attr('src', closeMenuImg);
    $('#mobile-menu-dropdown').show();
};

const closeMenu = () => {
    $('#mobile-menu-btn').attr('src', hamburgerMenuImg);
    $('#mobile-menu-dropdown').hide();
};

$('#mobile-menu-btn').click(() => {
    $('#mobile-menu-btn').attr('src') === hamburgerMenuImg ? openMenu() : closeMenu();
});