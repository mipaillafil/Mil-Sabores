// js/promociones-navigation.js
document.addEventListener('DOMContentLoaded', function() {
    const promocionesWrapper = document.querySelector('.promociones-wrapper');
    const promocionesContainer = document.querySelector('.promociones-container');
    const promocionesGrid = document.querySelector('.promociones-grid');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!promocionesContainer || !prevBtn || !nextBtn) return;
    
    // Variables para controlar el estado
    let canScroll = true;
    let scrollTimeout;
    
    // Función para actualizar el estado de los botones
    function updateButtonStates() {
        const scrollLeft = promocionesContainer.scrollLeft;
        const scrollWidth = promocionesContainer.scrollWidth;
        const clientWidth = promocionesContainer.clientWidth;
        const isAtStart = scrollLeft <= 0;
        const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 10;
        
        // Actualizar botones
        prevBtn.disabled = isAtStart;
        nextBtn.disabled = isAtEnd;
        
        // Actualizar clases para efectos visuales
        promocionesWrapper.classList.toggle('scroll-start', !isAtStart);
        promocionesWrapper.classList.toggle('scroll-end', !isAtEnd);
    }
    
    // Función para hacer scroll suave
    function smoothScroll(direction) {
        if (!canScroll) return;
        
        canScroll = false;
        const scrollAmount = promocionesContainer.clientWidth * 0.8;
        
        promocionesContainer.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth'
        });
        
        // Rehabilitar scroll después de un tiempo
        setTimeout(() => {
            canScroll = true;
        }, 500);
    }
    
    // Event listeners para los botones
    prevBtn.addEventListener('click', () => smoothScroll('prev'));
    nextBtn.addEventListener('click', () => smoothScroll('next'));
    
    // Actualizar estado al hacer scroll
    promocionesContainer.addEventListener('scroll', function() {
        // Usar debounce para mejor rendimiento
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateButtonStates, 100);
    });
    
    // Actualizar al cambiar tamaño de ventana
    window.addEventListener('resize', function() {
        // Esperar a que termine el redimensionamiento
        setTimeout(updateButtonStates, 200);
    });
    
    // Actualizar estado inicial
    updateButtonStates();
    
    // También actualizar después de que se cargue todo
    window.addEventListener('load', updateButtonStates);
    
    // Navegación con teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            smoothScroll('prev');
            e.preventDefault();
        } else if (e.key === 'ArrowRight') {
            smoothScroll('next');
            e.preventDefault();
        }
    });
});