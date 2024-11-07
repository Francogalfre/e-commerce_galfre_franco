import { user } from "../utils/user.js";

const form = document.querySelector("#form");
const errorText = document.querySelector("#error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (user.email === email && user.password === password) {
    let quantity = 0;

    localStorage.setItem("userEmail", email);

    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("quantity", quantity);
    location.reload();
  } else {
    errorText.style.display = "flex";
    form.elements.email.value = "";
    form.elements.password.value = "";

    Toastify({
      text: "Error: no se pudo iniciar sesión. Por favor, verifica tus credenciales.",
      className: "error",
      style: {
        background: "#dc3545",
        color: "#fff",
      },
      duration: 4000,
    }).showToast();
  }
});

const userEmail = localStorage.getItem("userEmail");

if (userEmail) {
  window.location.href = "./index.html";
}
