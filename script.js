const content = {
  sq: {
    name: "Jon Nuredini",
    title: "Full Stack Developer",
    aboutTitle: "Rreth Meje",
    aboutText:
      "Jam një Full Stack Developer me mbi 9 vite trajnim dhe përvojë praktike në zhvillimin e sistemeve softuerike. Specializohem në PHP, databaza dhe dizajn frontend, duke ndërtuar zgjidhje të shkallëzueshme, elegante dhe efikase.",
    skillsTitle: "Shkathtësitë",
    projectTitle: "Projekti Kryesor",
    projectName: "Sistem për Menaxhimin e Rent a Car",
    projectDesc:
      "Sistem i plotë për menaxhimin e flotës së automjeteve, klientëve, rezervimeve, të hyrave, TVSH-së dhe gjenerimit automatik të kontratave.",
    contactTitle: "Kontakt"
  },
  en: {
    name: "Jon Nuredini",
    title: "Full Stack Developer",
    aboutTitle: "About Me",
    aboutText:
      "I am a Full Stack Developer with over 9 years of continuous training and hands-on experience in software development. I specialize in PHP, database systems, and front-end design, delivering scalable and elegant solutions.",
    skillsTitle: "Skills",
    projectTitle: "Featured Project",
    projectName: "Rent a Car Management System",
    projectDesc:
      "A complete system for managing vehicle fleets, clients, reservations, revenue, VAT calculations, and automatic contract generation.",
    contactTitle: "Contact"
  }
};

let currentLang = localStorage.getItem("lang") || "sq";

function render(lang) {
  const c = content[lang];
  document.getElementById("name").textContent = c.name;
  document.getElementById("title").textContent = c.title;
  document.getElementById("aboutTitle").textContent = c.aboutTitle;
  document.getElementById("aboutText").textContent = c.aboutText;
  document.getElementById("skillsTitle").textContent = c.skillsTitle;
  document.getElementById("projectTitle").textContent = c.projectTitle;
  document.getElementById("projectName").textContent = c.projectName;
  document.getElementById("projectDesc").textContent = c.projectDesc;
  document.getElementById("contactTitle").textContent = c.contactTitle;
  document.getElementById("langToggle").textContent = lang === "sq" ? "EN" : "SQ";
}

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "sq" ? "en" : "sq";
  localStorage.setItem("lang", currentLang);
  render(currentLang);
});

render(currentLang);

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
});

// Liquid Glass Hover effect for skill/project cards
const glassCards = document.querySelectorAll(".skill-box, .project-card");

glassCards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // X relative to card
    const y = e.clientY - rect.top;  // Y relative to card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    card.style.transform = `translate(${deltaX * 10}px, ${deltaY * 10}px) rotateX(${ -deltaY * 5 }deg) rotateY(${ deltaX * 5 }deg)`;
    card.style.boxShadow = `${-deltaX*15}px ${-deltaY*15}px 40px rgba(0,0,0,0.35)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `translate(0px,0px) rotateX(0deg) rotateY(0deg)`;
    card.style.boxShadow = "0 12px 30px rgba(0,0,0,0.3)";
  });
});

// Interactive tech background (subtle liquid effect)
const techBg = document.querySelector(".tech-bg");

window.addEventListener("mousemove", e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 40;
  const y = (e.clientY / window.innerHeight - 0.5) * 40;
  techBg.style.transform = `translate(${x}px, ${y}px)`;
});

window.addEventListener("load", () => {
  const heroElements = document.querySelectorAll(".hero-inner h1, .hero-inner .hero-title, .hero-divider");
  heroElements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("active");
    }, i * 300);
  });
});
