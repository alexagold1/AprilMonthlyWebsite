let coverstate = 1;

document.querySelector(".cover").addEventListener("click", function () {
  setTimeout(() => {
    if (coverstate == 1) {
      document
        .querySelector(".cover")
        .setAttribute("style", "background:url(imgs/cover2.jpg);");
      coverstate = 2;
    } else {
      document
        .querySelector(".cover")
        .setAttribute("style", "background:url(imgs/cover.png);");
      coverstate = 1;
    }
  }, 500);
});
