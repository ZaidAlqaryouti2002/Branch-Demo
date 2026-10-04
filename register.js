const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;

    // Form Validation
    if (!name || !email || !password) {
        showMessage("All fields are required!", "red");
        return;
    }

    if (password.length < 6) {
        showMessage("Password must be at least 6 characters.", "red");
        return;
    }

    // Get existing users or initialize empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        showMessage("Email is already registered!", "red");
        return;
    }

    // Add new user without removing existing users
    const newUser = { name, email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    showMessage("Registration successful! Redirecting to login...", "green");
    
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1500);
});

function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
    message.style.textAlign = "center";
}