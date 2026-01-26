document.addEventListener("DOMContentLoaded", () => {

  /* ================= NAV / SECTIONS ================= */
  function hideAllSections() {
    document.querySelectorAll("main section").forEach(section => {
      section.classList.remove("active");
    });
  }

  document.getElementById("btnHome")?.addEventListener("click", () => {
    hideAllSections();
    document.getElementById("home").classList.add("active");
    stopEmojiRain();
  });

  document.getElementById("btnCV")?.addEventListener("click", () => {
    hideAllSections();
    document.getElementById("cv").classList.add("active");
    stopEmojiRain();
  });

  document.getElementById("btnLetters")?.addEventListener("click", () => {
    hideAllSections();
    document.getElementById("letters").classList.add("active");
    stopEmojiRain();
  });

  document.getElementById("btnCertifications")?.addEventListener("click", () => {
    hideAllSections();
    document.getElementById("certifications").classList.add("active");
    stopEmojiRain();
  });

  document.getElementById("btnAbout")?.addEventListener("click", () => {
    hideAllSections();
    document.getElementById("about").classList.add("active");
    startEmojiRain();
  });

});


/* ================= EMOJI RAIN ================= */
const emojiContainer = document.getElementById("emoji-rain");
const hobbyEmojis = ["🏉","🥋","🏋️‍♂️","🏂","💻","🍕","🏔️","🇬🇧","🇮🇹","✈️","🥗","☕️","🎵"];

let emojiInterval = null;

function startEmojiRain() {
  if (emojiInterval) return;

  emojiInterval = setInterval(() => {
    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.textContent = hobbyEmojis[Math.floor(Math.random() * hobbyEmojis.length)];

    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.fontSize = 26 + Math.random() * 14 + "px";
    emoji.style.animationDuration = 3 + Math.random() * 4 + "s";

    emojiContainer.appendChild(emoji);

    setTimeout(() => emoji.remove(), 7000);
  }, 280);
}

function stopEmojiRain() {
  clearInterval(emojiInterval);
  emojiInterval = null;
  emojiContainer.innerHTML = "";
}


/* ================= MULTILINGUA HOME ================= */
const texts = [
  { welcome: "WELCOME 🪐", subtitle: "You are now visiting my digital portfolio" },
  { welcome: "BENVENUTO 🪐", subtitle: "Stai visitando il mio portfolio digitale" },
  { welcome: "BIENVENIDO 🪐", subtitle: "Estás visitando mi portafolio digital" },
  { welcome: "WILLKOMMEN 🪐", subtitle: "Du besuchst mein digitales Portfolio" },
  { welcome: "BIENVENUE 🪐", subtitle: "Vous visitez mon portfolio numérique" },
  { welcome: "BEM-VINDO 🪐", subtitle: "Você está visitando meu portfólio digital" },
  { welcome: "欢迎 🪐", subtitle: "你正在访问我的数字作品集" },
  { welcome: "ДОБРО ПОЖАЛОВАТЬ 🪐", subtitle: "Вы просматриваете мое цифровое портфолио" },
  { welcome: "مرحباً 🪐", subtitle: "أنت تزور معرض أعمالي الرقمي" },
  { welcome: "ようこそ 🪐", subtitle: "私のデジタルポートフォリオへようこそ" },
  { welcome: "स्वागत है 🪐", subtitle: "आप मेरा डिजिटल पोर्टफोलियो देख रहे हैं" }
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
