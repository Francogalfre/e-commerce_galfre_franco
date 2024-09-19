// Clase del producto
class Product {
  constructor(titulo, detalle, precio, stock, imagen) {
    this.titulo = titulo;
    this.detalle = detalle;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen;
  }
}

const product = new Product(
  "Porsche GTR",
  "El Porsche GTR es un auto deportivo de lujo con un motor potente que permite aceleraciones rápidas. Su diseño aerodinámico y su interior con asientos de cuero y tecnología avanzada lo hacen destacar.",
  9000,
  true, // Stock es true
  "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg"
);

let productHTML = `
    <div class="row bg-light p-4 rounded-5 shadow-sm">
        <div class="row">
            <div class="col-md-6">
                <img src="${product.imagen}" class="img-fluid mb-4" alt="${
  product.titulo
}" style="max-width: 100%; height: auto;">
            </div>
            <div class="col-md-6">
                <h1 class="mb-2">${product.titulo}</h1>
                <p>${product.detalle}</p>
                <p class="text-muted" style="font-size: 1.5rem; font-weight: bold; color: #ff5722;">Precio: $${
                  product.precio
                }</p>
                <p class="${product.stock ? "text-success" : "text-danger"}">
                    ${product.stock ? "Hay Stock" : "No Hay Stock"}
                </p>
                <a href="index.html" class="btn btn-outline-primary btn-lg mt-2">Volver al Home</a>
            </div>
        </div>
    </div>
`;

// Tomamos el Main del HTML
const main = document.querySelector("main");
main.innerHTML = productHTML;
