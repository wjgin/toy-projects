const navbar = document.querySelector(".navbar__menu"),
    menu = document.querySelector(".navbar__menu"),
    icon = document.querySelector(".navbar__icon")
    hamburgerBtn = document.querySelector(".navbar__hamburger");


function showBtn() {
    menu.classList.toggle("active");
    icon.classList.toggle("active");
}

hamburgerBtn.addEventListener('click', showBtn);