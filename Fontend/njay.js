// Toggle class active 
const navbarNav = document.querySelector ('.navbar-nav');

// Ketika hamburger menu di klik

document.querySelector('#hamburger-menu').oneclick = () => {
navbarNav.classList.toggle('active')
};


// Kilk di luar side bar untuk menghilangkan nav

const hamburger = document.querySelector('hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.countains(e.target)) {
        navbarNav.classList.remove('active');
    }
});