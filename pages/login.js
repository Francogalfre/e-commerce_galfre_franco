import { user } from "../utils/user.js";

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  console.log("Email: ", email);
  console.log("Password: ", password);

  if (user.email === email && user.password === password) {
    localStorage.setItem("userEmail", email);
    window.location.href = "../index.html";
  } else {
    alert("Usuario incorrecto");
    form.elements.email.value = "";
    form.elements.password.value = "";
  }
});

const userEmail = localStorage.getItem("userEmail");

if (userEmail) {
  window.location.href = "../index.html";
}

console.log(user);
