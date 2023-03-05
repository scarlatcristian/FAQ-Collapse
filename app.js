"use strict";
const buttonsToggle = document.querySelectorAll(".faq-toggle");

buttonsToggle.forEach((btn) =>
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  })
);
