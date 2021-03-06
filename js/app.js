//url= direccion uri de la consulta
function loadDataArray(url,Consulta) {

	try
	{
		$.support.cors = true;
		$.ajax({
			type: "GET",
			url: url,
			dataType: "json",
			async:true,
			isLocal: true,
			success: function (results) {

	   			OnSucces(results, Consulta);

			},
			error: function (msg) {
				  
				OnError(msg);

			}
		});
	}
	catch(err)
	{
		//alert(err.message);
	}
}

function OnSucces (ArrayInfo, Consulta) {
	setDatos(ArrayInfo);
	if(Consulta == "Index")
	{
		CargarIndex(ArrayInfo);
	}
	else if(Consulta == "QuienesSomos")
	{
		CargarQuienesSomos(ArrayInfo);
	}
	else if(Consulta == "Productos")
	{
		setProductos(ArrayInfo.Productos);
		onClicProducto("inicial");
	}

}

function OnError(Error) {
	var StrError = JSON.stringify(Error);
	alert(StrError);
}