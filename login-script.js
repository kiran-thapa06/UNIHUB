// Modal functionality
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Tab functionality
function showTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all tab headers
    document.querySelectorAll('.tab-header div').forEach(header => {
        header.classList.remove('active');
    });
    
    // Show the selected tab and activate corresponding header
    document.getElementById(tabId).classList.add('active');
    if (tabId === 'login-tab') {
        document.querySelector('.tab-header div:first-child').classList.add('active');
    } else if (tabId === 'register-tab') {
        document.querySelector('.tab-header div:last-child').classList.add('active');
    }
}

// Show password reset tab
function showPasswordReset() {
    showTab('reset-tab');
}

// Form submission handlers
document.addEventListener('DOMContentLoaded', function() {
    // Login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        
        // Basic validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate successful login (replace with actual authentication)
        console.log('Login attempt:', email);
        
        // Redirect to event.html after successful login
        window.location.href = 'event.html';
    });
    
    // Register form submission
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Validation
        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        
        // Simulate successful registration (replace with actual API call)
        console.log('Registration:', name, email);
        
        // Redirect to event.html after successful registration
        window.location.href = 'event.html';
    });
    
    // Password reset form submission
    document.getElementById('resetForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('resetEmail').value.trim();
        
        if (!email) {
            alert('Please enter your email address');
            return;
        }
        
        // Simulate password reset (replace with actual implementation)
        console.log('Password reset for:', email);
        alert(`Password reset link sent to ${email}`);
        showTab('login-tab');
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('loginModal')) {
            closeLoginModal();
        }
    });
});