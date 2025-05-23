function loadMenuPage() {
    const content = document.getElementById("content");
    
  
    const heading = document.createElement("h1");
    heading.textContent = "Our Signature Dishes";
    content.appendChild(heading);
  
    const menuItems = [
      {
        name: "Spicy Grilled Chicken",
        description: "Tender chicken marinated in a secret blend of spices and grilled to perfection.",
      },
      {
        name: "Truffle Mushroom Pasta",
        description: "Creamy fettuccine tossed with wild mushrooms and a hint of truffle oil.",
      },
      {
        name: "Classic Margherita Pizza",
        description: "Hand-tossed dough topped with fresh tomatoes, mozzarella, and basil.",
      },
      {
        name: "Seafood Paella",
        description: "A Spanish classic loaded with shrimp, mussels, and saffron-infused rice.",
      },
      {
        name: "Molten Chocolate Cake",
        description: "Warm, gooey chocolate cake served with vanilla ice cream.",
      },
    ];
  
    menuItems.forEach((item) => {
      const itemContainer = document.createElement("div");
      itemContainer.classList.add("menu-item");
  
      const itemName = document.createElement("h3");
      itemName.textContent = item.name;
  
      const itemDesc = document.createElement("p");
      itemDesc.textContent = item.description;
  
      itemContainer.appendChild(itemName);
      itemContainer.appendChild(itemDesc);
      content.appendChild(itemContainer);
    });
  }
  
  export default loadMenuPage;
  