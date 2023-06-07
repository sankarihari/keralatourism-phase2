const emailInput = document.getElementById('email');
  emailInput.addEventListener('blur', validateEmail);
  function validateEmail() {
    const email = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression to match email format
    if (!regex.test(email)) {
      emailInput.classList.add('invalid');
      emailInput.setCustomValidity('Please enter a valid email address');
    } else {
      emailInput.classList.remove('invalid');
      emailInput.setCustomValidity('');
    }
  }

const passwordInput = document.getElementById('password');
passwordInput.addEventListener('input', validatePassword);
function validatePassword() {
  const password = passwordInput.value.trim();
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/; // regular expression to match password format
  if (!regex.test(password)) {
    passwordInput.classList.add('invalid');
    passwordInput.setCustomValidity('Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number');
  } else {
    passwordInput.classList.remove('invalid');
    passwordInput.setCustomValidity('');
  }
  
  // check password strength and set the input background color accordingly
  if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
    passwordInput.style.backgroundColor = 'green';
  } else if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
    passwordInput.style.backgroundColor = 'orange';
  } else {
    passwordInput.style.backgroundColor = 'red';
  }
}
