// Cambia el texto del boton
$(".form").on('click', "button", function () {
    $(this).html("<a href='#'>Enviando...</a>");
});

// Alerta de enviar consola
function enviar() {
    alert("Esta seguro que desea contactarnos!!!");
}
$("#bttn").click(enviar);

// cambiar color texto h1 main
$("main").on("dblclick", "h1", function () {
    $(this).css("color", "red");
});
