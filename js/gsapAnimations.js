// --- Lógica para animación de texto letra por letra ---
document.addEventListener('DOMContentLoaded', () => {
  const headline = document.getElementById('animated-headline');
  if (headline) {
    const text = headline.textContent;
    const chars = text.split('');
    headline.innerHTML = ''; // Limpiamos el contenido original

    chars.forEach((char, index) => {
      const span = document.createElement('span');
      // Si es un espacio, usamos un espacio duro para que no se colapse
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.transitionDelay = `${index * 0.05}s`;
      headline.appendChild(span);
    });

    // Añadimos la clase 'visible' para iniciar la animación
    setTimeout(() => headline.classList.add('visible'), 100);
  }
});

// --- Lógica para animaciones de entrada con Intersection Observer (sin GSAP) ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1 // El elemento se considera visible cuando el 10% está en pantalla
});

// Selecciona todos los elementos que quieres animar y los observa
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
elementsToAnimate.forEach((el) => observer.observe(el));

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
