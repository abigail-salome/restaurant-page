import logoImage from './assets/logo.png';

function loadHomePage() {
  const homePage = document.getElementById("content");
  homePage.innerHTML = ""; // Clear previous content

  const image = document.createElement("img");
  image.src = logoImage;
  image.alt = "Banner showing delicious food from the restaurant";
  homePage.appendChild(image);

  const header = document.createElement("h1");
  header.textContent = "IF MUSIC BE THE FOOD OF LOVE, PLAY ON";
  homePage.appendChild(header);

  const paragraph = document.createElement("p");
  paragraph.textContent = "Food, in the end, in our own tradition, is something holy. It's not about nutrients and calories. It's about sharing. It's about honesty. It's about identity.";
  homePage.appendChild(paragraph);
}

export default loadHomePage;
