// Toggle Dark/Light Mode

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('toggle-theme').textContent = '☀️';
    }
});

document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const button = document.getElementById('toggle-theme');

    if (document.body.classList.contains('dark-mode')) {
        button.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        button.textContent = '🌙';
        localStorage.setItem('theme', 'light');
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