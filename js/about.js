// About page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Founder profile image hover effect
  const founderImg = document.querySelector('.founder-profile img');
  if (founderImg) {
    founderImg.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.filter = 'brightness(1.1) saturate(1.1)';
    });
    founderImg.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.filter = 'brightness(1) saturate(1)';
    });
  }

  // Value items animation on scroll
  const valueItems = document.querySelectorAll('.value-item');
  const valueObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  valueItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    valueObserver.observe(item);
  });

  // Quote animation
  const quote = document.querySelector('.quote');
  if (quote) {
    quote.style.opacity = '0';
    quote.style.transform = 'translateX(-20px)';
    quote.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    const quoteObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }
      });
    }, { threshold: 0.1 });

    quoteObserver.observe(quote);
  }

  // Bio links hover effect
  const bioLinks = document.querySelectorAll('.bio-links a');
  bioLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.backgroundColor = 'var(--gold)';
      this.style.color = 'var(--ink)';
    });
    link.addEventListener('mouseleave', function() {
      this.style.backgroundColor = 'transparent';
      this.style.color = 'var(--gold)';
    });
  });

  // Smooth scroll to values section
  const valuesSection = document.querySelector('.values-grid');
  const scrollBtns = document.querySelectorAll('a[href="#values"]');
  scrollBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      if (valuesSection) {
        valuesSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
});