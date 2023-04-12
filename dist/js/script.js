"use strict";

const html = document.querySelector("html");
const bd = document.querySelector("body");
const cb = document.querySelector(".checkbox");
const ovl = document.querySelector(".overlay");

cb.addEventListener(
  "click",

  function hideOverflow() {
    if (cb.checked) {
      html.classList.add("hide-scroll");
      ovl.classList.add("displayBlock");
    } else {
      html.classList.remove("hide-scroll");
      ovl.classList.remove("displayBlock");
    }
  }
);

window.addEventListener("resize", (e) => {
  e.preventDefault();

  if ($(window).width() > 992) {
    ovl.classList.remove("overlay");
    bd.classList.remove("hide-scroll");
  } else {
    ovl.classList.add("overlay");
    if (cb.checked) {
      bd.classList.add("hide-scroll");
    }
  }
});
