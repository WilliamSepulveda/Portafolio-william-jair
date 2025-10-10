document.addEventListener('DOMContentLoaded', () => {
  tsParticles.load({
    id: "tsparticles",
    options: {
      background: {
        color: {
          value: "#090011", // Coincide con el fondo de tu sección de inicio
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab", // Las partículas se conectarán al cursor
          },
          onClick: {
            enable: true,
            mode: "push", // Añade más partículas al hacer clic
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 1,
            },
          },
          push: {
            quantity: 4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#a855f7", // Color de las líneas de conexión
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80, // Número de partículas
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 }, // Las partículas tendrán tamaños variados
        },
      },
      detectRetina: true,
    },
  });
});