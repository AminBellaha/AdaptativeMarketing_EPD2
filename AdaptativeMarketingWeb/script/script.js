// este script es para cerrar el menu de navegacion cuando se hace click en cualquier parte de la pagina
const nav = document.querySelector(".navbar-collapse");

document.addEventListener("click", () => {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
});
