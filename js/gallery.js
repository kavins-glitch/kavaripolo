// Gallery page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Gallery item hover effects
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const img = this.querySelector('img');
      const caption = this.querySelector('figcaption');
      if (img) {
        img.style.transform = 'scale(1.07)';
        img.style.filter = 'brightness(0.6) saturate(0.8)';
      }
      if (caption) {
        caption.style.opacity = '1';
        caption.style.transform = 'translateY(0)';
      }
    });
    item.addEventListener('mouseleave', function() {
      const img = this.querySelector('img');
      const caption = this.querySelector('figcaption');
      if (img) {
        img.style.transform = 'scale(1)';
        img.style.filter = 'brightness(0.75) saturate(0.9)';
      }
      if (caption) {
        caption.style.opacity = '0';
        caption.style.transform = 'translateY(6px)';
      }
    });
  });

  // Lightbox functionality (simple version)
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').src;
      const captionText = this.querySelector('figcaption') ? this.querySelector('figcaption').textContent : '';

      // Create lightbox overlay
      const lightboxOverlay = document.createElement('div');
      lightboxOverlay.className = 'lightbox-overlay';
      lightboxOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
      `;

      const lightboxContent = document.createElement('div');
      lightboxContent.style.cssText = `
        max-width: 90%;
        max-height: 80vh;
        text-align: center;
        color: white;
      `;

      const lightboxImg = document.createElement('img');
      lightboxImg.src = imgSrc;
      lightboxImg.style.cssText = `
        max-width: 100%;
        max-height: 70vh;
        border-radius: 4px;
        box-shadow: 0 0 20px rgba(255,255,255,0.3);
      `;

      const lightboxCaption = document.createElement('p');
      lightboxCaption.textContent = captionText;
      lightboxCaption.style.cssText = `
        margin-top: 16px;
        font-size: 16px;
        opacity: 0.8;
      `;

      lightboxContent.appendChild(lightboxImg);
      if (captionText) lightboxContent.appendChild(lightboxCaption);
      lightboxOverlay.appendChild(lightboxContent);
      document.body.appendChild(lightboxOverlay);

      // Show lightbox
      requestAnimationFrame(() => {
        lightboxOverlay.style.opacity = '1';
        lightboxOverlay.style.pointerEvents = 'all';
      });

      // Close on click
      lightboxOverlay.addEventListener('click', function(e) {
        if (e.target === lightboxOverlay) {
          lightboxOverlay.style.opacity = '0';
          lightboxOverlay.style.pointerEvents = 'none';
          setTimeout(() => {
            document.body.removeChild(lightboxOverlay);
          }, 300);
        }
      });

      // Close on ESC
      const closeOnEsc = function(e) {
        if (e.key === 'Escape') {
          lightboxOverlay.style.opacity = '0';
          lightboxOverlay.style.pointerEvents = 'none';
          setTimeout(() => {
            document.body.removeChild(lightboxOverlay);
          }, 300);
          document.removeEventListener('keydown', closeOnEsc);
        }
      };
      document.addEventListener('keydown', closeOnEsc);
    });
  });

  // Masonry grid layout for gallery
  const galleryGrids = document.querySelectorAll('.gallery-grid');
  galleryGrids.forEach(grid => {
    // Simple masonry-like layout using CSS grid is already handled in CSS
    // But we can add some JavaScript for better control if needed
    const items = Array.from(grid.children);
    if (items.length > 0) {
      // Just ensure items are visible with animation
      items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease, transform 0.6s ease ${index * 0.05}s`;
      });

      const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1 });

      items.forEach(item => galleryObserver.observe(item));
    }
  });

  // Gallery section title animation
  const galleryTitle = document.querySelector('.section-title');
  if (galleryTitle) {
    galleryTitle.style.opacity = '0';
    galleryTitle.style.transform = 'translateY(20px)';
    galleryTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    titleObserver.observe(galleryTitle);
  }

  // CTA button hover effect
  const ctaButton = document.querySelector('.button-gradient');
  if (ctaButton) {
    ctaButton.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.boxShadow = '0 8px 25px rgba(184,150,90,0.4)';
    });
    ctaButton.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = 'none';
    });
  }
});