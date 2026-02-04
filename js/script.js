document.addEventListener("DOMContentLoaded", () => {

  function hideAllSections() {
    document.querySelectorAll("main section").forEach(section => {
      section.classList.remove("active");
    });
  }

  document.getElementById("btnHome").addEventListener("click", () => {
    hideAllSections();
    document.getElementById("home").classList.add("active");
  });

  document.getElementById("btnCV").addEventListener("click", () => {
    hideAllSections();
    document.getElementById("cv").classList.add("active");
  });

  document.getElementById("btnLetters").addEventListener("click", () => {
    hideAllSections();
    document.getElementById("letters").classList.add("active");
  });

  document.getElementById("btnCertifications").addEventListener("click", () => {
    hideAllSections();
    document.getElementById("certifications").classList.add("active");
  });

});

/* ================= MULTILINGUA HOME ================= */
const texts = [
  { welcome: "WELCOME 🪐", subtitle: "You are now visiting my digital portfolio" },
  { welcome: "BENVENUTO 🪐", subtitle: "Stai visitando il mio portfolio digitale" },
  { welcome: "BIENVENIDO 🪐", subtitle: "Estás visitando mi portafolio digital" },
  { welcome: "WILLKOMMEN 🪐", subtitle: "Du besuchst mein digitales Portfolio" },
  { welcome: "BIENVENUE 🪐", subtitle: "Vous visitez mon portfolio numérique" },
  { welcome: "BEM-VINDO 🪐", subtitle: "Você está visitando meu portfólio digital" }
];

let currentIndex = 0;
const welcomeEl = document.getElementById("welcome-text");
const subtitleEl = document.getElementById("subtitle-text");

setInterval(() => {
  welcomeEl.classList.add("fade-out");
  subtitleEl.classList.add("fade-out");

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    welcomeEl.textContent = texts[currentIndex].welcome;
    subtitleEl.textContent = texts[currentIndex].subtitle;

    welcomeEl.classList.remove("fade-out");
    subtitleEl.classList.remove("fade-out");
  }, 600);
}, 5000);
