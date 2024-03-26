document.addEventListener("DOMContentLoaded", function() {
        var scrolltopElement = document.getElementById('scrolltop');

        scrolltopElement.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });