function ObtenerInformacion(Consulta) {
	url = "Data/DatosPrueba.json"
	loadDataArray(url,Consulta);
}

function CargarQuienesSomos(ObjectInfo) {
	CargarSlider(ObjectInfo.QuienesSomos.Banner);
	CargarEmpleados(ObjectInfo.QuienesSomos.Empleados);
}

function CargarSlider (ObjectInfo) {
	$("#TituloNoticia p").html(ObjectInfo.TituloImagen);
	$("#DescripcionNoticia p").html()
	$("#Imagen").attr("src","img/"+ObjectInfo.id+".png");
}

function CargarEmpleados (Empleados) {
	// body...
}

function ClickRedesEmpleado(red) {
	// body...
}

$(document).ready(function() {
	ObtenerInformacion("QuienesSomos");
});