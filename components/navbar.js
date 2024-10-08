const items = [
  { titulo: "Home", href: "/#" },
  {
    titulo: "Products",
    href: `/pages/product.html?prod=${Math.floor(Math.random() * 12) + 1}`,
  },
  { titulo: "Sales", href: "/pages/sales.html" },
];

const header = document.querySelector("header");

header.innerHTML = `
    <nav class="navbar navbar-expand-lg py-4 px-5 my-4 rounded-5 justify-content-between align-items-center" style="background-color: #032661;">
  <div class="container-fluid">
    <div class="d-flex flex-row align-items-center gap-3 justify-content-between">
      <img height="36"src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Javascript Logo" />
      <a href="#" class="link-offset-2 link-underline link-underline-opacity-0" style="color: #ffffff; font-size: 1.25rem;">Cine Store 🚬</a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
    </div>
    <div class="d-flex flex-row align-items-center gap-4 d-none d-lg-flex">
      <img height="50" style="cursor: pointer" src="https://avatars.githubusercontent.com/u/96532888?v=4" alt="Francogalfre Github Avatar" />
      <a href="#" style="color: #e0e0e0; text-decoration: none;">
        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.50014 17H17.3294C18.2793 17 18.7543 17 19.1414 16.8284C19.4827 16.6771 19.7748 16.4333 19.9847 16.1246C20.2228 15.7744 20.3078 15.3071 20.4777 14.3724L21.8285 6.94311C21.8874 6.61918 21.9169 6.45721 21.8714 6.33074C21.8315 6.21979 21.7536 6.12651 21.6516 6.06739C21.5353 6 21.3707 6 21.0414 6H5.00014M2 2H3.3164C3.55909 2 3.68044 2 3.77858 2.04433C3.86507 2.0834 3.93867 2.14628 3.99075 2.22563C4.04984 2.31565 4.06876 2.43551 4.10662 2.67523L6.89338 20.3248C6.93124 20.5645 6.95016 20.6843 7.00925 20.7744C7.06133 20.8537 7.13493 20.9166 7.22142 20.9557C7.31956 21 7.44091 21 7.6836 21H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </div>
</nav>
`;

// Seleccionamos el <ul> donde voy a agregar los items
const menuItems = document.querySelector(".navbar-nav");

for (let item of items) {
  menuItems.innerHTML += `
        <li class="nav-item">
            <a class="nav-link active fs-5" href="${item.href}" style="color: #e0e0e0;">${item.titulo}</a>
        </li>
    `;
}
