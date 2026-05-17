// Philosophy page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Principle card animations
  const principles = document.querySelectorAll('.principle');
  principles.forEach((principle, index) => {
    principle.style.opacity = '0';
    principle.style.transform = 'translateY(30px)';
    principle.style.transition = `opacity 0.6s ease, transform 0.6s ease ${index * 0.1}s`;
  });

  // Animate principles on scroll
  const principleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  principles.forEach(principle => principleObserver.observe(principle));

  // Principle hover effects
  principles.forEach(principle => {
    principle.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 10px 30px rgba(184,150,90,0.2)';
    });
    principle.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });

  // Number animation on scroll
  const principleNumbers = document.querySelectorAll('.principle-num');
  principleNumbers.forEach(num => {
    num.style.opacity = '0.3';
    num.style.transform = 'scale(0.9)';
    num.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  principleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'scale(1)';
      }
    });
  }, { threshold: 0.1 });

  principleNumbers.forEach(num => principleObserver.observe(num));

  // Quote animation
  const philosophyQuote = document.querySelector('.philosophy-quote');
  if (philosophyQuote) {
    philosophyQuote.style.opacity = '0';
    philosophyQuote.style.transform = 'scale(0.95)';
    philosophyQuote.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    const quoteObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'scale(1)';
        }
      });
    }, { threshold: 0.1 });

    quoteObserver.observe(philosophyQuote);
  }

  // Principle text highlight on hover
  principles.forEach(principle => {
    const principleText = principle.querySelector('.principle-text');
    if (principleText) {
      principleText.addEventListener('mouseenter', function() {
        this.style.color = 'var(--off-white)';
      });
      principleText.addEventListener('mouseleave', function() {
        this.style.color = 'var(--dim)';
      });
    }
  });

  // Smooth scroll for navigation
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});