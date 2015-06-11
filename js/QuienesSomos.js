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
	var HTMLEmpleados = "";

	$.each(Empleados, function(index, item) {
		HTMLEmpleados +='<div class="ContenedorPpalQS">'+
					'<figure class="ImagenEmpleado">'+
						'<img src="img/'+ item.id +'.png" alt="Usuario">'+
					'</figure>'+
					'<div class="NombreEmpleado">'+
						'<p>'+ item.Nombre +'</p>'+
						'<p>'+ item.Cargo +'</p>'+
					'</div>'+
					'<div class="ContentRedes">'+
						'<figure><img id="EmpleadoFacebook" src="img/facebook.png" alt="Facebook" data-src="'+ item.Facebook +'" onclick="ClickRedesEmpleado(this)"></figure>'+
						'<figure><img id="EmpleadoTwitter" src="img/twitter.png" alt="Twitter" data-src="'+ item.Twitter +'" onclick="ClickRedesEmpleado(this)"></figure>'+
						'<figure><img id="EmpleadoLinkid" src="img/linkid.png"  alt="LinkId" data-src="'+ item.LinkId +'" onclick="ClickRedesEmpleado(this)"></figure>'+
					'</div>'+
					'<p class="DescripcionEmpleado">'+ item.Descripcion +'</p>'+

				'</div>';	 
	});
}

function ClickRedesEmpleado(red) {
	window.open($(red).attr("data-src"),"_blank");
}

$(document).ready(function() {
	ObtenerInformacion("QuienesSomos");
});