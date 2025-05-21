// JavaScript code will go here
document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in-element');

    if (!fadeInElements.length) {
        console.log("No elements with .fade-in-element class found.");
        return;
    }

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    };

    const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    fadeInElements.forEach(element => {
        intersectionObserver.observe(element);
    });
});
