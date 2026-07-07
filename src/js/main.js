// Main JavaScript - Vanilla JS (No jQuery!)
// ============================================

// Constants
const SCROLL_THRESHOLD = 60;
const SCROLL_TOP_THRESHOLD = 100;

// ==================== Header Scroll Effect ====================
function initHeaderScroll() {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;

    if (window.scrollY >= SCROLL_THRESHOLD) {
      header.classList.add('fixed-header');
    } else {
      header.classList.remove('fixed-header');
    }
  });
}

// ==================== Scroll to Top Button ====================
function initScrollToTop() {
  const btn = document.getElementById('scrollToTopBtn');
  if (!btn) return;

  // Show/hide button on scroll
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > SCROLL_TOP_THRESHOLD ||
        document.body.scrollTop > SCROLL_TOP_THRESHOLD) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  });

  // Scroll to top on click
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==================== Owl Carousel ====================
function initCarousel() {
  const carouselElement = document.querySelector('.featured-projects-slider .owl-carousel');
  if (!carouselElement || typeof jQuery === 'undefined') return;

  jQuery(carouselElement).owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
      1200: { items: 4 }
    }
  });
}

// ==================== AOS (Animate on Scroll) ====================
function initAOS() {
  if (typeof AOS === 'undefined') return;

  AOS.init({
    once: true,
    duration: 1000
  });
}

// ==================== Counter Animation ====================
function initCounters() {
  const counters = document.querySelectorAll('.count');

  counters.forEach(counter => {
    const target = parseInt(counter.textContent);
    let current = 0;
    const increment = target / 100;

    const updateCount = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target;
      }
    };

    updateCount();
  });
}

// ==================== Toggle Tools ====================
function initToggleTools() {
  const toggleButtons = document.querySelectorAll('.toggle-tools');

  toggleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();

      const targetId = button.getAttribute('data-target');
      const toolsContainer = document.getElementById(targetId);
      const skillCard = button.closest('.skill-card');

      if (!toolsContainer) return;

      // Animate skill card
      if (skillCard) {
        skillCard.style.transform = 'scale(0.98)';
        setTimeout(() => {
          skillCard.style.transform = 'scale(1.02)';
          setTimeout(() => {
            skillCard.style.transform = 'scale(1)';
          }, 100);
        }, 50);
      }

      // Toggle tools
      const isHidden = toolsContainer.classList.contains('d-none');

      if (isHidden) {
        toolsContainer.classList.remove('d-none');
        button.querySelector('.show-text')?.classList.add('d-none');
        button.querySelector('.hide-text')?.classList.remove('d-none');
      } else {
        toolsContainer.classList.add('d-none');
        button.querySelector('.show-text')?.classList.remove('d-none');
        button.querySelector('.hide-text')?.classList.add('d-none');
      }
    });
  });
}

// ==================== Initialization ====================
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initScrollToTop();
  initCarousel();
  initAOS();
  initCounters();
  initToggleTools();

  console.log('✅ Joji Portfolio initialized successfully');
});
