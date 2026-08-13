// ===== FLOATING HEARTS =====
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const hearts = ['♥', '♡', '❤', '💕', '💗'];
    
    setInterval(() => {
        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (6 + Math.random() * 6) + 's';
        heart.style.fontSize = (0.8 + Math.random() * 1) + 'rem';
        container.appendChild(heart);

        // Remove heart after animation
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
                // For moment cards, add staggered delay
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

    btn.addEventListener('click', () => {
        // Create confetti explosion
        createConfetti(celebration);
        
        // Change button text
        btn.textContent = '💛 Forever & always 💛';
        btn.style.background = 'linear-gradient(135deg, #f7a072, #ffecd2)';
        btn.style.color = '#e8734a';
        
        // Add celebration hearts
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
        
        // Random shapes
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }
        
        container.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
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
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
}

// ===== PARALLAX EFFECT ON HERO =====
function setupParallax() {
    const hero = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
            hero.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
}

// ===== TYPEWRITER EFFECT FOR HERO (subtle) =====
function setupTypewriter() {
    const title = document.querySelector('.hero-title');
    title.style.opacity = '0';
    
    setTimeout(() => {
        title.style.opacity = '1';
        title.style.animation = 'fadeInUp 1.5s ease forwards';
    }, 500);
}

// ===== SMOOTH SCROLL FOR SECTIONS =====
function setupSmoothScroll() {
    // Add smooth entrance for the distance section
    const distanceSection = document.querySelector('.section-distance');
    const distanceObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.distance-title').style.animation = 'fadeInUp 1s ease forwards';
            }
        });
    }, { threshold: 0.3 });
    
    if (distanceSection) {
        distanceObserver.observe(distanceSection);
    }
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    setupScrollReveal();
    setupEnvelope();
    setupProposal();
    setupParallax();
    setupTypewriter();
    setupSmoothScroll();
});
