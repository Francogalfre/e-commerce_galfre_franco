const items = [
  { titulo: "Home", href: "/#" },
  { titulo: "Products", href: "/pages/product.html" },
  { titulo: "Sales", href: "/pages/sales.html" },
];

const header = document.querySelector("header");

header.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-light py-4 px-5 my-4 rounded-5 justify-content-between align-items-center">
        <div class="container-fluid">
        <div class="d-flex flex-row align-items-center gap-3 justify-content-between">
            <img height="36" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Javascript Logo" />
            <a href="#" class="link-offset-2 link-underline link-underline-opacity-0 text-secondary-emphasis fs-4">JS Store</a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        </div>
        <div class="d-flex flex-row align-items-center gap-3 d-none d-lg-flex">
            <img height="50" style="cursor: pointer" src="https://avatars.githubusercontent.com/u/96532888?v=4" alt="Francogalfre Github Avatar" />
        </div>
        </div>
    </nav>
`;

// Seleccionamos el <ul> donde voy a agregar los items
const menuItems = document.querySelector(".navbar-nav");

for (let item of items) {
  menuItems.innerHTML += `
        <li class="nav-item">
            <a class="nav-link active fs-5" href="${item.href}">${item.titulo}</a>
        </li>
    `;
}
