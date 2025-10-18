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
// Partner Form Submission Handling
document.getElementById("partnerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    let dataSummary = "";

    for (let [key, value] of formData.entries()) {
        dataSummary += $ { key }: $ { value }\
        n;
    }

    alert("✅ Registration submitted successfully!\n\n" + dataSummary);
    this.reset();
});