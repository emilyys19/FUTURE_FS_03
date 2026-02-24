document.addEventListener("DOMContentLoaded", function () {

    const animatedElements = document.querySelectorAll(
        ".section-title, .service-card h3"
    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("tracking-in-expand");
                entry.target.classList.add("text-focus-in");
            }

        });

    }, {
        threshold: 0.3
    });

    animatedElements.forEach(el => observer.observe(el));

});