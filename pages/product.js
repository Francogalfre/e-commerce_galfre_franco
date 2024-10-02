import { data } from "../utils/data.js";

const movieId = Number(window.location.search.split("=")[1]);
const movieFiltered = data.find((movie) => movie.id === movieId);

if (movieFiltered) {
  const productHTML = `
        <div style="background-color: #1a2630;" class="row text-white p-4 rounded-5 shadow-sm">
        <div class="row">
            <div class="col-md-6">
                <img src="${movieFiltered.image}" class="img-fluid mb-4 rounded-start" alt="${movieFiltered.title}" style="max-width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="col-md-6">
                <h1 class="mb-2">${movieFiltered.title}</h1>
                <p style="color: #d1d1d1">${movieFiltered.description}</p>
                <p class="text-light" style="font-size: 1.5rem; font-weight: bold; color: #ff5722;">Precio: $${movieFiltered.price}</p>
                <a href="../index.html" class="btn btn-outline-primary mt-2">Volver al Home</a>
            </div>
        </div>
    </div>`;

  const main = document.querySelector("main");
  main.innerHTML = productHTML;
} else {
  const main = document.querySelector("main");
  main.innerHTML = `<p>Producto no encontrado.</p>`;
}
