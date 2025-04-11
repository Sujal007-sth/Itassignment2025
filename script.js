document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (username.trim() === '') {
        alert('Please enter your username');
        return;
    }
    
    if (password.trim() === '') {
        alert('Please enter your password');
        return;
    }
    
    // Clear the form fields
    this.reset();
    
    // Here you would typically send the data to a server
    // For demonstration purposes, we'll just redirect to the homepage
    window.location.href = 'index.html';
}); 