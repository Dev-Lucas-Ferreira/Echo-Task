function menu_hamburguer() {
    const menu = document.getElementById('menu');

    // Alterna a visibilidade do menu
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
