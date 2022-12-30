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

    // Scroll Efect

    var prevScrollPos = window.pageYOffset;

    window.onscroll = () => {

        // Ocultar y Mostrar menú al hacer scroll

        var currentScrollPos = window.pageYOffset;

        if(prevScrollPos > currentScrollPos){
            $('.menu').css("top", "0px");
            $('.menu').css("transition", "0.5s");

        } else {
            $('.menu').css("top", "-60px");
            $('.menu').css("transition", "0.5s");
        }

        prevScrollPos = currentScrollPos;

        // Condiciones

        var posicion = window.pageYOffset;

        if(posicion <= 600) {
            // Ocultar Estilos Menu Scroll
            $('.menu').css("borderBottom", "none");

            // Ocultar Ir Arriba 
            $('.go-top').css("right", "-100%");

        } else {
            // Mostrar Estilos Menu Scroll
            $('.menu').css("borderBottom", "2px solid #ff2e63");

            // Mostrar Ir Arriba 
            $('.go-top').css("right", "0");
            $('.go-top').css("transition", "500ms");
        }
    }

    // Función Ir Arriba

    $('.go-top').on('click', function() {
        $('body, html').animate({
            scrollTop: "0"
        }, 500);
    });

    // Función Ver Abajo

    $('#abajo').on('click', function() {
        $('body, html').animate({
            scrollTop: "650px"
        }, 500);
    });

});