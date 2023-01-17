document.addEventListener('DOMContentLoaded', () => {

    const humburger = document.querySelector('.humburger');
    const menu = document.querySelector('.menu');
    const closeEl = document.querySelector('.menu__close');

    // меню
    
    humburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeEl.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    // прогрессбар

    const progressFill = document.querySelectorAll('.work_progress-fill');
    const progressPercent = document.querySelectorAll('.work__progress-percent');

    progressFill.forEach((item, i) => {
        item.style.width = progressPercent[i].textContent;
    })
    
});