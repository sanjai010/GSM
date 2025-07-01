// === Intersection Observer for .gradient elements ===
const gradientObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll('.gradient').forEach(el => {
  gradientObserver.observe(el);
});

// === Intersection Observer for .fadeInRight and .fadeInLeft ===
const fadeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('.fadeInRight, .fadeInLeft').forEach(el => {
  fadeObserver.observe(el);
});

// === FAQ Toggle Function ===
function toggleAnswer(element) {
  const box = element.closest('.faq');
  box.classList.toggle('open');
}

// === Cursor Glow Effect on Navbar ===
const navbarContainer = document.querySelector('.navbar-container');
const glow = document.querySelector('.cursor-glow');

if (navbarContainer && glow) {
  navbarContainer.addEventListener('mousemove', (e) => {
    const rect = navbarContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
  });
}

// === Intersection Observer for .card elements (Slide from bottom) ===
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      cardObserver.unobserve(entry.target); // animate once
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.card').forEach(card => {
  cardObserver.observe(card);
});


document.querySelectorAll('.card').forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`; // 0s, 0.2s, 0.4s, ...
  cardObserver.observe(card);
});