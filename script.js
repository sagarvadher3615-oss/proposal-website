// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.15 });

document.querySelectorAll('.section').forEach(el => observer.observe(el));

// Smooth nav
document.querySelectorAll('.nav-ribbon').forEach(btn => {
    btn.addEventListener('click', e => {
        const href = btn.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Envelope
const envelope = document.getElementById('envelope');
const letterReveal = document.getElementById('letterReveal');
if (envelope) {
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('opened');
        if (envelope.classList.contains('opened')) {
            setTimeout(() => letterReveal.classList.add('open'), 400);
        } else {
            letterReveal.classList.remove('open');
        }
    });
}

// Proposal button
const yesBtn = document.getElementById('yesBtn');
const confettiBox = document.getElementById('confettiBox');
if (yesBtn) {
    yesBtn.addEventListener('click', () => {
        // Confetti
        const colors = ['#e8734a','#f4845f','#f7a072','#ffd93d','#6bcb77','#4d96ff','#ff6b6b','#fcb69f'];
        for (let i = 0; i < 80; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = Math.random() * 100 + '%';
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            piece.style.width = (6 + Math.random() * 8) + 'px';
            piece.style.height = (6 + Math.random() * 8) + 'px';
            piece.style.animationDelay = Math.random() * 1.5 + 's';
            piece.style.animationDuration = (2 + Math.random() * 2) + 's';
            if (Math.random() > 0.5) piece.style.borderRadius = '50%';
            confettiBox.appendChild(piece);
            setTimeout(() => piece.remove(), 5000);
        }
        yesBtn.textContent = '💛 Forever & always 💛';
        yesBtn.style.background = 'linear-gradient(135deg, #f7a072, #ffecd2)';
        yesBtn.style.color = '#e8734a';
    });
}
