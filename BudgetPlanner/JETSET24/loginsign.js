// Switch between forms
document.getElementById('switchToSignup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
});

document.getElementById('switchToLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
});

// Handle login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const customToken = document.getElementById('customToken').value; // Get the custom token

    if (customToken) {
        // If a custom token is provided, use signInWithCustomToken
        firebase.auth().signInWithCustomToken(customToken)
        .then((userCredential) => {
            alert('Logged in successfully with custom token!');
            // Redirect the user to a different page here
        })
        .catch((error) => {
            console.error("Error during login with custom token:", error.message);
            alert(error.message);
        });
    } else {
        // Fallback to email/password login
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Logged in successfully with email/password!');
            // Redirect the user to a different page here
        })
        .catch((error) => {
            console.error("Error during login:", error.message);
            alert(error.message);
        });
    }
});

// Handle signup
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        alert('Signed up successfully!');
        // Redirect the user to a different page here
    })
    .catch((error) => {
        console.error("Error during signup:", error.message);
        alert(error.message);
    });
});
