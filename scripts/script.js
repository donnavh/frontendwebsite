// JavaScript Document
console.log("hi");

let deMenuButton = document.querySelector("header > button");
let deSluitButton = document.querySelector("header nav button");

deMenuButton.addEventListener("click", togglemenu);
deSluitButton.addEventListener("click", togglemenu);

function togglemenu(){
    let deNav = document.querySelector("header nav");
    deNav.classList.toggle("open");
  }
  
  