// ═══════════════════════════════════════════
// KAVARI POLO — MAIN JAVASCRIPT
// Shared functionality across all pages
// ═══════════════════════════════════════════

(function() {
  'use strict';

  // ── Navbar Scroll Effect ────────────────
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const scrollHandler = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', scrollHandler);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ── Progress Bar ────────────────────────
  const progress = document.getElementById('progress');
  if (progress) {
    window.addEventListener('scroll', () => {
      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      progress.style.width = scrolled + '%';
    });
  }

  // ── Mobile Menu ─────────────────────────
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.createElement('div');
  navOverlay.className = 'nav-overlay';
  if (mobileMenuBtn && navLinks) {
    document.body.appendChild(navOverlay);

    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('open');
      navOverlay.classList.toggle('show');
    });

    navOverlay.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      navLinks.classList.remove('open');
      navOverlay.classList.remove('show');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('open');
        navOverlay.classList.remove('show');
      });
    });
  }

  // ── Reveal on Scroll ────────────────────
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
  }

  // ── Image Lazy Loading ─────────────────
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }

})();