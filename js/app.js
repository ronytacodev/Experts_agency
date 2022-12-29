$(document).ready(function() {

    // Menú de Navegación
    var activo = true;

    $('.btn-menu').on('click', function() {

        // Intercambiar íconos
        $('.btn-menu i').toggleClass('fa-times');

        // Anumación Menú
        if(activo) {
            $('.list-container').animate({
                left: '0px'
            }, 500);

            activo = false;

        } else {
            activo = true;
        }

    });

// me quede en el min 1:10:07


});