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

$('window').ready(() => {
    let page = document.location.toString().split('/');
    page = page[page.length - 1]
    switch (page) {
        case 'index.html': 
            $('.about').addClass('active');
            break;
        case 'weddings.html':
            $('.weddings').addClass('active');
            break;
        case 'funerals.html':
            $('.funerals').addClass('active');
            break;
        default:
            break;
    }
})