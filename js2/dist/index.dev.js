"use strict";

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  var password = document.getElementById('password').value;
  var bo = "999"; // if (password === '555') {

  if (password === bo) {
    // Password is correct, redirect to welcome.html
    window.location.href = 'index1.html';
  } else {
    // Password is incorrect, you can add an error message or handle as needed
    alert('Incorrect password. Please try again.');
  }
});