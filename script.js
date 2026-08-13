// ===== GENERATE STARS FOR NIGHT SIDE =====
function createStars() {
    const container = document.getElementById('starsContainer');
    if (!container) return;
    
    for (let i = 0; i < 60; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = (1 + Math.random() * 3) + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (1.5 + Math.random() * 2) + 's';
        container.appendChild(star);
    }
}

// ===== FLOATING HEARTS =====
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    if (!container) return;
    const hearts = ['♥', '♡', '❤', '💕', '💗'];
    
    setInterval(() => {
        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (6 + Math.random() * 6) + 's';
        heart.style.fontSize = (0.8 + Math.random() * 1) + 'rem';
        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 12000);
    }, 1500);
}

// ===== SCROLL REVEAL =====
function setupScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.section-meet, .section-song, .section-ocean, .section-things, .moment-card'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('moment-card')) {
                    const cards = document.querySelectorAll('.moment-card');
                    cards.forEach((card, index) => {
                        card.style.transitionDelay = (index * 0.2) + 's';
                    });
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach((el) => {
        observer.observe(el);
    });
}

// ===== ENVELOPE / LETTER =====
function setupEnvelope() {
    const envelope = document.getElementById('envelope');
    const letterContent = document.getElementById('letterContent');
    if (!envelope || !letterContent) return;

    envelope.addEventListener('click', () => {
        envelope.classList.toggle('opened');
        
        if (envelope.classList.contains('opened')) {
            setTimeout(() => {
                letterContent.classList.add('open');
            }, 400);
        } else {
            letterContent.classList.remove('open');
        }
    });
}

// ===== PROPOSAL BUTTON & CONFETTI =====
function setupProposal() {
    const btn = document.getElementById('proposalBtn');
    const celebration = document.getElementById('celebration');
    if (!btn || !celebration) return;

    btn.addEventListener('click', () => {
        createConfetti(celebration);
        btn.textContent = '💛 Forever & always 💛';
        btn.style.background = 'linear-gradient(135deg, #f7a072, #ffecd2)';
        btn.style.color = '#e8734a';
        
        setTimeout(() => {
            createCelebrationHearts();
        }, 500);
    });
}

function createConfetti(container) {
    const colors = ['#e8734a', '#f4845f', '#f7a072', '#ffecd2', '#fcb69f', '#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = (5 + Math.random() * 10) + 'px';
        confetti.style.height = (5 + Math.random() * 10) + 'px';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
        if (Math.random() > 0.5) confetti.style.borderRadius = '50%';
        container.appendChild(confetti);
        setTimeout(() => { confetti.remove(); }, 5000);
    }
}

function createCelebrationHearts() {
    const container = document.getElementById('celebration');
    const emojis = ['💛', '💕', '✨', '💖', '🥰', '💗', '❤️'];
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('span');
        heart.className = 'confetti';
        heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '-20px';
        heart.style.fontSize = (1 + Math.random() * 2) + 'rem';
        heart.style.background = 'none';
        heart.style.width = 'auto';
        heart.style.height = 'auto';
        heart.style.animationDelay = Math.random() * 1.5 + 's';
        heart.style.animationDuration = (2.5 + Math.random() * 3) + 's';
        container.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 6000);
    }
}

// ===== SMOOTH NAV SCROLL =====
function setupNavigation() {
    const ribbons = document.querySelectorAll('.ribbon-btn');
    ribbons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const href = btn.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createFloatingHearts();
    setupScrollReveal();
    setupEnvelope();
    setupProposal();
    setupNavigation();
});
