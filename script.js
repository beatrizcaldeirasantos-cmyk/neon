document.addEventListener('DOMContentLoaded', () => {

    // 1. Alternar Modo Claro / Escuro
    const themeBtn = document.getElementById('btn-theme');
    const body = document.body;

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        if (body.classList.contains('dark-mode')) {
            themeBtn.textContent = 'Modo Claro ☀️';
        } else {
            themeBtn.textContent = 'Modo Escuro 🌙';
        }
    });

    // 2. Controle de Acessibilidade (Aumentar/Diminuir Letras)
    let currentFontSize = 16;
    const btnIncrease = document.getElementById('btn-increase');
    const btnDecrease = document.getElementById('btn-decrease');

    btnIncrease.addEventListener('click', () => {
        if (currentFontSize < 22) {
            currentFontSize += 2;
            document.body.style.fontSize = `${currentFontSize}px`;
        }
    });

    btnDecrease.addEventListener('click', () => {
        if (currentFontSize > 12) {
            currentFontSize -= 2;
            document.body.style.fontSize = `${currentFontSize}px`;
        }
    });

    // 3. Filtro de Categorias de Carros
    const filterButtons = document.querySelectorAll('.filter-btn');
    const carCards = document.querySelectorAll('.car-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove classe ativa de todos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            carCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || category === cardCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
