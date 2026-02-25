/* AI Toggle */
function openAIBox() {
  document.getElementById("ai-box").classList.toggle("hidden");
}

/* Card 3D tilt effect */
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let rotateY = ((x / rect.width) - 0.5) * 20;
    let rotateX = ((y / rect.height) - 0.5) * -20;

    card.style.transform =
      `translateY(-12px) scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

/* Scroll reveal animation */
const revealElements = document.querySelectorAll(".card, .services, .hero, .welcome-banner");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

revealElements.forEach(el => observer.observe(el));

/* Particles Background */
const canvas = document.createElement("canvas");
canvas.classList.add("particle-bg");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = 2 + Math.random() * 3;
    this.speedX = (Math.random() - 0.5) * 0.6;
    this.speedY = (Math.random() - 0.5) * 0.6;
  }
  draw() {
    ctx.fillStyle = "rgba(0,255,255,0.7)";
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#00eaff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < 80; i++) particles.push(new Particle());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();