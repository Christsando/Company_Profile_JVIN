function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // tambah class animasi baru di sini
    const animatedElements = document.querySelectorAll(`
        .animate-fade-in,
        .animate-slide-left,
        .animate-slide-right
    `);

    animatedElements.forEach(el => observer.observe(el));
}