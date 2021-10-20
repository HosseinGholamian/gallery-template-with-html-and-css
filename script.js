const burger = document.querySelector('.burger');
const navlinks = document.querySelector(".navlinks");
const links = document.querySelectorAll(".links");
const overlay = document.querySelector(".overlay");


const openBurger = function() {
    burger.classList.toggle("xbtn");
    navlinks.classList.toggle("show");
    overlay.classList.toggle("overlay-open");
}

// open menu when click on burger
burger.addEventListener("click", openBurger);
// Close menu when click Links
links.forEach(element => {
    element.addEventListener('click', openBurger)
});
// close menu when click outside side menu
overlay.addEventListener("click", openBurger)