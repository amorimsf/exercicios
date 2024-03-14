setTimeout(() => {
    const heartIcon = document.querySelectorAll('.icone-coracao');

    heartIcon.forEach(function (icon) {
        icon.addEventListener('click', () => {
            icon.classList.toggle('active');
        });
    });
}, 500);    
    
