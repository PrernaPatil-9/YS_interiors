// Contact page specific functionality

document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.includes('contact.html')) {
    initContactPage();
  }
});

function initContactPage() {
  animateContactCards();
  initContactForm();
}

function animateContactCards() {
  const cards = document.querySelectorAll('.bg-light.p-8.rounded-2xl');
  
  cards.forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: 0.2 * index,
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });
}

function initContactForm() {
  const form = document.querySelector('form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show success message
      const button = this.querySelector('button[type="submit"]');
      const originalText = button.innerHTML;
      
      button.innerHTML = '<i class="fas fa-check mr-2"></i> Message Sent!';
      button.style.background = '#22c55e';
      
      setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
        this.reset();
      }, 3000);
    });
  }
}