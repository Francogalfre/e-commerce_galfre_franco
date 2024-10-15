import { data } from "./utils/data.js";

// Contenedor para las tarjetas de películas
const container = document.querySelector(".products-container");

// Cambiar el título de la página
const title = document.querySelector("h1");
title.innerText = "Productos";

let filteredMovies = data;

// Crear y mostrar las tarjetas de películas
const createCards = (filteredMovies) => {
  const cards = filteredMovies.map((movie) => {
    return `
      <div class="col-md-3 mb-4">
        <div class="card" style="--bs-card-border-width: 0;">
          <img src=${
            movie.image
          } class="card-img-top" alt="Imagen de la pelicula ${movie.title}">
          <div class="card-body">
            <div class="justify-content-start pb-4">
              <h5 class="card-title pb-2 text-light">${movie.title}</h5>
              <small class="card-genre">${movie.genre}</small>
            </div>
            <p class="card-text">${movie.description.slice(0, 50)}...</p>
            <a href="pages/product.html?prod=${
              movie.id
            }" class="btn btn-outline-primary"> Ver Más </a>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = cards.join("");
};

// Filtrar las películas según la búsqueda del usuario
const filterMovies = (event) => {
  const movieName = event.target.value.toLowerCase();
  filteredMovies = data.filter((movie) =>
    movie.title.toLowerCase().includes(movieName)
  );

  createCards(filteredMovies);
};

// Limpiar el campo de búsqueda y restaurar las películas
const resetButton = document.querySelector(".delete-button");
resetButton.addEventListener("click", () => {
  input.value = "";
  filteredMovies = data;
  createCards(filteredMovies);
});

// Búsqueda en tiempo real
const input = document.querySelector(".form-control");
input.addEventListener("input", filterMovies);

// Mostrar todas las películas al inicio
createCards(filteredMovies);
