document.addEventListener("DOMContentLoaded", () => {

  const el = id => document.getElementById(id);

  // DATA ME DY GJUHET
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
      skillDescriptions: {
        "HTML": "HTML është gjuha bazë për strukturimin e faqeve web.",
        "CSS": "CSS përdoret për stilizimin dhe pamjen e elementeve në web.",
        "JavaScript": "JavaScript sjell interaktivitet dhe logjikë në web.",
        "React Native": "React Native përdoret për zhvillimin e aplikacioneve mobile.",
        "PHP": "PHP është gjuhë server-side për zhvillimin e web-it dinamike.",
        "Java": "Java është gjuhë e fuqishme për aplikacione enterprise dhe Android.",
        "Python": "Python përdoret për web, data, AI dhe shumë më tepër.",
        "C++": "C++ përdoret për programe performante dhe software kompleks.",
        "C#": "C# përdoret kryesisht për aplikacione Windows dhe Unity.",
        "MySQL": "MySQL është një sistem menaxhimi bazash të dhënash relationale.",
        "Git": "Git përdoret për versionimin dhe menaxhimin e kodit."
      },
      projectTitle: "Projekti Kryesor",
      projects: [
        {
          name: "Sistem për Menaxhimin e Rent a Car",
          desc: "Sistem i plotë për menaxhimin e flotës së automjeteve, klientëve, rezervimeve, të hyrave, TVSH-së dhe gjenerimit automatik të kontratave."
        },
        {
          name: "HosData",
          desc: "Sistem i avancuar për menaxhimin elektronik të një spitali. Ofron regjistrimin e stafit me përdorues unik, menaxhimin e pacientëve dhe historikut të diagnozave, përcjelljen e terapisë dhe procedurave, dhe organizimin e të gjitha proceseve administrative dhe klinike."
        }
      ],
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
      skillDescriptions: {
        "HTML": "HTML is the core language for structuring web pages.",
        "CSS": "CSS is used to style and visually design web elements.",
        "JavaScript": "JavaScript adds interactivity and logic to web pages.",
        "React Native": "React Native is used for mobile application development.",
        "PHP": "PHP is a server-side language for dynamic web development.",
        "Java": "Java is a powerful language for enterprise applications and Android.",
        "Python": "Python is used for web, data, AI, and much more.",
        "C++": "C++ is used for high-performance programs and complex software.",
        "C#": "C# is mainly used for Windows apps and Unity development.",
        "MySQL": "MySQL is a relational database management system.",
        "Git": "Git is used for version control and managing code."
      },
      projectTitle: "Featured Projects",
      projects: [
        {
          name: "Rent a Car Management System",
          desc: "A complete system for managing vehicle fleets, clients, reservations, revenue, VAT calculations, and automatic contract generation."
        },
        {
          name: "HosData",
          desc: "Advanced system for electronic hospital management. Provides staff registration with unique accounts, patient and diagnosis history management, therapy tracking, and centralizes all administrative and clinical processes efficiently."
        }
      ],
      contactTitle: "Contact"
    }
  };

  let lang = "en";

  // FUNKSION RENDERO
  function render() {
    const d = data[lang];

    el("name").textContent = d.name;
    el("title").textContent = d.title;
    el("aboutTitle").textContent = d.aboutTitle;
    el("aboutText").textContent = d.aboutText;
    el("skillsTitle").textContent = d.skillsTitle;
    el("projectTitle").textContent = d.projectTitle;
    el("contactTitle").textContent = d.contactTitle;

    // SKILL CARDS
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

    // PROJECTS
    const projectSection = el("projectDesc");
    projectSection.innerHTML = `<div class="project-grid"></div>`;
    const projectGrid = projectSection.querySelector(".project-grid");

    d.projects.forEach((p) => {
      const card = document.createElement("div");
      card.className = "project-card reveal";
      card.innerHTML = `
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
      `;
      projectGrid.appendChild(card);
    });

    el("footer").textContent = `© ${new Date().getFullYear()} Jon Nuredini`;

    observe();
    attachSkillModal(); // shtoj modal behavior pas rendertimit
  }

  // INTERSECTION OBSERVER
  function observe() {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add("active"));
    }, { threshold: 0.15 });

    els.forEach(el => obs.observe(el));
  }

  // LANGUAGE TOGGLE
  el("langToggle").onclick = () => {
    lang = lang === "en" ? "sq" : "en";
    render();
  };

  // GO ON TOP
  const goTop = el("goTop");
  if(goTop){
    goTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // SKILL MODAL
  const modal = el("skillModal");
  const modalName = el("modalSkillName");
  const modalDesc = el("modalSkillDesc");
  const closeModal = el("closeModal");

  function attachSkillModal() {
    const spans = document.querySelectorAll(".skill-tags span");
    spans.forEach(span => {
      span.onclick = () => {
        const desc = data[lang].skillDescriptions[span.textContent];
        if(desc){
          modalName.textContent = span.textContent;
          modalDesc.textContent = desc;
          modal.style.display = "flex";
        }
      };
    });
  }

  closeModal.onclick = () => modal.style.display = "none";
  window.onclick = (e) => { if(e.target === modal) modal.style.display = "none"; };

  // INITIAL RENDER
  render();
});
