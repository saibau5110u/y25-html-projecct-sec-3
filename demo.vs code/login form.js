const form = document.getElementById('loginForm');
const errorDiv = document.getElementById('error');
const messageDiv = document.getElementById('message');
const loginBox = document.querySelector('.login-box');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear messages
    errorDiv.textContent = '';
    messageDiv.textContent = '';
    
    const username = form.username.value.trim();
    const password = form.password.value;
    
    // Validate username
    if (!username) {
        errorDiv.textContent = 'Please enter username';
        return;
    }
    
    // Validate password
    if (!password) {
        errorDiv.textContent = 'Please enter password';
        return;
    }
    
    if (password.length > 8) {
        errorDiv.textContent = 'Password must be 8 characters or less';
        return;
    }
    
    // Success - Change background image
    loginBox.classList.add('logged-in');
    
    // Display success message
    messageDiv.textContent = `Welcome, ${username}!`;
    
    // Reset form after delay
    setTimeout(() => {
        form.reset();
        // Optional: Remove logged-in class to reset background
        // loginBox.classList.remove('logged-in');
    }, 3000);
});