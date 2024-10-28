document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Here you would typically send a request to your server to validate the credentials
        // For this example, we'll just check if both fields are filled
        if (email && password) {
            // Successful login
            window.location.href = 'items.html';
        } else {
            // Failed login
            alert('Please enter both email and password');
        }
    });
});
