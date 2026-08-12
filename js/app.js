document.addEventListener('DOMContentLoaded', () => {
    // Inicializar animaÃ§Ãµes on scroll
    initScrollReveal();

    // Efeito navbar background no scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
});

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(
        entries,
        revealOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                revealOnScroll.unobserve(entry.target); // Para animar apenas uma vez
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
}

// Lógica do Slider Antes e Depois
document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector(".slider-container");
    if (!sliderContainer) return;
    
    const wrapper = document.querySelector(".img-after-wrapper");
    const handle = document.querySelector(".slider-handle");
    const imgAfter = document.querySelector(".img-after");
    const comparison = document.querySelector(".image-comparison");
    
    let isDragging = false;
    
    // Sincroniza a largura real da imagem "after" com o container para não achatar
    function updateImageWidth() {
        if(imgAfter && comparison) {
            imgAfter.style.width = comparison.offsetWidth + "px";
        }
    }
    window.addEventListener("resize", updateImageWidth);
    updateImageWidth();
    
    function moveSlider(e) {
        if (!isDragging) return;
        
        let rect = comparison.getBoundingClientRect();
        let x = e.clientX || (e.touches && e.touches[0].clientX);
        x = x - rect.left;
        
        // Limita os movimentos dentro da caixa
        if (x < 0) x = 0;
        if (x > rect.width) x = rect.width;
        
        let percentage = (x / rect.width) * 100;
        wrapper.style.width = percentage + "%";
        handle.style.left = percentage + "%";
    }
    
    handle.addEventListener("mousedown", () => isDragging = true);
    handle.addEventListener("touchstart", () => isDragging = true);
    
    window.addEventListener("mouseup", () => isDragging = false);
    window.addEventListener("touchend", () => isDragging = false);
    
    window.addEventListener("mousemove", moveSlider);
    window.addEventListener("touchmove", moveSlider);
});

