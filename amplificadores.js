document.addEventListener('DOMContentLoaded', function() {
    const botones = document.querySelectorAll('.agregar-carrito');
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const nombre = this.getAttribute('data-nombre');
            const precio = parseInt(this.getAttribute('data-precio'));
            if (!nombre || isNaN(precio)) {
                alert('Error al agregar el producto.');
                return;
            }
            const producto = { nombre, precio };

            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.push(producto);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert(`${nombre} agregado al carrito`);
        });
    });
})