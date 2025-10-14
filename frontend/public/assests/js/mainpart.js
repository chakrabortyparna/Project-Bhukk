/* ===========================
   BHUKK MAIN JAVASCRIPT
   =========================== */

/* ---------- 1. AGE VERIFICATION (Optional, uncomment if needed) ---------- */
// const ageGate = document.querySelector('.age-gate');
// const enterBtn = document.getElementById('enter-btn');
// const denyBtn = document.getElementById('deny-btn');

// if (ageGate) {
//   ageGate.style.display = 'flex';

//   enterBtn.addEventListener('click', () => {
//     ageGate.style.display = 'none';
//   });

//   denyBtn.addEventListener('click', () => {
//     alert('You must be 21+ to access this site.');
//   });
// }

/* ---------- 2. STICKY NAVBAR SCROLL EFFECT ---------- */
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(20, 20, 20, 0.8)';
        nav.style.backdropFilter = 'blur(15px)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.15)';
        nav.style.backdropFilter = 'blur(10px)';
    }
});

/* ---------- 3. SMOOTH SCROLL ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

/* ---------- 4. LOAD MORE LIQUOR CARDS ---------- */
const loadMoreBtn = document.getElementById('loadMoreBtn');
const stockGrid = document.getElementById('stockGrid');

if (loadMoreBtn) {
    const extraCards = [
        { name: "Bacardi", price: "₹1200", img: "assets/images/bacardi.jpg" },
        { name: "Chivas Regal", price: "₹3500", img: "assets/images/chivas.jpg" },
        { name: "Absolut Vodka", price: "₹2200", img: "assets/images/absolut.jpg" },
        { name: "Beefeater Gin", price: "₹2800", img: "assets/images/beefeater.jpg" },
        { name: "Jameson", price: "₹2600", img: "assets/images/jameson.jpg" },
    ];

    loadMoreBtn.addEventListener('click', () => {
        extraCards.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('stock-card');
            div.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
      `;
            stockGrid.appendChild(div);
        });
        loadMoreBtn.style.display = 'none'; // hide button after loading
    });
}

/* ---------- 5. PARTNER FORM SUBMISSION ---------- */
const partnerForm = document.getElementById('partner-registration');
const successMsg = document.getElementById('form-success');

if (partnerForm) {
    partnerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        successMsg.textContent = '✅ Thank you! We’ll contact you soon.';
        partnerForm.reset();
        successMsg.style.color = 'green';
        successMsg.style.marginTop = '10px';
    });
}

/* ---------- 6. SMALL ANIMATIONS ---------- */
// Fade-in effect for sections when scrolling
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(sec => {
        const secTop = sec.getBoundingClientRect().top;
        if (secTop < triggerBottom) {
            sec.style.opacity = 1;
            sec.style.transform = 'translateY(0)';
            sec.style.transition = 'all 0.6s ease-out';
        }
    });
});