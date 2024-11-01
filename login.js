document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Switch to signup form
    document.getElementById('showSignup').addEventListener('click', () => {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    // Switch to login form
    document.getElementById('showLogin').addEventListener('click', () => {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Handle signup
    document.getElementById('signup').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const emergencyContact = document.getElementById('emergencyContact').value;

        if (name && email && password && emergencyContact) {
            // Save user details including name, email, password, and emergency contact in local storage
            const userData = {
                name: name,
                email: email,
                password: password,
                emergencyContact: emergencyContact,
            };

            localStorage.setItem('userCredentials', JSON.stringify(userData));

            alert('Signup successful! You can now log in.');
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Handle login
    document.getElementById('login').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Retrieve stored credentials and parse JSON object
        const storedData = JSON.parse(localStorage.getItem('userCredentials'));

        if (storedData && email === storedData.email && password === storedData.password) {
            alert(`Login successful! Welcome, ${storedData.name}!`);
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});
