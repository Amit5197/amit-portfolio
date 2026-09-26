// ==========================================
// 1. Dynamic Typewriter Effect
// ==========================================
const roles = [
  "Cloud & DevOps Architecture",
  "AWS & Azure Multi-Cloud",
  "Kubernetes Platform Engineering",
  "DevSecOps & CI/CD Pipelines",
  "Agentic AI Automation Workflows",
  "Site Reliability Engineering (SRE)"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const typewriterElement = document.getElementById("typewriter");
  if (!typewriterElement) return;

  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 40 : 85;

  if (!isDeleting && charIndex === currentRole.length) {
    delay = 1800; // Pause when title finishes typing
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 350; // Pause before typing the next title
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
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// ==========================================
// 3. Document Lifecycle Initialization
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Start typing
  typeEffect();

  // Initialize scroll reveals on content sections
  const sections = document.querySelectorAll("section:not(.hero)");
  sections.forEach(section => {
    section.classList.add("section-hidden");
    revealObserver.observe(section);
  });

  // Smooth scroll behavior for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
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
