// Fade in elements when they come into view
document.addEventListener("DOMContentLoaded", function () {
    const photos = document.querySelectorAll('.photo-item');

    window.addEventListener('scroll', function () {
        photos.forEach(photo => {
            if (photo.getBoundingClientRect().top < window.innerHeight) {
                photo.classList.add('visible');
            }
        });
    });
});
