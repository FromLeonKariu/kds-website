console.log("Hello traveller welcome to KD Studios -dark side 😂😂😂😂👌❌")

const darkModeToggle = document.querySelector(".dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark-mode");
    console.log("Dark mode is now " + (body.classList.contains("dark-mode") ? "on" : "off"));
});




