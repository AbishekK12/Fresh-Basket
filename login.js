document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            try {
                // Add AWS Cognito authentication
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-AWS-Region': AWS_CONFIG.regions.primary
                    },
                    body: JSON.stringify({ email, password })
                });

                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem('authToken', data.token);
                    localStorage.setItem('isLoggedIn', 'true');
                    window.location.href = 'shop.html';
                } else {
                    showCustomAlert('Login failed. Please check your credentials.');
                }
            } catch (error) {
                console.error('Login error:', error);
                showCustomAlert('Service unavailable. Please try again later.');
            }
        } else {
            showCustomAlert('Please enter both email and password');
        }
    });
});
