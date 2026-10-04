const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

// Redirect if already logged in
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (currentUser) {
    window.location.href = currentUser.role === "admin" ? "admin.html" : "dashboard.html";
}

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Form Validation
    if (!email || !password) {
        showMessage("Please enter both email and password.", "red");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Find matching user
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Store logged-in user
        localStorage.setItem("currentUser", JSON.stringify(user));

        // Redirect based on role
        if (user.role === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "dashboard.html";
        }
    } else {
        showMessage("Invalid email or password.", "red");
    }
});

function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
    message.style.textAlign = "center";
}