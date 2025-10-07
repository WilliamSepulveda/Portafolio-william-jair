// Espera a que la página esté completamente cargada
window.addEventListener("load", () => {
  // Crea una línea de tiempo para controlar la secuencia de animaciones
  const tl = gsap.timeline();

  // --- Animación del Saludo ("Hola soy Will") ---
  const saludo = document.querySelector(".split");
  // Divide el texto en caracteres y los envuelve en spans
  saludo.innerHTML = saludo.textContent.split("").map(char => `<span class="char">${char === " " ? "&nbsp;" : char}</span>`).join("");
  
  tl.from(saludo.querySelectorAll(".char"), {
    duration: 0.8,
    opacity: 0,
    y: 80,
    rotationX: -90,
    stagger: 0.05,
    ease: "power4.out",
  });

  // --- Animación de la Especialidad ("Desarrollador Fullstack") ---
  const especialidad = document.querySelector(".especialidad");
  // Divide el texto en palabras, y cada palabra en caracteres
  especialidad.innerHTML = especialidad.textContent.split(" ").map(word => {
    const letters = word.split("").map(char => `<span class="char">${char}</span>`).join("");
    return `<span class="word">${letters}</span>`;
  }).join("&nbsp;");

  tl.from(especialidad.querySelectorAll(".char"), {
    duration: 0.6,
    opacity: 0,
    y: 50,
    stagger: 0.03,
    ease: "power3.out",
  }, "-=0.9");

  // --- Animación del Párrafo y Botón ---
  tl.from([".parrafo",], {
    duration: 1,
    opacity: 0,
    y: 30,
    stagger: 0.2,
    ease: "power4.out",
  }, "-=0.5");

  tl.from([".button",], {
    duration: 0.1,
    y: 30,
    stagger: 0.2,
    opacity: 1,
    ease: "power4.out",
  }, "-=0.5");

  // --- Animación de la flecha ---
  gsap.to(".flecha", {
    y: 10, // Mueve la flecha 10px hacia abajo
    duration: 0.8,
    repeat: -1, // Repite la animación infinitamente
    yoyo: true, // Hace que la animación vaya de ida y vuelta (efecto rebote)
    ease: "power1.inOut",
  });
});



// --- Lógica para cambiar el fondo del header al hacer scroll ---
const header = document.querySelector(".header");
// Escucha el evento de scroll en la ventana
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) { // Si el scroll vertical es mayor a 50px
    header.classList.add("scrolled"); // Añade la clase
  } else {
    header.classList.remove("scrolled"); // Quita la clase
  }
});
