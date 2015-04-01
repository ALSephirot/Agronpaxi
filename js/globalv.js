var Datos;
var UrlDatos;

function getDatos() {
	return Datos;
}

function setDatos (pDatos) {
	Datos = pDatos;
}

window.getDatos = getDatos;
window.setDatos = setDatos;