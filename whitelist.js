// Whitelist of allowed users (email: password)
const whitelist = {
    "big@dong.com": "dong123",
    "big@balls.com": "balls123"
    "big@sheis.com": "sheis123"
};

// DOM Elements
const loginForm = document.getElementById("login-form");
const loginContainer = document.getElementById("login-container");
const gameContainer = document.getElementById("game-container");
const errorMessage = document.getElementById("error-message");

// Handle Login Form Submission
loginForm.addEventListener("submit", function (event) {
    // Prevent default form submission
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check credentials against whitelist
    if (whitelist[email] === password) {
        // Hide login form and display game content
        loginContainer.style.display = "none";
        gameContainer.style.display = "block";
    } else {
        // Show error message
        errorMessage.style.display = "block";
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 3000); // Hide after 3 seconds
    }
});
