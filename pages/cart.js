const userEmail = localStorage.getItem("userEmail");

if (!userEmail) {
  window.location.href = "./login.html";
}
