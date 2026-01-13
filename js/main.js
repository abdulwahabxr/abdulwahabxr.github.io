// ===== Mobile Menu Toggle =====
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
menuBtn.addEventListener("click", () => navMenu.classList.toggle("show"));

// ===== Fade-in on Scroll =====
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
});
faders.forEach(el => observer.observe(el));

// ===== Smooth Scroll =====
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior:"smooth" });
    navMenu.classList.remove("show");
  });
});

// ===== Scroll to Top Button =====
const scrollBtn = document.getElementById("scroll-top-btn");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = (window.scrollY > 300) ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Hero Canvas Animation =====
const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for(let i=0;i<80;i++){
  particles.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*2+1, dx:(Math.random()-0.5)*0.5, dy:(Math.random()-0.5)*0.5});
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(63,185,80,0.5)";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if(p.x>canvas.width||p.x<0)p.dx*=-1;
    if(p.y>canvas.height||p.y<0)p.dy*=-1;
  });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize",()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});