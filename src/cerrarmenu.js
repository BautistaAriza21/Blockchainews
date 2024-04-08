function cerrarMenuHamburguesa() {
    var menu = document.getElementById('menu-hamburguesa');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

document.getElementById('cerrar-menu').addEventListener('click', cerrarMenuHamburguesa);
