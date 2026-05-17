// Home page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Hero scroll indicator animation
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    let scrollY = 0;
    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
      const scrollLine = scrollIndicator.querySelector('.scroll-line');
      if (scrollLine) {
        scrollLine.style.opacity = 1 - (scrollY / window.innerHeight);
      }
    });
  }

  // Parallax effect for hero background
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    });
  }

  // Preview section hover effects
  const previewImages = document.querySelectorAll('.preview-grid img');
  previewImages.forEach(img => {
    img.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
    });
    img.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Smooth scroll to explore section
  const exploreLinks = document.querySelectorAll('a[href="#explore"]');
  exploreLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const exploreSection = document.getElementById('explore');
      if (exploreSection) {
        exploreSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Add entrance animation to preview sections on load
  const previewSections = document.querySelectorAll('.preview-section');
  const previewObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  previewSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    previewObserver.observe(section);
  });
});