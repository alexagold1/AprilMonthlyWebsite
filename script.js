let coverstate = 1;

document.querySelector(".cover").addEventListener("click", function () {
  setTimeout(() => {
    if (coverstate == 1) {
      document
        .querySelector(".cover")
        .setAttribute("style", "background:url(imgs/Window.jpg);");
      coverstate = 2;
    } else {
      document
        .querySelector(".cover")
        .setAttribute("style", "background:url(imgs/cover.png);");
      coverstate = 1;
    }
  }, 500);
});

const iteratorMessages = [
  "You're on Page 1",
  "You're on Page 2",
  "This is the last page!",
];

const iteratorDisplay = document.getElementById("iterator-display");

let currentPage = 1;

function updateIteratorMessage(page) {
  iteratorDisplay.textContent = iteratorMessages[page - 1];
}

document.querySelectorAll(".next").forEach((button, index) => {
  button.addEventListener("click", function () {
    if (currentPage < 3) {
      currentPage++;
      updateIteratorMessage(currentPage);
    }
  });
});

document.querySelectorAll(".prev").forEach((button, index) => {
  button.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      updateIteratorMessage(currentPage);
    }
  });
});
