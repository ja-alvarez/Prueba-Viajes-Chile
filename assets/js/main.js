// Este bloque de código se ejecuta cuando el DOM ha cargado completamente
//Inicializa los tooltips
document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
    }
    );
});

$(document).ready(function () {
    //Evento click para mostrar una alerta al hacer clic en el botón del formulario
    //event/preventDefault() no hacen nada aun ya que no he especificado un atributo action en el form por ahora
    $('#enviarMensaje').click(function (event) { 
        event.preventDefault(); 
        //Verificar que los campos estén completos
        var nombre = $('#exampleFormControlInput1').val();
        var asunto = $('#exampleFormControlInput2').val();
        var mensaje = $('#exampleFormControlTextarea1').val();
        if (nombre && asunto && mensaje) {
            alert('El mensaje fue enviado correctamente.');
    } else {
        alert('Por favor, completa todos los campos antes de enviar el mensaje.');
    }
});

    //Al hacer clic en el titulo de las cards seccion Destacados, el contenido aparece/desaparece
    $('.card-title').click(function () {
        $(this).next('.card-text').toggle();
    });
});