const userEmail = localStorage.getItem("userEmail");

if (!userEmail) {
  window.location.href = "./login.html";
}

const cartData = localStorage.getItem("cart");

function calculateTotal(cartArray) {
  let total = 0;

  cartArray.forEach((item) => {
    total += item.product.price * item.quantity;
  });

  return total.toFixed(2);
}

function removeProduct(productId) {
  let cartData = JSON.parse(localStorage.getItem("cart"));
  const newCart = cartData.filter((item) => item.product.id !== productId);
  localStorage.setItem("cart", JSON.stringify(newCart));

  let totalQuantity = 0;

  for (const item of newCart) {
    totalQuantity += item.quantity;
  }

  localStorage.setItem("quantity", totalQuantity);

  location.reload();
}

function clearCart() {
  localStorage.removeItem("cart");
  localStorage.setItem("quantity", 0);
  location.reload();
}

function checkout() {
  const user = localStorage.getItem("userEmail");
  const cartItems = JSON.parse(localStorage.getItem("cart"));

  const resource = {
    user: user,
    items: cartItems,
  };

  console.log(resource);

  fetch("https://67367b0baafa2ef222309f81.mockapi.io/cart/orders", {
    method: "POST",
    body: JSON.stringify(resource),
  })
    .then((response) => response.json())
    .then((data) => {
      Swal.fire({
        title: `Gracias ${data.user}!`,
        text: `Hemos registrado tu orden número ${data.id}.`,
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Aceptar",
      }).then(() => {
        clearCart();
      });
    })
    .catch((error) => {
      Swal.fire({
        title: "Error",
        text: "Hubo un problema al registrar tu orden. Por favor, intenta de nuevo.",
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "Aceptar",
      });
      console.error("Error al registrar la orden:", error);
    });
}

const clearBtn = document.getElementById("clearCart");
const checkoutBtn = document.getElementById("checkoutCart");

checkoutBtn.addEventListener("click", checkout);

if (cartData) {
  const cartContainer = document.getElementById("cart-container");
  const cartArray = JSON.parse(cartData);

  cartArray.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("cart-item");

    card.innerHTML = `
        <img src="${item.product.image}" alt="${item.product.title}" class="cart-item-image">
        <div class="cart-item-details">
          <h3 class="cart-item-title">${item.product.title}</h3>
          <p class="cart-item-description">${item.product.description.slice(0, 200)}</p>
          <p class="cart-item-quantity">Cantidad: ${item.quantity}</p>
          <p class="cart-item-price">Precio Total: $ ${(item.product.price * item.quantity).toFixed(2)}</p>
          <button class="btn btn-danger" onclick="removeProduct(${item.product.id})">Eliminar</button>
        </div>
    `;

    cartContainer.appendChild(card);
  });

  const total = calculateTotal(cartArray);
  const totalElement = document.getElementById("total");
  totalElement.textContent = `Total de la compra: $${total}`;

  const clearCartButton = document.getElementById("clearCart");
  clearCartButton.addEventListener("click", () => {
    clearCart();
  });
} else {
  const title = document.querySelector("h1");

  title.textContent = "Tu Carrito esta vacio";
  clearBtn.style.visibility = "hidden";
  checkoutBtn.style.visibility = "hidden";

  console.log("El carrito está vacío o no existe.");
}
