// ==========================================
// 1. Dynamic Typewriter Effect
// ==========================================
const roles = [
  "Cloud & DevOps Engineer",
  "AWS & Azure Architect",
  "Kubernetes & Platform Specialist",
  "DevSecOps & SRE Engineer",
  "Agentic AI Automation Builder"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Targets the subtitle regardless of whether it is h2 or h3
const typingElement = document.querySelector(".hero h3") || document.querySelector(".hero h2");

// Ensure cursor element exists
let cursorSpan = document.querySelector(".typing-cursor");
if (!cursorSpan && typingElement) {
  cursorSpan = document.createElement("span");
  cursorSpan.className = "typing-cursor";
  cursorSpan.textContent = "|";
  cursorSpan.style.cssText = "color: #38bdf8; font-weight: 300; margin-left: 3px; animation: blink 0.8s infinite;";
  typingElement.parentNode.insertBefore(cursorSpan, typingElement.nextSibling);
}

function typeEffect() {
  if (!typingElement) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 45 : 95;

  if (!isDeleting && charIndex === currentRole.length) {
    delay = 1800; // Pause after word completes
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 350; // Pause before typing next word
  }

  setTimeout(typeEffect, delay);
}

// ==========================================
// 2. High-Performance Scroll Reveal (IntersectionObserver)
// ==========================================
const observerOptions = {
  root: null,
  threshold: 0.12,
  rootMargin: "0px 0px -40px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section-visible");
      observer.unobserve(entry.target); // Reveal only once for performance
    }
  });
}, observerOptions);

// ==========================================
// 3. Smooth Navigation & Initialization
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Start typewriter
  if (typingElement) {
    typingElement.textContent = "";
    typeEffect();
  }

  // Set up scroll reveal on all sections except hero
  const sections = document.querySelectorAll("section:not(.hero)");
  sections.forEach(section => {
    section.classList.add("section-hidden");
    revealObserver.observe(section);
  });

  // Smooth scroll for nav anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});
