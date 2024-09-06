console.log("Welcome to JS Ecommerce by Franco Galfre");

// Selecciona el título y el contenedor de productos
const title = document.querySelector(".title");
const container = document.querySelector(".products-container");
const cards = [];

// Establece el texto del título
title.innerText = "Productos";

// Crea las tarjetas de productos
for (let i = 1; i <= 8; i++) {
  const card = `
    <div class="col-md-3 mb-4">
        <div class="card">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="Imagen del Auto">
            <div class="card-body">
                <h5 class="card-title">Sedán Deportivo ${i}</h5>
                <p class="card-text">Un sedán elegante y de alto rendimiento con características avanzadas y un diseño estilizado.</p>
                <div class="d-flex justify-content-between">
                    <a href="#" class="btn btn-outline-primary"><i class="fas fa-info-circle"></i> Detalles</a>
                    <a href="#" class="btn btn-cart"><i class="fas fa-shopping-cart"></i>  Agregar 🛒 </a>
                </div>
            </div>
        </div>
    </div>`;

  cards.push(card);
}

// Une todas las tarjetas en una sola cadena
container.innerHTML = cards.join("");
