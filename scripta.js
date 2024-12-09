// Optional: Add any further animations or interactions
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.about-photography, .about-inspiration, .about-importance');
    
    window.addEventListener('scroll', function () {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight) {
                section.classList.add('visible');
            }
        });
    });
});
