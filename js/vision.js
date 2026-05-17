// Vision page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Timeline item animations
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(40px)';
    item.style.transition = `opacity 0.6s ease, transform 0.6s ease ${index * 0.1}s`;
  });

  // Animate timeline items on scroll
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  timelineItems.forEach(item => timelineObserver.observe(item));

  // Phase number animation
  const phaseNumbers = document.querySelectorAll('.phase-number');
  phaseNumbers.forEach(num => {
    num.style.opacity = '0.5';
    num.style.transform = 'scale(0.9)';
    num.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  phaseObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'scale(1)';
      }
    });
  }, { threshold: 0.1 });

  phaseNumbers.forEach(num => phaseObserver.observe(num));

  // Vision description animation
  const visionDescriptions = document.querySelectorAll('.vision-desc');
  visionDescriptions.forEach(desc => {
    desc.style.opacity = '0';
    desc.style.transform = 'translateY(20px)';
    desc.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  visionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  visionDescriptions.forEach(desc => visionObserver.observe(desc));

  // Timeline dot hover effect
  const timelineDots = document.querySelectorAll('.timeline-item::before');
  // Note: pseudo-elements can't be selected directly, so we'll use a workaround
  // Actually, we'll just add hover effect to the timeline items
  timelineItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const dot = this.querySelector('.phase-number');
      if (dot) {
        dot.style.color = 'var(--gold)';
        dot.style.transform = 'scale(1.2)';
      }
    });
    item.addEventListener('mouseleave', function() {
      const dot = this.querySelector('.phase-number');
      if (dot) {
        dot.style.color = 'var(--gold)';
        dot.style.transform = 'scale(1)';
      }
    });
  });

  // Vision quote animation
  const visionQuote = document.querySelector('.vision-section h2');
  if (visionQuote) {
    visionQuote.style.opacity = '0';
    visionQuote.style.transform = 'translateY(-20px)';
    visionQuote.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    const quoteObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    quoteObserver.observe(visionQuote);
  }

  // Smooth scroll to vision section
  const visionSection = document.querySelector('.vision-section');
  const scrollBtns = document.querySelectorAll('a[href="#vision"]');
  scrollBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      if (visionSection) {
        visionSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });
});