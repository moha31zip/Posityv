// script.js

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for product cards animations
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in'); // Replace with your animation class
            observer.unobserve(entry.target);
        }
    });
}, options);

document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});

// Form submission handling
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the default form submission
    // Handle form submission logic here
    const formData = new FormData(form);
    // Example to send data via fetch API
    fetch('/submit', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        form.reset(); // Reset form after submission
    }).catch((error) => {
        console.error('Error:', error);
    });
});

// Navbar scroll effects
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});