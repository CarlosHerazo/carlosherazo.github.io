// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', (event) => {
    const navbar = document.getElementById('header_nav');

    // Agregar el evento de scroll
    window.addEventListener('scroll', () => {
        // Si se ha desplazado más de 50 píxeles desde la parte superior
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});