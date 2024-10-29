import { user } from "../utils/user.js";

const form = document.querySelector("#form");
const errorText = document.querySelector("#error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  console.log("Email: ", email);
  console.log("Password: ", password);

  if (user.email === email && user.password === password) {
    let quantity = 0;

    localStorage.setItem("userEmail", email);

    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("quantity", quantity);

    window.location.href = "./index.html";
  } else {
    errorText.style.display = "flex";
    form.elements.email.value = "";
    form.elements.password.value = "";
  }
});

const userEmail = localStorage.getItem("userEmail");

if (userEmail) {
  window.location.href = "./index.html";
}

console.log(user);
