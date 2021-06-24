const menu = document.querySelector(".menuBtn");
const cover = document.querySelector(".cover");
const options = document.querySelector(".options");

cover.style.display = "none";

menu.addEventListener("click", () => {
  if (cover.style.display === "none") {
    cover.style.display = "flex";
    options.classList.add("animate");
    menu.style.background = "url(/image/closeBtn.png) no-repeat";
    menu.style.backgroundSize = "contain";
  } else {
    cover.style.display = "none";
    menu.style.background = "url(/image/MenuBtn.png)  no-repeat";
    menu.style.backgroundSize = "contain";
    options.classList.remove("animate");
  }
});
