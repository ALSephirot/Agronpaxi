function ObtenerInformacion(Consulta) {
	url = "Data/DatosPrueba.json"
	loadDataArray(url,Consulta);
}



function onClicProducto (Objeto) {
	CargarProducto(getProductos(),Objeto);
}

function CargarProducto(Productos, consulta) {
	var 
	HTMLProducto = "";

	if(consulta == "inicial")
	{
		$.each(Productos, function (index, item) {
			if(item.Codigo == "REGCRE")
			{
				HTMLProducto = "<h3>"+ item.Nombre +"</h3>";
				$.each(item.Productos, function (index, prod) {
					HTMLProducto += '<div class="DescripcionProd"><figure><img src="img/'+item.Nombre+'/PRODUCTOS SEPARADOS/'+prod.Codigo+'.png" alt="Imagen Producto"></figure></div>';
				})
			}
		});
	}
	else
	{
		var codigo = $(consulta).attr("data-codigo");
		$.each(Productos, function (index, item) {
			if(item.Codigo == codigo)
			{
				HTMLProducto = "<h3>"+ item.Nombre +"</h3>";
				$.each(item.Productos, function (index, prod) {
					HTMLProducto += '<div class="DescripcionProd"><figure><img src="img/'+item.Nombre+'/PRODUCTOS SEPARADOS/'+prod.Codigo+'.png" alt="Imagen Producto"></figure></div>';
				})
			}
		});
	}

	$("#ContenedorProductos").html(HTMLProducto);
}

$(document).ready(function () {
	ObtenerInformacion("Productos");
})