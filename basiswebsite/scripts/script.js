// JavaScript Document
console.log("hi");

let deMenuButton = document.querySelector("header > section > button");
let deSluitButton = document.querySelector("header nav button");

deMenuButton.addEventListener("click", togglemenu);
deSluitButton.addEventListener("click", togglemenu);

function togglemenu() {
  let deNav = document.querySelector("header nav");
  deNav.classList.toggle("open");
}


//footer

let deMenuButtons = document.querySelectorAll("footer section > button");
let deMenuH3s = document.querySelectorAll("footer section > h6");

deMenuButtons.forEach(deMenuButton => {
  deMenuButton.addEventListener("click", toggleMenu);
});

deMenuH3s.forEach(deMenuH6 => {
  deMenuH6.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  let deButtonWaaropGekliktIs = this;
  let deSectionWaarDeButtonInZit = deButtonWaaropGekliktIs.closest("section");
  deSectionWaarDeButtonInZit.classList.toggle("open");
}