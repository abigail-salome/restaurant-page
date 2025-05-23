import loadHomePage from "./loadHomePage.js";
import loadMenuPage from "./loadMenuPage.js";
import loadContactPage from "./loadContactPage.js";
import "./style.css"



const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");



// clears content
function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

// Handles Home Button
homeButton.addEventListener("click", function () {
  clearContent();
  loadHomePage();
});

// Handles Menu Button
menuButton.addEventListener("click", function () {
  clearContent();
  loadMenuPage();
});

// Handles Contact Button
contactButton.addEventListener("click", function () {
  clearContent();
  loadContactPage();
});

// Load home page on initial load
loadHomePage();
