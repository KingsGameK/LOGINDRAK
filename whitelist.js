// Whitelist of allowed users (email: password)
const whitelist = {
    "my@balls.com": "myballs",
    "my@dong.com": "mydong"
};

// DOM Elements
const loginForm = document.getElementById("login-form");
const loginContainer = document.getElementById("login-container");
const gameContainer = document.getElementById("game-container");
const errorMessage = document.getElementById("error-message");

// Handle Login Form Submission
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check credentials against whitelist
    if (whitelist[email] === password) {
        // Hide login form and display the game content
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
