
const menuNavbar = document.getElementById('menu__navbar');
const menuBtnToggle = document.getElementById('menu__btn-toggle');


document.addEventListener('click', (e) => {
    if (menuBtnToggle.contains(e.target)) {
        // Click to Toggle top menu icon
        menuNavbar.classList.toggle('menu__navbar--active')
        menuNavbar.classList.toggle('hidden')
    } else {
        // Click Outside from Toggle top menu icon
        if (menuNavbar.classList.contains('menu__navbar--active')) {
            menuNavbar.classList.remove('menu__navbar--active')
            menuNavbar.classList.add('hidden')
        }
    }
})

window.addEventListener("resize", (e) => {
    if (window.innerWidth > 1024) {
        if (menuNavbar.classList.contains("menu__navbar--active")) {
            menuNavbar.classList.add("hidden");
            menuNavbar.classList.toggle("menu__navbar--active");
        }
    }
});