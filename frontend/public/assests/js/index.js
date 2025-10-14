/* ==========================================
   animation.js
   Handles smooth scroll, fade-ins, and motion
   ========================================== */

/* ========= SMOOTH SCROLL for internal links ========= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.length > 1) {
            e.preventDefault();
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                window.scrollTo({
                    top: targetEl.offsetTop - 70, // offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        }
    });
});

/* ========= FADE-IN on scroll (using Intersection Observer) ========= */
const fadeElements = document.querySelectorAll(
    '.fade-in, .how-image img, .stock-card, .app-mockup-img, .partner-hero-content, .hero-content'
);

const fadeObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 }
);

fadeElements.forEach(el => fadeObserver.observe(el));

/* ========= STICKY NAVIGATION BAR ========= */
const navbar = document.querySelector('.glass-nav');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
}

/* ========= FLOAT ANIMATION (gentle bounce) ========= */
function floatElement(el, speed = 2000, distance = 8) {
    let direction = 1;
    setInterval(() => {
        el.style.transform = `translateY(${direction * distance}px)`;
        direction *= -1;
    }, speed);
}

// Apply float effect to hero download buttons & mockup image
window.addEventListener('load', () => {
    document.querySelectorAll('.app-mockup-img, .download-buttons').forEach(el => {
        el.style.transition = 'transform 1s ease-in-out';
        floatElement(el, 3000, 6);
    });
});

/* ========= REVEAL ANIMATION CSS HELPER CLASSES ========= */
/* These classes are used in your style.css or responsive.css:
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease, transform 1s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
*/

/* ========= OPTIONAL: SCROLL TO TOP BUTTON ========= */
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({
        item,
        price
    });
    total += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    cart.forEach((c) => {
        const li = document.createElement("li");
        li.textContent = $; { c.item } - $; { c.price };
        cartList.appendChild(li);
    });
    document.getElementById("total").textContent = `Total: $${total}`;
}

function goNext() {
    alert("Proceeding to next step (e.g., checkout page)...");
    // In real website:
    // window.location.href = "checkout.html";
}