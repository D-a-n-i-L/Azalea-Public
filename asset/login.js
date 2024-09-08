// script.js
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  if (email && password) {
    // Simulate login success
    alert('Login berhasil!');
  } else {
    // Simulate login failure
    alert('Email dan password harus diisi!');
  }
});