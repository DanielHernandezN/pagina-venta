window.onload = function() {
    const carroDiv = document.querySelector('.carro');
    const totalCarro = document.querySelector('.total-carro h3');

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function mostrarCarrito() {
        carroDiv.innerHTML = '';
        let total = 0;

        if (carrito.length === 0) {
            carroDiv.innerHTML = '<p>El carrito está vacío.</p>';
        } else {
            const ul = document.createElement('ul');
            carrito.forEach((producto, index) => {
                const li = document.createElement('li');
                li.textContent = `${producto.nombre} - $${producto.precio.toLocaleString()}`;
                total += producto.precio;

                // Botón eliminar
                const btnEliminar = document.createElement('button');
                btnEliminar.textContent = 'Eliminar';
                btnEliminar.onclick = function() {
                    carrito.splice(index, 1);
                    guardarCarrito();
                    mostrarCarrito();
                };
                li.appendChild(btnEliminar);
                ul.appendChild(li);
            });
            carroDiv.appendChild(ul);
        }
        totalCarro.textContent = `Total: $${total.toLocaleString()}`;
    }

    function guardarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    mostrarCarrito();
}