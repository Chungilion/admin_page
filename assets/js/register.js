document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the button
    var backbutton = document.getElementById('topRightButton_3');
  
    // Add click event listener to the button
    backbutton.addEventListener('click', function() {
        // Redirect to admin.html
        window.location.href = 'index.html';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register_form_id');
  
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('register__user').value;
        const password = document.getElementById('register__pw').value;
        
        // Retrieve user data from localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Check if the user already exists
        const existingUser = users.find(user => user.email === email);
        
        if (existingUser) {
            alert('User already exists');
            return;
        }
        
        // Add the new user to the array
        const newUser = {
            email: email,
            password: password
        };
        users.push(newUser);
        
        // Update the users data in localStorage
        localStorage.setItem('users', JSON.stringify(users));
        
        alert('Registration successful!');
        window.location.href = "index.html";
    });
  });


