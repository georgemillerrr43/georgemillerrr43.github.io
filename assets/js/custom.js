$(function () {

    // Header Scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 60) {
            $("header").addClass("fixed-header");
        } else {
            $("header").removeClass("fixed-header");
        }
    });


    // Featured Owl Carousel
    $('.featured-projects-slider .owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })


    // Count
    $('.count').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 1000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});


    // ScrollToTop
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const btn = document.getElementById("scrollToTopBtn");
    btn.addEventListener("click", scrollToTop);

    window.onscroll = function () {
        const btn = document.getElementById("scrollToTopBtn");
        if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    };


    // Aos
	AOS.init({
		once: true,
	});

});

// skills-toggle-bounce.js
document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.toggle-tools');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      
      const targetId = this.getAttribute('data-target');
      const toolsContainer = document.getElementById(targetId);
      const skillCard = this.closest('.skill-card');
      
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
        this.querySelector('.show-text').classList.add('d-none');
        this.querySelector('.hide-text').classList.remove('d-none');
      } else {
        toolsContainer.classList.add('d-none');
        this.querySelector('.show-text').classList.remove('d-none');
        this.querySelector('.hide-text').classList.add('d-none');
      }
    });
  });
});

// WhatsApp Integration for Services
document.addEventListener('DOMContentLoaded', function() {
  const whatsappNumber = '6283188878936';
  
  function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(angka);
  }

  function sendWhatsAppMessage(serviceName, servicePrice) {
    const formattedPrice = formatRupiah(servicePrice);
    const message = `Halo kak, saya tertarik dengan layanan *${serviceName}* (${formattedPrice}).\n\nBisa saya tanya-tanya dulu tentang layanan ini?\n\n*Detail yang ingin saya ketahui:*\n1. Waktu pengerjaan\n2. Fitur yang termasuk\n3. Metode pembayaran\n4. Garansi layanan\n\nTerima kasih!`;
    const encodedMessage = encodeURIComponent(message);   
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;   
    window.open(whatsappUrl, '_blank'); 
    console.log(`Mengirim pesan untuk layanan: ${serviceName}`);
    console.log(`Harga: ${formattedPrice}`);
    console.log(`URL WhatsApp: ${whatsappUrl}`);
  }
  
  const serviceButtons = document.querySelectorAll('.service-btn');
  
  serviceButtons.forEach(button => {
    button.addEventListener('click', function() {
      const serviceName = this.getAttribute('data-service');
      const servicePrice = parseInt(this.getAttribute('data-price'));
      
      const confirmOrder = confirm(`Anda akan memesan layanan:\n\n${serviceName}\n${formatRupiah(servicePrice)}\n\nLanjutkan ke WhatsApp?`);
      
      if (confirmOrder) {
        sendWhatsAppMessage(serviceName, servicePrice);
      }
    });
  });
  
  function animateOnScroll() {
    const cards = document.querySelectorAll('#services .card');
    
    cards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (cardPosition < screenPosition) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Set initial state for animation
  const cards = document.querySelectorAll('#services .card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Trigger animation on load and scroll
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
  
  function trackServiceClick(serviceName) {
    const clicks = JSON.parse(localStorage.getItem('serviceClicks') || '{}');
    clicks[serviceName] = (clicks[serviceName] || 0) + 1;
    localStorage.setItem('serviceClicks', JSON.stringify(clicks));
    
    console.log(`Service clicked: ${serviceName}, Total clicks: ${clicks[serviceName]}`);
  }
  
  serviceButtons.forEach(button => {
    const originalClickListener = button.onclick;
    
    button.addEventListener('click', function() {
      const serviceName = this.getAttribute('data-service');
      trackServiceClick(serviceName);
    });
  });
});