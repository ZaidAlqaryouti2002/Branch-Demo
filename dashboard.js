const currentUser = JSON.parse(localStorage.getItem("currentUser"));

// Prevent access if not logged in or if user is an admin
if (!currentUser) {
    window.location.href = "login.html";
} else if (currentUser.role === "admin") {
    window.location.href = "admin.html";
}

// Display user info
document.getElementById("userName").textContent = currentUser.name;
document.getElementById("userEmail").textContent = currentUser.email;
document.getElementById("userRole").textContent = currentUser.role;

// Logout Feature
document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
});