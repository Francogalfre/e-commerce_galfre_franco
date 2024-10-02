import { data } from "./utils/data.js";

const title = document.querySelector("h1");
title.innerText = "Productos";

const cards = data.map((movie) => {
  return `
       <div class="col-md-3 mb-4">
            <div class="card border-0>
                <img src="${
                  movie.image
                }" class="card-img-top" alt="Imagen de la pelicula ${
    movie.title
  }">
                <div class="card-body">
                <div class="justify-content-start pb-4">
                    <h5 class="card-title pb-2 text-light">${movie.title}</h5>
                    <small class="card-genre">${movie.genre}</small>
                </div>
                <p class="card-text">${movie.description.slice(0, 50)}</p>
                <a href="pages/product.html?prod=${
                  movie.id
                }" class="btn btn-outline-primary"> Ver Mas </a>
                </div>
            </div>
        </div>
    `;
});

const container = document.querySelector(".products-container");

// Une todas las tarjetas en una sola cadena
container.innerHTML = cards.join("");
