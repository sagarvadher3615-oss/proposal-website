// Generate stars on the night (Mexico/right) side
function createStars() {
    const container = document.getElementById('stars');
    if (!container) return;

    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        const size = 1 + Math.random() * 3;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDelay = (Math.random() * 3) + 's';
        star.style.animationDuration = (1.5 + Math.random() * 2) + 's';
        container.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', createStars);
