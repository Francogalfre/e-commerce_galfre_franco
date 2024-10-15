import { data } from "./utils/data.js";

// Definiendo variables

const title = document.querySelector("h1");
const input = document.querySelector(".form-control");
const resetButton = document.querySelector(".delete-button");
const container = document.querySelector(".products-container");
const categoriesContainer = document.querySelector(".buttons-container");

title.innerText = "Productos";

// Función para crear y mostrar tarjetas de películas
const createCards = (movies) => {
  const cards = movies.map(
    (movie) => `
      <div class="col-md-3 mb-4">
        <div class="card" style="--bs-card-border-width: 0;">
          <img src=${movie.image} class="card-img-top" alt="${movie.title}">
          <div class="card-body">
            <h5 class="card-title pb-2 text-light">${movie.title}</h5>
            <span class="card-genre badge bg-secondary text-light mb-2" style="font-size: 1rem; font-weight: normal; display: inline-block;">${
              movie.genre
            }</span>
            <p class="card-text">${movie.description.slice(0, 50)}...</p>
            <a href="pages/product.html?prod=${
              movie.id
            }" class="btn btn-outline-primary"> Ver Más </a>
          </div>
        </div>
      </div>
  `
  );

  container.innerHTML = cards.join("");
};

// Filtrando películas según el texto ingresado
const filterMovies = (event) => {
  const searchValue = event.target.value.toLowerCase();
  const filteredMovies = data.filter((movie) =>
    movie.title.toLowerCase().includes(searchValue)
  );
  createCards(filteredMovies);
};

// Limpiar el campo de búsqueda y mostrar todas las películas
resetButton.addEventListener("click", () => {
  input.value = "";
  createCards(data);
});

// Búsqueda en tiempo real
input.addEventListener("input", filterMovies);

// Definiendo géneros y creando botones
const genres = [
  "Todos",
  "Drama",
  "Documentary",
  "Romance",
  "Comedy",
  "Crime",
  "Sci-Fi",
  "Horror",
  "Thriller",
  "Musical",
];

const buttons = genres.map(
  (genre) => `
  <button class="btn btn-secondary me-2 mb-2 genre-button">${genre}</button>
`
);

categoriesContainer.innerHTML = buttons.join("");

// Filtrando películas por género seleccionado
const filterMoviesByGenre = (genre) => {
  let filteredMovies;
  if (genre === "Todos") {
    filteredMovies = data;
  } else {
    filteredMovies = data.filter((movie) =>
      movie.genre.toLowerCase().includes(genre.toLowerCase())
    );
  }
  createCards(filteredMovies);
};

// Agregando eventos a los botones de género
const genreButtons = document.querySelectorAll(".genre-button");
genreButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    filterMoviesByGenre(event.target.innerText);
  });
});

// Mostrando todas las películas al inicio
createCards(data);
