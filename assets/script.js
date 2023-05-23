const navMenu = document.querySelector('.nav--hamburger')
const xIcon = document.querySelector('.x--icon')

navMenu.addEventListener('click', navFuntion)
xIcon.addEventListener('click', navFuntion)

function navFuntion() {
    const navLinks = document.querySelector('.nav--links')
    navLinks.classList.toggle('nav--active')
}