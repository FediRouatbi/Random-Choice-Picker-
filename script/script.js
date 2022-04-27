"use strict";

const choices = document.querySelector(".choices");

const texarea = document.querySelector("textarea");


texarea.addEventListener("keyup", function (key) {
  if (key.key === "Enter") {
    pickRandomChoice();
    return;
  }
  choices.innerHTML = "";
  const html = texarea.value
    .split(",")
    .map((word) => (word === "" ? "" : `<span>${word.trim()}</span>`))
    .join("");
  choices.insertAdjacentHTML("afterbegin", html);
});
const pickRandomChoice = function () {
  const loop = 30;
  clearArea();
  const timer = setInterval(() => {
    const num = randomNum();
    highlight(num);
    setTimeout(() => {
      unHighlight(num);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(timer);
    setTimeout(() => {
		
      highlight();
    }, 100);
  }, loop * 100);
};

const randomNum = () => {
  return Math.round(Math.random() * (choices.children.length - 1));
};
const clearArea = () => {
	const span = document.querySelectorAll("span");
  span.forEach((x) => x.classList.remove("highlight"));
  texarea.value = "";
  texarea.blur();
};
const highlight = (number = randomNum()) => {
  choices.children[number].classList.add("highlight");
};
const unHighlight = (number) => {
  choices.children[number].classList.remove("highlight");
};
