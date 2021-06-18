const menu = document.querySelector(".open");
menu.addEventListener("click", function () {
  const cover = document.querySelector(".cover");
  if (cover.style.display === "none") {
    cover.style.display = "block";
  } else {
    cover.style.display = "none";
  }
});
