/* ===== Scroll-triggered fade-in animations ===== */
document.addEventListener('DOMContentLoaded', () => {
    // Elements to animate
    const animatable = document.querySelectorAll(
        '.hero-badge, .hero-headline, .hero-sub, .vsl-wrapper, ' +
        '.hero .cta-group, .section-title, .step, ' +
        '.faq-item, .process .cta-group, .final-headline, .final-sub, .final-cta .cta-group'
    );

    animatable.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    animatable.forEach(el => observer.observe(el));

    // Stagger FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, i) => {
        item.style.transitionDelay = `${i * 0.08}s`;
    });

    // Navbar background on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.style.borderBottomColor = 'rgba(0,0,0,0.12)';
        } else {
            navbar.style.borderBottomColor = 'rgba(0,0,0,0.08)';
        }
    }, { passive: true });
});
