function mostrar(opcion)
{
    switch (opcion) {
        case 1:
            document.getElementById('Mostrar').style.display = 'none';
            document.getElementById('Agregar').style.display = 'block';
            break;
        default:
            document.getElementById('Mostrar').style.display = 'block';
            document.getElementById('Agregar').style.display = 'none';
            break;
    }
}

function borrar() {
    alert("El juego ha sido eliminado de tu Catalogo");
}
function agregar() {
    alert("El juego ha sido agregado a tu Catalogo");
    document.AgregarPrueba.inputTitulo.value = ""
    document.AgregarPrueba.inputPlataforma.value = "";
    document.AgregarPrueba.inputEdicion.value = "";
    document.AgregarPrueba.inputDescripcion.value = "";
    document.AgregarPrueba.inputDesarrollo.value = "";
    document.AgregarPrueba.inputClasificacion.value = "";
}

function actualizar()
{
    document.getElementById('Mostrar').style.display = 'none';
    document.getElementById('Agregar').style.display = 'block'
    document.AgregarPrueba.inputTitulo.value = "Halo 5"
    document.AgregarPrueba.inputPlataforma.value = "Xbox One";
    document.AgregarPrueba.inputEdicion.value = "Deluxe";
    document.AgregarPrueba.inputDescripcion.value = "Esto es una prueba para ver si funciona";
    document.AgregarPrueba.inputDesarrollo.value = "Microsoft Studios";
    document.AgregarPrueba.inputClasificacion.value = "Maduro";
}