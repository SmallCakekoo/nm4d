document.addEventListener("DOMContentLoaded", () => {
  const boardButton = document.querySelector(".board");
  const overlayBoard = document.querySelector(".overlay-board");

  boardButton.addEventListener("click", () => {
    overlayBoard.classList.add("active");
  });

  overlayBoard.addEventListener("click", (e) => {
    if (e.target === overlayBoard) {
      overlayBoard.classList.remove("active");
    }
  });

  document
    .querySelector(".close-button")
    .addEventListener("click", function () {
      overlayBoard.classList.remove("active");
    });

  document.querySelector('.invisible-close').addEventListener('click', function() {
    document.querySelector('.overlay-board').classList.remove('active');
  });
});
