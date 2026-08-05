// Home page specific functionality

document.addEventListener('DOMContentLoaded', function() {
  // Only run on home page
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
    initHomePage();
  }
});

function initHomePage() {
  initHeroAnimations();
  initCounters();
  initTestimonialSlider();
}

function initHeroAnimations() {
  // Hero image zoom
  const heroImg = document.getElementById('heroImg');
  if (heroImg) {
    gsap.from(heroImg, {
      scale: 1.1,
      duration: 1.8,
      ease: 'power2.out'
    });
  }
  
  // Hero title reveal
  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) {
    gsap.from(heroTitle, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: 'power3.out'
    });
  }
}

function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    
    gsap.from(counter, {
      textContent: 0,
      duration: 2.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: counter,
        start: 'top 90%',
        toggleActions: 'play none none none'
      },
      onUpdate: function() {
        const current = Math.floor(this.targets()[0].textContent);
        counter.textContent = current;
      },
      onComplete: function() {
        counter.textContent = target;
      }
    });
  });
}

function initTestimonialSlider() {
  // Simple testimonial animation
  const testimonials = document.querySelectorAll('.bg-light.p-8.rounded-2xl');
  
  testimonials.forEach((testimonial, index) => {
    gsap.from(testimonial, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: 0.2 * index,
      scrollTrigger: {
        trigger: testimonial,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });
}