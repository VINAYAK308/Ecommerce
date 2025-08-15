function orderNow(product) {
    const modal = document.createElement('div');
    modal.className = 'order-modal';
    modal.innerHTML = `
        <div class="order-modal-content">
    <span class="close-btn" onclick="this.parentElement.parentElement.remove()">&times;</span>
    <h2>ऑर्डर करा: ${product}</h2>
    <p>ऑर्डर करण्यासाठी खालील नंबरवर कॉल करा:</p>
    <p class="contact-numbers">
  <a href="tel:9028989533">9028989533</a> / <a href="tel:9356648269">9356648269</a>
</p>

    <p>किंवा WhatsApp वर ऑर्डर करा:</p>
    <a class="whatsapp-btn1" href="https://wa.me/919028989533" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="whatsapp-icon">
        WhatsApp वर ऑर्डर करा
    </a>
    <p class="order-note">सोमवार ते गुरुवार ऑर्डर स्वीकारली जाईल. डिलिव्हरी वीकएंड ला मिळेल.</p>
</div>

    `;
    document.body.appendChild(modal);
}

// Modal styles
const style = document.createElement('style');
style.innerHTML = `
.order-modal {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
.order-modal-content {
    background: #fff;
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.18);
    text-align: center;
    min-width: 270px;
    max-width: 90vw;
    position: relative;
    font-family: 'Segoe UI', sans-serif;
}
.close-btn {
    position: absolute;
    top: 10px;
    right: 18px;
    font-size: 2rem;
    color: #888;
    cursor: pointer;
}
.close-btn:hover {
    color: #333;
}
.whatsapp-btn1 {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background-color: #25D366;
    color: white;
    padding: 10px 16px;
    margin-top: 10px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.3s ease;
}
.whatsapp-btn1:hover {
    background-color: #1DA851;
}
.whatsapp-icon {
    width: 20px;
    height: 20px;
}
.order-note {
    margin-top: 1rem;
    font-size: 0.95rem;
    color: #555;
}
.contact-numbers {
   background-color: #f0f8ff; /* light blue background */
    padding: 10px 15px;
    border-radius: 8px;
    display: inline-block;
    font-size: 1rem;
    font-weight: 500;
    margin: 0.8rem auto;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.contact-numbers a {
    color: #007BFF;
    text-decoration: none;
    margin: 0 6px;
    transition: color 0.3s ease;
}

.contact-numbers a:hover {
    color: #0056b3;
    text-decoration: underline;
}


`;
document.head.appendChild(style);

// Responsive Navbar
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
        const isOpen = navMenu.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                navMenu.classList.remove('open');
                navToggle.setAttribute('aria-expanded', false);
            }
        });
    });
} 

  const swiper = new Swiper(".testimonial-slider", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 20,
  });


