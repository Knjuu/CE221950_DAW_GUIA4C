// Arreglo para almacenar los productos agregados a la venta
var productosEnVenta = [];

// Función para agregar un producto a la venta
function agregarProducto() {
    var nombreProducto = document.getElementById("nombreProducto").value;
    var precioUnitario = parseFloat(document.getElementById("precioUnitario").value);
    var cantidad = parseInt(document.getElementById("cantidad").value);

    // Calcular el detalle (precio venta x cantidad)
    var detalle = precioUnitario * cantidad;

    // Agregar el producto a la lista
    productosEnVenta.push({
        nombre: nombreProducto,
        precio: precioUnitario,
        cantidad: cantidad,
        detalle: detalle
    });

    // Actualizar la tabla de productos en la venta
    actualizarTablaVenta();

    // Calcular y actualizar el total de la venta
    calcularTotalVenta();

    // Limpiar los campos del formulario
    document.getElementById("nombreProducto").value = "";
    document.getElementById("precioUnitario").value = "";
    document.getElementById("cantidad").value = "";
}

// Función para actualizar la tabla de productos en la venta
function actualizarTablaVenta() {
    var tabla = document.getElementById("tablaVenta");
    tabla.innerHTML = "<tr><th>Nombre Producto</th><th>Precio Unitario</th><th>Cantidad</th><th>Detalle</th></tr>";

    for (var i = 0; i < productosEnVenta.length; i++) {
        var producto = productosEnVenta[i];
        tabla.innerHTML += "<tr><td>" + producto.nombre + "</td><td>" + producto.precio + "</td><td>" + producto.cantidad + "</td><td>" + producto.detalle + "</td></tr>";
    }
}

// Función para calcular y actualizar el total de la venta
function calcularTotalVenta() {
    var total = 0;
    for (var i = 0; i < productosEnVenta.length; i++) {
        total += productosEnVenta[i].detalle;
    }
    document.getElementById("totalVenta").textContent = total.toFixed(2);
}
