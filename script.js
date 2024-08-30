console.log("Welcome to the JS E-Commerce");
console.log("Yes yes! Here we use Javascript 😎");

const dibuMartinezName = "Emiliano Martinez";
const dibuMartinezImage =
  "https://storage.googleapis.com/diariodemocracia/news/dibu-martinez-aston-villa-Nottingham-premier-league-inglaterra-1-226cf5.jpg";

const title1 = document.querySelector(".dibu1 h5");
const image1 = document.querySelector(".dibu1 img");
const button1 = document.querySelector(".dibu1 button");

const title2 = document.querySelector(".dibu2 h5");
const image2 = document.querySelector(".dibu2 img");
const button2 = document.querySelector(".dibu2 button");

const title3 = document.querySelector(".dibu3 h5");
const image3 = document.querySelector(".dibu3 img");
const button3 = document.querySelector(".dibu3 button");

title1.innerText = dibuMartinezName;
image1.src = dibuMartinezImage;

title2.innerText = dibuMartinezName;
image2.src = dibuMartinezImage;

title3.innerText = dibuMartinezName;
image3.src = dibuMartinezImage;
