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
        "HTML": "HTML është gjuha bazë për strukturimin e faqeve web. Përdoret për të organizuar elementet e faqes, si tituj, paragrafë, lista, tabela dhe media. Pa HTML, një faqe web nuk do të kishte strukturë të kuptueshme.",
        "CSS": "CSS përdoret për stilizimin dhe pamjen vizuale të elementeve në web. Me CSS mund të ndryshosh ngjyrat, fontet, pozicionimin, animacionet dhe layout-et e faqeve web, duke krijuar eksperienca vizuale tërheqëse.",
        "JavaScript": "JavaScript është gjuhë programimi që sjell interaktivitet në faqet web. Mund të përdoret për formulare, animacione, manipulim të DOM, lojëra, aplikacione single-page dhe shumë funksione dinamike.",
        "React Native": "React Native është framework për zhvillimin e aplikacioneve mobile cross-platform. Përdoret për të krijuar aplikacione native për Android dhe iOS duke përdorur JavaScript dhe React.",
        "PHP": "PHP është gjuhë server-side për zhvillimin e web-it dinamike. Mundëson krijimin e faqeve që përpunojnë të dhëna, menaxhojnë databaza dhe ndërveprojnë me përdoruesit në mënyrë të sigurt dhe efikase.",
        "Java": "Java është gjuhë e fuqishme për aplikacione enterprise, aplikacione Android dhe sisteme komplekse. Ofron stabilitet, siguri dhe performancë të lartë për software profesional.",
        "Python": "Python përdoret për web development, data analysis, AI, machine learning dhe shumë projekte të tjera. Karakterizohet nga sintaksa e thjeshtë dhe ekosistemi i madh i librarive.",
        "C++": "C++ përdoret për programe performante dhe software kompleks. Është ideale për aplikacione që kërkojnë përdorim intensiv të memorie dhe llogaritje të shpejta, si lojëra dhe sisteme operative.",
        "C#": "C# përdoret kryesisht për zhvillimin e aplikacioneve Windows, lojërave në Unity dhe aplikacione enterprise. Ofron integrim të lehtë me ekosistemin Microsoft.",
        "MySQL": "MySQL është sistem menaxhimi i bazave të dhënash relationale. Lejon ruajtjen, organizimin dhe manipulimin e të dhënave në mënyrë të strukturuar dhe të sigurt.",
        "Git": "Git është sistem versionimi i kodit. Lejon menaxhimin e ndryshimeve në projekte software, bashkëpunim midis developer-ëve dhe historikun e plotë të zhvillimit."
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
        "HTML": "HTML is the foundational language for structuring web pages. It organizes page elements such as headings, paragraphs, lists, tables, and media. Without HTML, a web page would have no meaningful structure.",
        "CSS": "CSS is used for styling and visually designing web elements. It allows control over colors, fonts, positioning, animations, and page layouts, creating visually engaging web experiences.",
        "JavaScript": "JavaScript is a programming language that adds interactivity to web pages. It can be used for forms, animations, DOM manipulation, games, single-page applications, and other dynamic functionalities.",
        "React Native": "React Native is a framework for cross-platform mobile application development. It allows building native apps for Android and iOS using JavaScript and React.",
        "PHP": "PHP is a server-side language for dynamic web development. It enables data processing, database management, and secure user interactions efficiently.",
        "Java": "Java is a powerful language used for enterprise applications, Android apps, and complex systems. It offers stability, security, and high performance for professional software.",
        "Python": "Python is used for web development, data analysis, AI, machine learning, and more. Known for its simple syntax and large library ecosystem.",
        "C++": "C++ is used for high-performance and complex software. Ideal for applications that require intensive memory usage and fast computations, such as games and operating systems.",
        "C#": "C# is mainly used for Windows applications, Unity games, and enterprise software. Provides smooth integration with the Microsoft ecosystem.",
        "MySQL": "MySQL is a relational database management system. It allows structured and secure storage, organization, and manipulation of data.",
        "Git": "Git is a version control system. It manages code changes, enables collaboration among developers, and keeps a complete development history."
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

  // RENDER FUNCTION
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

  // SKILL MODAL MODERN
  const modal = el("skillModal");
  const modalName = el("modalSkillName");
  const modalDesc = el("modalSkillDesc");
  const closeModal = el("closeModal");

  function attachSkillModal() {
  const spans = document.querySelectorAll(".skill-tags span");
  spans.forEach(span => {
    span.onclick = () => {
      // Marrja e përshkrimit sipas gjuhës aktuale
      const desc = data[lang].skillDescriptions[span.textContent];
      if(desc){
        modalName.textContent = span.textContent;
        modalDesc.textContent = desc;
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add("show"), 10); // për efekt smooth scale/fade
      }
    };
  });
}


  closeModal.onclick = () => {
    modal.classList.remove("show");
    setTimeout(() => modal.style.display = "none", 300);
  };

  window.onclick = (e) => {
    if(e.target === modal){
      modal.classList.remove("show");
      setTimeout(() => modal.style.display = "none", 300);
    }
  };

  // INITIAL RENDER
  render();
});
