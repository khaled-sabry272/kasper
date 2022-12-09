const toggleButton = document.getElementsByClassName('manu')[0]
const navbarLinks = document.getElementsByClassName('links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active-nav')
})
feather.replace()