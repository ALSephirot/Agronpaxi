var Datos;
var UrlDatos;
var Productos;

function getProductos() {
	return Productos;
}

function setProductos (pProductos) {
	Productos = pProductos;
}

function getDatos() {
	return Datos;
}

function setDatos (pDatos) {
	Datos = pDatos;
}

window.getDatos = getDatos;
window.setDatos = setDatos;
window.getProductos = getProductos;
window.setProductos = setProductos;