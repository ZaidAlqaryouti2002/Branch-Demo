const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Get registered users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user with this email
    const user = users.find(function (user) {
        return user.email === email;
    });

    if (!user) {
        message.textContent = "Email or password is incorrect.";
        message.style.color = "red";
        return;
    }

    // Check password
    if (user.password !== password) {
        message.textContent = "Email or password is incorrect.";
        message.style.color = "red";
        return;
    }

    // Login successful
    message.textContent = "Login successful!";
    message.style.color = "green";
});