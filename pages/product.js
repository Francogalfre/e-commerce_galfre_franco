import { data } from "../utils/data.js";

const movieId = Number(window.location.search.split("=")[1]);
const movieFiltered = data.find((movie) => movie.id === movieId);

const userEmail = localStorage.getItem("userEmail");
const isLoggedIn = Boolean(userEmail);

if (movieFiltered) {
  const productHTML = `
    <div style="background-color: #1a2630;" class="row text-white p-4 rounded-5 shadow-sm">
      <div class="row">
        <div class="col-md-6">
          <img
            src="${movieFiltered.image}"
            class="img-fluid mb-4 rounded-start"
            alt="${movieFiltered.title}"
            style="max-width: 100%; height: 100%; object-fit: cover;"
          />
        </div>
        <div class="col-md-6">
          <h1 class="mb-2">${movieFiltered.title}</h1>
          <p style="color: #d1d1d1">${movieFiltered.description}</p>
          <p class="text-light" style="font-size: 1.5rem; font-weight: bold; color: #ff5722;">
            Precio: $${movieFiltered.price}
          </p>
          <p class="font-weight-bold ${
            movieFiltered.stock ? "text-success" : "text-danger"
          }" style="font-size: 1.2rem;">
            ${
              movieFiltered.stock > 0
                ? `${movieFiltered.stock} En Stock`
                : "Sin Stock"
            }
          </p>

          <div>
            ${
              isLoggedIn
                ? `<div class="d-flex align-items-center gap-2 mb-3 w-100">
                    <button onclick="decreaseItem()" id="decrease" class="btn btn-secondary btn-md">-</button>
                    <input type="number" id="quantity" min="1" value="1" class="form-control text-center flex-grow-1" />
                    <button onclick="increaseItem()" id="increase" class="btn btn-secondary btn-md">+</button>
                  </div>
                  <button onclick="addItem()" id="additem" class="btn btn-primary w-100 mt-2 mb-4">Comprar</button>`
                : `<button onclick='window.location.href = "./login.html"' class="btn btn-primary w-100 mt-2 mb-4">Iniciar sesión</button>`
            }
          </div>

          <a href="./index.html" class="btn btn-outline-secondary w-100">Volver al Home</a>
        </div>
      </div>
    </div>
  `;

  const main = document.querySelector("main");
  main.innerHTML = productHTML;

  const decreaseBtn = document.getElementById("decrease");
  const increaseBtn = document.getElementById("increase");
  const addItemBtn = document.getElementById("additem");

  const quantityInput = document.getElementById("quantity");

  decreaseBtn.addEventListener("click", () => {
    const currentCuantity = Number(quantityInput.value);

    if (currentCuantity > 1) {
      quantityInput.value = currentCuantity - 1;
    }
  });

  increaseBtn.addEventListener("click", () => {
    const currentCuantity = Number(quantityInput.value);

    if (currentCuantity < movieFiltered.stock) {
      quantityInput.value = currentCuantity + 1;
    }
  });

  addItemBtn.addEventListener("click", () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const idProduct = movieFiltered.id;

    const quantityToAdd = Number(quantityInput.value);

    cart.push({ id: idProduct, quantity: quantityToAdd });
    localStorage.setItem("cart", JSON.stringify(cart));

    let totalQuantity = 0;

    for (const item of cart) {
      totalQuantity += item.quantity;
    }

    localStorage.setItem("quantity", totalQuantity);
  });
} else {
  const main = document.querySelector("main");
  main.innerHTML = `<p>Producto no encontrado.</p>`;
}
