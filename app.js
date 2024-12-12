// Toggle Dark/Light Mode

document.getElementById('toggle-theme').addEventListener('click', function() {
    
    // Toggle Dark mode class on body

    document.body.classList.toggle('dark-mode');

    // Change button icon/text based on current theme

    const button = document.getElementById('toggle-theme');
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = '☀️';
    } else {
        button.textContent = '🌙';
    }
});

// Form Validation

document.getElementById('contact-form').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !message) {
        e.preventDefault();
        alert('Please fill in both the email and message fields!');
    } else if (!emailRegex.test(email)) {
        e.preventDefault();
        alert('Please enter a valid email address!');
    }
});