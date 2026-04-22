// counter animation for stats section
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    const animateCounter = (el) => {
        const target = +el.getAttribute("data-target");
        let count = 0;

        const speed = target / 80; // smoothness control

        const update = () => {
            count += speed;

            if (count < target) {
                el.innerText = Math.ceil(count);
                requestAnimationFrame(update);
            } else {
                el.innerText = target + (target >= 10 ? "+" : "");
            }
        };

        update();
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;

                // avoid re-running
                if (!el.classList.contains("done")) {
                    el.classList.add("done");
                    animateCounter(el);
                }
            }
        });
    }, { threshold: 0.6 });

    counters.forEach(counter => observer.observe(counter));
});
// counter animation for stats section


