const currentUser = JSON.parse(localStorage.getItem("currentUser"));

// Prevent access if not logged in or if user is NOT an admin
if (!currentUser) {
    window.location.href = "login.html";
} else if (currentUser.role !== "admin") {
    window.location.href = "dashboard.html"; // Redirect normal users away from Admin page
}

// Display all users
const users = JSON.parse(localStorage.getItem("users")) || [];
const tbody = document.getElementById("usersTableBody");

users.forEach(user => {
    const row = document.createElement("tr");
    row.style.borderBottom = "1px solid #eee";
    
    row.innerHTML = `
        <td style="padding: 10px;">${user.name}</td>
        <td style="padding: 10px;">${user.email}</td>
        <td style="padding: 10px; font-weight: bold; color: ${user.role === 'admin' ? '#ef4444' : '#10b981'};">${user.role.toUpperCase()}</td>
    `;
    
    tbody.appendChild(row);
});

// Logout Feature
document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
});