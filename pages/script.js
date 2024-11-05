import { data } from "../utils/data.js";

const title = document.querySelector("h1");
const input = document.querySelector(".form-control");
const resetButton = document.querySelector(".delete-button");
const container = document.querySelector(".products-container");
const categoriesContainer = document.querySelector(".buttons-container");

title.innerText = "Productos";

const createCards = (movies) => {
  if (movies.length === 0) {
    container.innerHTML = `<p class="text-danger">No se encontró ninguna película.</p>`;
    return;
  }

  const cards = movies.map(
    (movie) => `
      <div class="col-md-3 mb-4">
        <div class="card" style="--bs-card-border-width: 0; position: relative;">
          <img src=${movie.image} class="card-img-top" alt="${movie.title}">

          ${
            movie.stock === 0
              ? `<div class="position-absolute top-0 end-0 m-2 p-2 bg-danger text-white fw-bold rounded">
                  Sin stock
                </div>`
              : ""
          }

          <div class="card-body">
            <h5 class="card-title pb-2 text-light">${movie.title}</h5>
            <span class="card-genre badge bg-secondary text-light mb-2" style="font-size: 1rem; font-weight: normal; display: inline-block;">
              ${movie.genre}
            </span>
            <p class="card-text">${movie.description.slice(0, 50)}...</p>
            <a href="./product.html?prod=${movie.id}" class="btn btn-outline-primary">Ver Más</a>
          </div>
        </div>
      </div>
  `
  );

  container.innerHTML = cards.join("");
};

const filterMovies = (event) => {
  const searchValue = event.target.value.toLowerCase();

  const filteredMovies = data.filter((movie) => movie.title.toLowerCase().includes(searchValue));

  createCards(filteredMovies);
};

resetButton.addEventListener("click", () => {
  input.value = "";
  createCards(data);
});

input.addEventListener("input", filterMovies);

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
  "Action",
];

const buttons = genres.map(
  (genre) => `
  <button class="btn btn-secondary me-2 mb-2 genre-button">${genre}</button>
`
);

categoriesContainer.innerHTML = buttons.join("");

const filterMoviesByGenre = (genre) => {
  let filteredMovies;

  if (genre === "Todos") {
    filteredMovies = data;
    title.innerText = `Productos`;
  } else {
    filteredMovies = data.filter((movie) => movie.genre.toLowerCase().includes(genre.toLowerCase()));
    title.innerText = `Productos - ${genre}`;
  }

  createCards(filteredMovies);
};

const genreButtons = document.querySelectorAll(".genre-button");

genreButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    filterMoviesByGenre(event.target.innerText);
  });
});

createCards(data);
