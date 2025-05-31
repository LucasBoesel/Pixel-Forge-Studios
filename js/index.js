const translations = {
  pt: {
    title: "PixelForge Studios",
    menu_inicio: "Início",
    menu_jogos: "Jogos",
    menu_trailer: "Trailer",
    menu_comunidade: "Comunidade",
    menu_contato: "Contato",
    menu_sobre: "Sobre Nós",
    bem_vindo: "Bem-vindo à PixelForge Studios",
    slogan: "Forjando mundos. Moldando histórias.",
    jogos_destaque: "Jogos em Destaque",
    descricao_jogo1: "Explore um mundo sombrio e mágico.",
    descricao_jogo2: "Hackers, neon e vingança cibernética.",
    descricao_jogo3: "Estratégia | Domine a galáxia com sua frota.",
    trailer_destaque: "Trailer de Lançamento Galactic Siege",
    depoimentos: "Depoimentos da Comunidade",
    depoimento1: "\"O melhor RPG indie que já joguei!\" — @gamerbruno",
    depoimento2: "\"Cyber Wraith é pura adrenalina. Mal posso esperar pela continuação!\" — @cyberqueen",
    depoimento3: "\"PixelForge acerta de novo! Incrível qualidade para um estúdio pequeno.\" — @spacefanatic",
    fale_conosco: "Fale Conosco",
    input_nome: "Seu nome",
    input_email: "Seu e-mail",
    input_mensagem: "Sua mensagem...",
    enviar: "Enviar",
    direitos: "Todos os direitos reservados.",
    sobre_nos: "Sobre Nós",
    descricao_sobre: "Na PixelForge Studios, somos apaixonados por criar experiências imersivas que combinam arte pixelada com narrativas envolventes. Fundada em 2015, nossa missão é forjar mundos únicos e inesquecíveis para jogadores ao redor do mundo."
  },
  en: {
    title: "PixelForge Studios",
    menu_inicio: "Home",
    menu_jogos: "Games",
    menu_trailer: "Trailer",
    menu_comunidade: "Community",
    menu_contato: "Contact",
    menu_sobre: "About Us",
    bem_vindo: "Welcome to PixelForge Studios",
    slogan: "Forging worlds. Shaping stories.",
    jogos_destaque: "Featured Games",
    descricao_jogo1: "Explore a dark and magical world.",
    descricao_jogo2: "Hackers, neon, and cyber revenge.",
    descricao_jogo3: "Strategy | Conquer the galaxy with your fleet.",
    trailer_destaque: "Galactic Siege Launch Trailer",
    depoimentos: "Community Testimonials",
    depoimento1: "\"The best indie RPG I've ever played!\" — @gamerbruno",
    depoimento2: "\"Cyber Wraith is pure adrenaline. Can't wait for the sequel!\" — @cyberqueen",
    depoimento3: "\"PixelForge nails it again! Incredible quality for a small studio.\" — @spacefanatic",
    fale_conosco: "Contact Us",
    input_nome: "Your name",
    input_email: "Your email",
    input_mensagem: "Your message...",
    enviar: "Send",
    direitos: "All rights reserved.",
    sobre_nos: "About Us",
    descricao_sobre: "At PixelForge Studios, we're passionate about creating immersive experiences that blend pixel art with captivating storytelling. Founded in 2015, our mission is to forge unique and unforgettable worlds for players around the globe."
  }
};

function setLanguage(lang) {
  const supportedLangs = ["pt", "en"];
  if (!supportedLangs.includes(lang)) lang = "pt";

  document.title = translations[lang].title;

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
  placeholders.forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  localStorage.setItem("language", lang);
} 

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    form.addEventListener("submit", function (e) {
      let valid = true;
      let errors = [];

      if (nameInput.value.trim().length < 3) {
        valid = false;
        errors.push("Por favor, insira um nome válido.");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        valid = false;
        errors.push("Por favor, insira um e-mail válido.");
      }

      // Validação da mensagem
      if (messageInput.value.trim().length < 10) {
        valid = false;
        errors.push("A mensagem deve ter pelo menos 10 caracteres.");
      }

      if (!valid) {
        e.preventDefault(); 
        alert(errors.join("\n"));
      }
    });
  });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.1
});

fadeIns.forEach(section => {
  observer.observe(section);
});


function createSpark() {
  const sparksContainer = document.querySelector('.sparks');
  if (!sparksContainer) return; 

  const spark = document.createElement('div');
  spark.classList.add('spark');

  const angle = Math.random() * 2 * Math.PI;
  const distance = Math.random() * 50 + 20; 

  spark.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
  spark.style.setProperty('--y', `${Math.sin(angle) * distance}px`);

  sparksContainer.appendChild(spark);

  setTimeout(() => {
    spark.remove();
  }, 1000);
}

setInterval(createSpark, 300);

window.onload = function () {
  const savedLang = localStorage.getItem("language") || navigator.language.slice(0, 2);
  const lang = ["pt", "en"].includes(savedLang) ? savedLang : "pt";
  setLanguage(lang);
};