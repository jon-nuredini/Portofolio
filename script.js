document.addEventListener("DOMContentLoaded", () => {

  const el = id => document.getElementById(id);

  const data = {
    sq: {
      name: "Jon Nuredini",
      title: "Full Stack Developer",
      aboutTitle: "Rreth Meje",
      aboutText:
        "Jam një Full Stack Developer me mbi 9 vite trajnim dhe përvojë praktike në zhvillimin e sistemeve softuerike. Specializohem në PHP, databaza dhe dizajn frontend, duke ndërtuar zgjidhje të shkallëzueshme, elegante dhe efikase.",
      skillsTitle: "Shkathtësitë",
      skills: [
        { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React Native"] },
        { title: "Backend", items: ["PHP", "Java", "Python", "C++", "C#"] },
        { title: "Database & Tools", items: ["MySQL", "Git"] }
      ],
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
      skills: [
        { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React Native"] },
        { title: "Backend", items: ["PHP", "Java", "Python", "C++", "C#"] },
        { title: "Database & Tools", items: ["MySQL", "Git"] }
      ],
      projectTitle: "Featured Project",
      projectName: "Rent a Car Management System",
      projectDesc:
        "A complete system for managing vehicle fleets, clients, reservations, revenue, VAT calculations, and automatic contract generation.",
      contactTitle: "Contact"
    }
  };

  let lang = "en";

  function render() {
    const d = data[lang];

    el("name").textContent = d.name;
    el("title").textContent = d.title;
    el("aboutTitle").textContent = d.aboutTitle;
    el("aboutText").textContent = d.aboutText;
    el("skillsTitle").textContent = d.skillsTitle;
    el("projectTitle").textContent = d.projectTitle;
    el("projectName").textContent = d.projectName;
    el("projectDesc").textContent = d.projectDesc;
    el("contactTitle").textContent = d.contactTitle;

    const skillsGrid = el("skillsGrid");
    skillsGrid.innerHTML = "";

    d.skills.forEach((group, i) => {
      const box = document.createElement("div");
      box.className = "skill-modern reveal";
      box.style.animationDelay = `${i * 0.15}s`;

      box.innerHTML = `
        <h3>${group.title}</h3>
        <div class="skill-tags">
          ${group.items.map(item => `<span>${item}</span>`).join("")}
        </div>
      `;

      skillsGrid.appendChild(box);
    });

    el("footer").textContent = `© ${new Date().getFullYear()} Jon Nuredini`;
    observe();
  }

  function observe() {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add("active"));
    }, { threshold: 0.15 });

    els.forEach(el => obs.observe(el));
  }

  // Language toggle
  el("langToggle").onclick = () => {
    lang = lang === "en" ? "sq" : "en";
    render();
  };

  // GO ON TOP BUTTON
  const goTop = document.getElementById("goTop");
  if (goTop) {
    goTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  render();
});
