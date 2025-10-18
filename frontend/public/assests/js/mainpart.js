/* ====BHUKK MAIN JAVASCRIPT====*/

/* ---------- 1. PARTNER FORM SUBMISSION ---------- */
const partnerForm = document.getElementById('partner-registration');
const successMsg = document.getElementById('form-success');

if (partnerForm) {
    partnerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        successMsg.textContent = '✅ Thank you! We'
        ll contact you soon.
        ';
        partnerForm.reset();
        successMsg.style.color = 'green';
        successMsg.style.marginTop = '10px';
    });
}

/* ---------- 2. SMALL ANIMATIONS ---------- */
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