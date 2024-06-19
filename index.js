// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', (event) => {
    const navbar = document.getElementById('header_nav');

    // add el event de scroll
    window.addEventListener('scroll', () => {
        // Si se ha desplazado más de 50 píxeles desde la parte superior
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});


const btnBurger = document.querySelector('.fa-bars')

btnBurger.addEventListener('click' , (e)=>{
    document.querySelector('.nav_buger').style.display = 'block';
})