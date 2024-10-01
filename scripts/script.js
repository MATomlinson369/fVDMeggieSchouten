// JavaScript Document
console.log("hi");


var openbutton = document.querySelector("#open-menu");

openbutton.addEventListener("click", openMenu)
function openMenu() {
    document.querySelector(".hamburger-nav").classList.add("toonMenu") 

}

var sluitbutton = document.querySelector("#sluit-menu");

sluitbutton.addEventListener("click", sluitMenu)
function sluitMenu() {
    document.querySelector(".hamburger-nav").classList.remove("toonMenu") 

}



