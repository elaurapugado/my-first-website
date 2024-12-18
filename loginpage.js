// Handle switching between Login and Signup forms
document.getElementById('show-signup').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('signup-section').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('signup-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
});

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Hardcoded credentials
    const correctUsername = 'elaura';
    const correctPassword = 'lausa123';

    // Simple validation
    if (username === '' || password === '') {
        alert('Please fill in both fields');
    } else if (username !== correctUsername || password !== correctPassword) {
        alert('Invalid username or password');
    } else {
        // Simulate successful login
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('signup-section').style.display = 'none';
        document.getElementById('homepage').style.display = 'block';

        // Set the welcome message with the username
        document.getElementById('welcome-message').textContent = `Hello, ${username}!`;
    }
});

// Handle signup form submission
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Hardcoded credentials for signup
    const correctUsername = 'elaura';
    const correctPassword = 'lausa123';

    // Simple validation
    if (username === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match');
    } else if (username === correctUsername) {
        alert(`Username "${correctUsername}" is already taken. Please choose another one.`);
    } else {
        alert(`Signed up as ${username}`);
        // After signup, show login screen
        document.getElementById('signup-section').style.display = 'none';
        document.getElementById('login-section').style.display = 'block';
    }
});

// Handle logout action
document.getElementById('logout-button').addEventListener('click', function () {
    // Hide homepage and show the login form
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
});
