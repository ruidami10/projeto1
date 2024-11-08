const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');

// Função para abrir o menu
menuToggle.addEventListener('click', function () {
    sideMenu.style.width = '250px';
    menuToggle.style.display = 'none';
});

// Função para fechar o menu
closeBtn.addEventListener('click', function () {
    sideMenu.style.width = '0';
    menuToggle.style.display = 'block';
});

// Função para ajustar o menu ao redimensionar a janela
window.addEventListener('resize', function () {
    if (window.innerWidth >= 769) {
        // Quando a largura da janela for maior que 768px
        sideMenu.style.width = '466px';
        menuToggle.style.display = 'none';
    } else {
        // Quando a largura da janela for menor que 769px
        sideMenu.style.width = '0';
        menuToggle.style.display = 'block';
    }
});