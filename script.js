// Generate twinkling stars on night side (right)
function createStars() {
    const container = document.getElementById('stars');
    if (!container) return;

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star' + (Math.random() > 0.85 ? ' star-big' : '');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        const size = 1.5 + Math.random() * 2.5;
        if (!star.classList.contains('star-big')) {
            star.style.width = size + 'px';
            star.style.height = size + 'px';
        }
        star.style.animationDelay = (Math.random() * 3) + 's';
        star.style.animationDuration = (1.5 + Math.random() * 2) + 's';
        container.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', createStars);
