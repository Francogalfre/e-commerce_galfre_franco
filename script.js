function generateWeb(cantCards) {
  // Selecciona el título y el contenedor de productos
  const title = document.querySelector("h1");

  title.innerText = "Productos";

  const container = document.querySelector(".products-container");
  const cards = [];

  // Crea las tarjetas de productos
  for (let i = 1; i <= cantCards; i++) {
    const card = `
    <div class="col-md-3 mb-4">
        <div class="card">
            <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="Imagen del Auto">
            <div class="card-body">
                <h5 class="card-title">Sedán Deportivo ${i}</h5>
                <p class="card-text">Un sedán elegante y de alto rendimiento con características avanzadas y un diseño estilizado.</p>
                <div class="d-flex justify-content-between">
                    <a href="pages/product.html" class="btn btn-outline-primary"> Ver Mas </a>
                    <a href="#" class="btn btn-cart"> Agregar 🛒 </a>
                </div>
            </div>
        </div>
    </div>`;

    cards.push(card);
  }

  // Une todas las tarjetas en una sola cadena
  container.innerHTML = cards.join("");
}

generateWeb(9);
