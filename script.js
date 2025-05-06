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
// JavaScript for iterator that updates when arrows are pressed

const iteratorMessages = [
  "You're on Page 1",
  "You're on Page 2",
  "This is the last page!",
];

const iteratorDisplay = document.getElementById("iterator-display");

// Track the current page (starting from Page 1)
let currentPage = 1;

// Function to update iterator message based on the current page
function updateIteratorMessage(page) {
  iteratorDisplay.textContent = iteratorMessages[page - 1];
}

// Event listeners for the 'next' and 'prev' buttons
document.querySelectorAll(".next").forEach((button, index) => {
  button.addEventListener("click", function () {
    if (currentPage < 3) {
      currentPage++; // Go to next page
      updateIteratorMessage(currentPage);
    }
  });
});

document.querySelectorAll(".prev").forEach((button, index) => {
  button.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--; // Go to previous page
      updateIteratorMessage(currentPage);
    }
  });
});
