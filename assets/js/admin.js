document.addEventListener('DOMContentLoaded', function () {
    const adminLoginForm = document.getElementById('adminLoginForm');

    adminLoginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = adminLoginForm.elements.adminUsername.value;
        const password = adminLoginForm.elements.adminPassword.value;

        // Check admin credentials
        if (username === 'admin' && password === 'admin123') {
            // Redirect to admin dashboard
            window.location.href = 'dashboardAdmin.html';
        } else {
            alert('Invalid username or password');
        }
    });
});
