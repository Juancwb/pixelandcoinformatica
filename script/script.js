let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Rolando para baixo
        navbar.classList.add('hide');
        navbar.classList.remove('show');
    } else {
        // Rolando para cima
        navbar.classList.add('show');
        navbar.classList.remove('hide');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para compatibilidade com dispositivos móveis
});