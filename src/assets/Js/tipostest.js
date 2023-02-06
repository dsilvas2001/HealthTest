var type = new Typed(".typing-text", {
  strings: [
    "Tipos de Test",
    "Test de Estrés",
    "Test de Ansiedad",
    "Test de Depresión",
  ],
  typeSpeed: 120,
  loop: true,
});

let themeColor = document.querySelectorAll(".theme-toggler span");
themeColor.forEach((color) =>
  color.addEventListener("click", () => {
    let background = color.style.background;
    document.querySelector("body").style.background = background;
  })
);
