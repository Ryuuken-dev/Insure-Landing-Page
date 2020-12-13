/* Rozwijane menu */

const mobileOpen = document.getElementsByClassName('menu__navigationIcon')[0];
const slideMenu = document.getElementsByClassName('mobileMenu')[0];
const mobileClose = document.getElementsByClassName('menu__navigationIconClose')[0];

/*function menuView() {
    slideMenu.style.display="block";
    mobileClose.style.marginLeft="auto";
    mobileClose.style.display="flex";
    mobileClose.style.alignItems="center";
    mobileOpen.style.display="none";
}*/



mobileOpen.addEventListener('click', ()=> {
    setTimeout(function menuView() {
        slideMenu.style.display="block";
        slideMenu.style.opacity="75%"
        mobileClose.style.marginLeft="auto";
        mobileClose.style.display="flex";
        mobileClose.style.alignItems="center";
        mobileOpen.style.display="none";
    }, 500);

    

mobileClose.addEventListener('click', ()=> {
    setTimeout(function menuHide() {
        mobileClose.style.display="none";
        mobileOpen.style.display="flex";
        slideMenu.style.display="none";
    }, 500)
    
})

})
    
