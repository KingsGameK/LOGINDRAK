console.log("Whitelist script loaded"); // Check if the script loads

// Whitelist of allowed users (email: password)
const whitelist = {
    "dante@fiopy.com": "order",
    "karim@albi.com": "chaos"
};

// DOM Elements
const loginForm = document.getElementById("login-form");
const loginContainer = document.getElementById("login-container");
const gameContainer = document.getElementById("game-container");
const errorMessage = document.getElementById("error-message");

console.log("DOM elements loaded"); // Check if elements are correctly selected

// Handle Login Form Submission
loginForm.addEventListener("submit", function (event) {
    console.log("Form submitted"); // Debug log for form submission

    // Prevent default form submission
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Entered email:", email); // Log entered email
    console.log("Entered password:", password); // Log entered password

    // Check credentials against whitelist
    if (whitelist[email] === password) {
        console.log("Login successful"); // Debug for successful login

        // Hide login form and display game content
        loginContainer.style.display = "none";
        gameContainer.style.display = "block";
    } else {
        console.log("Invalid credentials"); // Debug for failed login

        // Show error message
        errorMessage.style.display = "block";
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 3000); // Hide after 3 seconds
    }
});
