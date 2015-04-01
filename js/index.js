$(document).ready(function($) {
	ObtenerInformacion("Index");
});

function ObtenerInformacion(Consulta) {
	url = "Data/DatosPrueba.json"
	loadDataArray(url,Consulta);
}

function CargarIndex (ObjectInfo) {

	CargarSlider(ObjectInfo.ImagenesSlider);
	CargarNoticiaVideo(ObjectInfo.Noticia,ObjectInfo.Video);
}

function CargarSlider (ObjectSlider) {
	var htmlM = '';

	$.each(ObjectSlider, function(index, item) {
		htmlM += '<li class="SliderOpcion" data-select="true" onclick="CambiarImagen(this)">' +
					'<img src="img/'+item.id+'.png" data-src="img/'+item.id+'.png" data-nombreimagen="'+item.TituloImagen+'" data-descripcionnoticia="'+item.DescripcionImagen+'" data-linknoticia="#" data-titulo="'+item.TituloImagen+'" alt="Opcion '+(index+1)+'" data-count="'+index+'">'+
				'</li>';	 
	});

	$("#miniaturas").html(htmlM);
	IniciarSlider();
}

function CargarNoticiaVideo (Noticia,Video) {
	$("#ImagenNoticia").attr("src","img/"+Noticia.id+".jpg");
	$("#LinkNoticia").attr("href","http://"+Noticia.LinkNoticia);
	$("#DescNoticia p").html(Noticia.DescripcionNoticia);
	$("#VideoNoticia").attr("src",Video.LinkVideo);
}