// JavaScript to detect scroll and apply the navbar-scrolled class
window.addEventListener('scroll', function () {
const navbar = document.querySelector('.navbar');
if (window.scrollY > 25) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});