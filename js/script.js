document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll("nav button");
  const sections = document.querySelectorAll("main section");

  function hideAllSections() {
    sections.forEach(section => section.classList.remove("active"));
    buttons.forEach(btn => btn.classList.remove("active"));
  }

  function activate(btnId, sectionId) {
    hideAllSections();
    document.getElementById(sectionId).classList.add("active");
    document.getElementById(btnId).classList.add("active");
  }

  document.getElementById("btnHome").addEventListener("click", () => {
    activate("btnHome", "home");
  });

  document.getElementById("btnCV").addEventListener("click", () => {
    activate("btnCV", "cv");
  });

  document.getElementById("btnLetters").addEventListener("click", () => {
    activate("btnLetters", "letters");
  });

  document.getElementById("btnCertifications").addEventListener("click", () => {
    activate("btnCertifications", "certifications");
  });

  // Stato iniziale
  document.getElementById("btnHome").classList.add("active");
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

const track = document.getElementById("welcomeTrack");

const words = ["WELCOME", "BENVENUTO"];

function createContent() {
  const content = document.createElement("div");
  content.classList.add("welcome-content");

  for (let i = 0; i < 15; i++) {
    const text = document.createElement("span");
    text.textContent = words[i % words.length];

    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.textContent = "•";

    content.appendChild(text);
    content.appendChild(dot);
  }

  return content;
}

// due copie identiche per il loop infinito
track.appendChild(createContent());
track.appendChild(createContent());
