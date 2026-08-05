// Services page specific functionality

document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.includes('services.html')) {
    initServicesPage();
  }
});

function initServicesPage() {
  animateServiceCards();
}

function animateServiceCards() {
  const cards = document.querySelectorAll('.service-card');
  
  cards.forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: 0.15 * index,
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });
}