// Generate twinkling stars on the night (right) side
function createStars() {
    const container = document.getElementById('stars');
    if (!container) return;

    for (let i = 0; i < 90; i++) {
        const star = document.createElement('div');
        const isBig = Math.random() > 0.82;
        star.className = 'star' + (isBig ? ' star-big' : '');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        if (!isBig) {
            const size = 1.5 + Math.random() * 2.5;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
        }
        star.style.animationDelay = (Math.random() * 3) + 's';
        star.style.animationDuration = (1.5 + Math.random() * 2) + 's';
        container.appendChild(star);
    }
}

document.addEventListener('DOMContentLoaded', createStars);
