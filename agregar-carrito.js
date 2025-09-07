// Unifica la lógica de agregar productos al carrito para toda la tienda

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
            mostrarMensaje(`${nombre} agregado al carrito`);
        });
    });
});

// Muestra un mensaje amigable en pantalla
function mostrarMensaje(mensaje) {
    let div = document.createElement('div');
    div.textContent = mensaje;
    div.style.position = 'fixed';
    div.style.bottom = '30px';
    div.style.right = '30px';
    div.style.background = '#333';
    div.style.color = '#fff';
    div.style.padding = '15px 25px';
    div.style.borderRadius = '8px';
    div.style.zIndex = '9999';
    div.style.fontSize = '1.2rem';
    document.body.appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 1800);
}
