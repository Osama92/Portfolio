const menu = document.querySelector(".menuBtn");
const cover = document.querySelector(".cover");

menu.addEventListener("click", () => {
  if (cover.style.display === "none") {
    cover.style.display = "flex";
    menu.style.background = "url(/image/closeBtn.png) no-repeat";
    menu.style.backgroundSize = "contain";
  } else {
    cover.style.display = "none";
    menu.style.background = "url(/image/MenuBtn.png)  no-repeat";
    menu.style.backgroundSize = "contain";
  }
});
