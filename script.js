// Seleccionar el botón
const staticButton = document.getElementById('static-back-to-top');

// Evento de clic para regresar al inicio
staticButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
});
