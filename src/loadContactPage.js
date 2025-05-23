function loadContactPage() {
    const content = document.getElementById("content");
    
  
    const heading = document.createElement("h1");
    heading.textContent = "We’d Love to Hear from You!";
    content.appendChild(heading);
  
    const hours = document.createElement("p");
    hours.innerHTML = `
      <strong>Business Hours:</strong><br>
      Monday – Friday: 10:00 AM – 10:00 PM<br>
      Saturday – Sunday: 9:00 AM – 11:00 PM
    `;
    content.appendChild(hours);
  
    const phone = document.createElement("p");
    phone.innerHTML = `<strong>Phone:</strong> +254 101 295 214`;
    content.appendChild(phone);
  
    const email = document.createElement("p");
    email.innerHTML = `<strong>Email:</strong> morgansrestaurant@gmail.com`;
    content.appendChild(email);
  
    const address = document.createElement("p");
    address.innerHTML = `<strong>Location:</strong> Holden Mall, Kakamega Town`;
    content.appendChild(address);
  
    const note = document.createElement("p");
    note.textContent = "Feel free to reach out for reservations, special events, or feedback!";
    content.appendChild(note);
  }
  
  export default loadContactPage;
  