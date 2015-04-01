function CambiarImagen(ListItem, AtrasSiguiente) {

    clearInterval(intervalo);

    var imagenes = $("#miniaturas li");

    if (imagenes.length > 1) {

        intervalo = setInterval(function () {
            Siguiente();
        }, 7000);

    }

    if (AtrasSiguiente) {
        var Imagen = ListItem.children();
    }
    else {
        var Imagen = ListItem.children[0];
    }



    var ImagenJQ = $(Imagen);
    var PImagen = ImagenJQ.attr("data-src");
    var NombreImagen = ImagenJQ.attr("data-NombreImagen");
    var DescripcionNoticia = ImagenJQ.attr("data-DescripcionNoticia");
    var LinkNoticia = ImagenJQ.attr("data-LinkNoticia");
    var PieImagen = ImagenJQ.attr("data-PieImagen");
    var Contador = ImagenJQ.attr("data-count");
    var titulo = ImagenJQ.attr("data-titulo");
    var UrlVideo = ImagenJQ.attr("data-urlvideo");
    // var linkDetalleImg = ImagenJQ.attr("data-linkdetalleimg");

    $("#miniaturas li").each(function () {
        $(this).attr("data-select", "false");
    });

    $(ListItem).attr("data-select", "true");

    //Cambio los atributos de la imagen
    //Oculto los campo
    $("[data-ocultar=true]").fadeOut(500);

    setTimeout(function () {
        //Modifico
        $("#Imagen").attr("src", PImagen);
        $("#Imagen").attr("data-count", Contador);
        //$("#PieImagen").html(PieImagen);
        //$("#NombreImagen").html(NombreImagen);
        $("#DescripcionNoticia p").html(DescripcionNoticia);
        //$("#LinkNoticia").attr("href", LinkNoticia);
        $("#TituloNoticia p").html(titulo);
        //  $("#linkDetalleImg").attr("href", linkDetalleImg);
        
        //Lineas para incrustar video en el slider, se necesita un iframe
        /*if(UrlVideo == "" || UrlVideo == undefined)
        {
            $("#Imagen").attr("data-ocultar", "true");
            $("#Video").attr("data-ocultar", "false");
            $("#Video").attr("style", "display:none;");
        }
        else
        {
            $("#Imagen").attr("data-ocultar", "false");
            $("#Video").attr("data-ocultar", "true");
            $("#Imagen").attr("style", "display:none;");
            $("#Video").attr("src", UrlVideo);
            clearInterval(intervalo);
        }*/

        //Vuelvo y Muestro
        $("[data-ocultar=true]").fadeIn(500);
    }, 500)

}

var imageninicial;
var intervalo;
var numimagenes;


function Atras() {

    clearInterval(intervalo);

    intervalo = setInterval(function () {
        Siguiente();
    }, 7000);

    var Actual = $("#Imagen").attr("data-count");
    var Imagenes = $("#miniaturas li img");

    /*if (Imagenes.length  > 11) {

        if (Actual == imageninicial && Actual > 0) {

            var inicio = Actual - 1;

            var final = 10 + inicio;

            miniaturas(inicio, final);

        }

    }*/

    if (Actual == 0) {

        var Imagenes = $("#miniaturas li img");
        var Imagen = $("[data-count=" + (Imagenes.length - 1) + "]");
        CambiarImagen(Imagen.parent(), true);

        var inicio = Imagenes.length - 11;

        var final = Imagenes.length - 1;

        miniaturas(inicio, final);
    }

    else {

        var contador = Actual - 1;
        var Imagen = $("[data-count=" + contador + "]");
        CambiarImagen(Imagen.parent(), true);
    }
}

function Siguiente() {

    clearInterval(intervalo);

    intervalo = setInterval(function () {
        Siguiente();
    }, 7000);

    var Actual = parseInt($("#Imagen").attr("data-count"));
    var Imagenes = $("#miniaturas li img");
    var Imagen = $("[data-count=0]");

    /*if (Actual > 9) {

        if (Actual < (Imagenes.length - 1)) {

            var inicio = Actual - 9;

            var final = Actual + 1;

            miniaturas(inicio, final);
        }
    }*/


    if (Actual == (Imagenes.length - 1)) {

        //miniaturas(0, 10);

        var Imagen = $("[data-count=0]");
        CambiarImagen(Imagen.parent(), true);

    }
    else {

        var contador = Actual + 1;
        var Imagen = $("[data-count=" + contador + "]");
        CambiarImagen(Imagen.parent(), true);

    }

}

//Funcion para cargar N cantidad de imagenes sin que se desborde
/*function miniaturas(inicio, final) {

    var miniaturas = $("#miniaturas li");

    //ocultar las primeras miniaturas
    for (var i = 0; i < inicio; i++) {

        var miniaturaselect = miniaturas[i];

        $(miniaturaselect).css("display", "none");

    }

    //pintar de nuevo las miniaturas
    for (var i = inicio; i < final + 1; i++) {

        var miniaturaselect = miniaturas[i];

        $(miniaturaselect).css("display", "block");

    }

    //ocultar las miniaturas por delante
    for (var i = final + 1; i < miniaturas.length; i++) {

        var miniaturaselect = miniaturas[i];

        $(miniaturaselect).css("display", "none");
    }

    imageninicial = inicio;


}*/


/*function scrollSubir() {
    var section = $(".compartirNota");
    $("html, body").fadeIn({ scrollTop: (section.offset().top - 100) }, 600);
}*/

function IniciarSlider() {
    var imagenes = $("#miniaturas li");
    var imagen = $("img[data-count=0]");
    CambiarImagen(imagen[0].parentNode);

    /*if (imagenes.length > 1) {

        $("#listaMin2").css("display", "block");

    } else {

        $("#listaMin2").css("display", "none");

    }*/
    
    if (imagenes.length > 1) {
        intervalo = setInterval(function () {
            Siguiente();
        }, 7000);
    }
}

$(document).ready(function () {
    /*var imagenes = $("#miniaturas li");
    var imagen = $("img[data-count=0]");
    CambiarImagen(imagen[0].parentNode);*/

    /*if (imagenes.length > 1) {

        $("#listaMin2").css("display", "block");

    } else {

        $("#listaMin2").css("display", "none");

    }*/
    
    /*if (imagenes.length > 1) {
        intervalo = setInterval(function () {
            Siguiente();
        }, 7000);
    }*/

});