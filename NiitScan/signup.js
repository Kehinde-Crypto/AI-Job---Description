// script.js

// Smooth scroll for nav links (if any)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Basic form validation
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputs = registerForm.querySelectorAll('input');
    const password = inputs[2].value;
    const confirmPassword = inputs[3].value;

    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    alert('Registration successful!');
    registerForm.reset();
  });
}