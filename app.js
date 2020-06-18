const burger = document.querySelector(".burger");
const navLinksContainer = document.querySelector(".navlinks");
const navLinks = document.querySelectorAll(".navlinks li");


burger.onclick = () => {
    navLinksContainer.classList.toggle("nav-clicked");
    burger.classList.toggle("burger-clicked");

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        } else {
            link.style.animation = `navLinkAnimation 0.5s ease forwards ${index / 5 + 0.5}s`;
        }



    });
};