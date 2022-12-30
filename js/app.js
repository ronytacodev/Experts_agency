$(document).ready(function() {

    // Menú de Navegación
    var activo = true;

    $('.btn-menu').on('click', function() {

        // Intercambiar íconos
        $('.btn-menu i').toggleClass('fa-times');

        // Animación Menú
        if(activo) {
            $('.list-container').animate({
                left: '0px'
            }, 500);

            activo = false;

        } else {
            activo = true;

            $('.list-container').animate({
                left: '-100%'
            }, 500);

            activo = true;
        }

    });

    // Intercambiar clase "Activo" Enlaces menú de navegación

    var enlaces = document.querySelectorAll('.lists li a');

    enlaces.forEach((element) => {

        element.addEventListener('click', (event) => {
            enlaces.forEach((link) => {
                link.classList.remove('activo');
            });

            event.target.classList.add('activo');
        });
    });


    
});