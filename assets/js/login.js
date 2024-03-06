const PASSWORD = '123123';
const ADMIN = 'admin@gmail.com';
const PASSWORD_RULE = {
  containNumber: true,
  containUpperCase: true,
  minLength: 8,
};
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const toggleClass = (element, className) => {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
};
const passwordValidation = (password) => {
  const status = {
    isValidated: false,
    message: '',
  };
  if (password.length < PASSWORD_RULE.minLength) {
    status.message = 'Mật khẩu phải chứa ít nhất 8 ký tự.';
    return status;
  }
  if (!/\d/.test(password) && PASSWORD_RULE.containNumber) {
    status.message = 'Mật khẩu phải chứa ít nhất một số.';
    return status;
  }
  if (!/[A-Z]/.test(password) && PASSWORD_RULE.containUpperCase) {
    status.message = 'Mật khẩu phải chứa ít nhất một chữ hoa.';
    return status;
  }
  status.isValidated = true;
  return status;
};


const loginForm = document.getElementById('login_form_id');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const username = formData.get('username');
  const password = formData.get('password');
  // validation
  if (validateEmail(username) === false) {
    loginStatusNoti(false, 'Email không hợp lệ.');
    return;
  }
  if (username === ADMIN && password === PASSWORD) {
    window.location.href = './admin/admin.html';
  }else {
    loginStatusNoti(false, 'Tài khoản hoặc mật khẩu không hợp lệ.');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Get reference to the button
  var button = document.getElementById('topRightButton');

  // Add click event listener to the button
  button.addEventListener('click', function() {
      // Redirect to admin.html
      window.location.href = 'admin_login.html';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get reference to the button
  var button = document.getElementById('topRightButton_2');

  // Add click event listener to the button
  button.addEventListener('click', function() {
      // Redirect to admin.html
      window.location.href = 'index.html';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get reference to the button
  var button = document.getElementById('registry');

  // Add click event listener to the button
  button.addEventListener('click', function() {
      // Redirect to admin.html
      window.location.href = 'register.html';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login_form_id');

  loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('login__user').value;
      const password = document.getElementById('login__pw').value;
      
      // Retrieve user data from localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
      
      // Check if the user exists
      const user = users.find(user => user.email === email && user.password === password);
      
      if (validateEmail(email) === false) {
        loginStatusNoti(false, 'Email không hợp lệ.');
        return;
      }

      if (user) {
          alert('Login successful!');
          window.location.href = './user/main.html';
      } 
  });
});


const loginStatusNoti = (isPositive, message) => {
  const loginStatus = document.querySelector('#login__status_noti');
  toggleClass(loginStatus, 'd-block');
  const loginStatusMessage = document.querySelector(
    '#login__status_noti > p > span'
  );
  loginStatusMessage.innerHTML = message;
  loginStatusMessage.style.color = isPositive ? 'green' : 'red';
};
