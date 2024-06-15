
document.addEventListener("DOMContentLoaded", function() {


    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Seleccionar todos los enlaces en el nav
    const navLinks = document.querySelectorAll('nav ul li a');

    // Agregar un evento de clic a cada enlace
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Prevenir el comportamiento predeterminado de anclaje
            event.preventDefault();

            // Eliminar la clase activa de todos los enlaces
            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            // Desplazamiento suave a la sección correspondiente
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Manejar el clic en el botón de volver al inicio
backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

