const navBar = document.querySelector(".navBar");
const navLinks = document.querySelector(".navLinks");
const links = document.querySelector(".navLinks li");

navBar.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    link.forEach(link => {
        link.classList.toggle("fade");
    });
});
