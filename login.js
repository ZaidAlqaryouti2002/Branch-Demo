const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

const users = [
    {
        email: "raghad@gmail.com",
        password: "123456"
    },
    {
        email: "ahmad@gmail.com",
        password: "123456"
    }
];

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = users.find(function (user) {
        return user.email === email;
    });

    if (!user || user.password !== password) {
        message.textContent = "Email or password is incorrect.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Login successful!";
    message.style.color = "green";
});