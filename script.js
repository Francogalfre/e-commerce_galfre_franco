console.log("Welcome to the JS E-Commerce");
console.log("Yes yes! Here we use Javascript 😎");

const dibuMartinezName = "Emiliano Martinez";
const dibuMartinezImage =
  "https://storage.googleapis.com/diariodemocracia/news/dibu-martinez-aston-villa-Nottingham-premier-league-inglaterra-1-226cf5.jpg";

const $title = document.querySelector("h5");
const $image = document.querySelector(".card img");
const $button = document.querySelector(".card button");

$title.innerText = dibuMartinezName;
$image.src = dibuMartinezImage;

$button.addEventListener("click", () => {
  alert(`Hola ${dibuMartinezName}, bienvenido a mi tienda!`);
});
