// Contact page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Form validation and submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Real-time validation
    const inputs = [nameInput, emailInput, messageInput];
    inputs.forEach(input => {
      input.addEventListener('input', function() {
        if (this.value.trim() === '') {
          this.style.borderColor = 'var(--dim)';
        } else {
          this.style.borderColor = 'var(--gold)';
        }
      });
    });

    // Email validation
    emailInput.addEventListener('input', function() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (this.value && !emailRegex.test(this.value)) {
        this.style.borderColor = 'var(--dim)';
        this.style.color = '#ff6b6b';
      } else {
        this.style.borderColor = 'var(--gold)';
        this.style.color = 'var(--off-white)';
      }
    });

    // Form submission
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Show loading state
      const submitBtn = this.querySelector('.btn.primary');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      try {
        const formData = new FormData(this);
        // Using Formspree as in the original code
        const response = await fetch('https://formspree.io/f/mqegyvey', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Success message
          const statusEl = document.getElementById('form-status');
          if (statusEl) {
            statusEl.textContent = 'Message sent successfully! We\'ll get back to you soon.';
            statusEl.style.color = 'var(--gold)';
          }
          this.reset();
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
          }, 2000);
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        const statusEl = document.getElementById('form-status');
        if (statusEl) {
          statusEl.textContent = 'Something went wrong. Please try again later.';
          statusEl.style.color = '#ff6b6b';
        }
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  // Contact info animation
  const infoBlocks = document.querySelectorAll('.info-block');
  infoBlocks.forEach((block, index) => {
    block.style.opacity = '0';
    block.style.transform = 'translateY(20px)';
    block.style.transition = `opacity 0.6s ease, transform 0.6s ease ${index * 0.1}s`;
  });

  const infoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  infoBlocks.forEach(block => infoObserver.observe(block));

  // Map initialization (if API key is provided)
  if (typeof google !== 'undefined' && google.maps) {
    initMap();
  }

  // Form field focus effects
  const formFields = document.querySelectorAll('.form-group input, .form-group textarea');
  formFields.forEach(field => {
    field.addEventListener('focus', function() {
      this.parentElement.style.transform = 'scale(1.01)';
    });
    field.addEventListener('blur', function() {
      this.parentElement.style.transform = 'scale(1)';
    });
  });

  // Contact section smooth scroll
  const contactSection = document.querySelector('.contact-section');
  const navLinks = document.querySelectorAll('a[href="#contact"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});