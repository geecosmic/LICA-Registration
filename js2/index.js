// document.getElementById('showpass').innerHTML = 'bo';
var bo = "uptimusprime"


// document.getElementById('showpass').innerHTML =bo;
// document.getElementById('showpass').innerHTML ="Password = "+" "+ bo;
 document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission
  
  var password = document.getElementById('password').value;

  // if (password === '555') {
  if (password === bo) {
    // Password is correct, redirect to welcome.html
    window.location.href = 'index1.html';
  } else {
    // Password is incorrect, you can add an error message or handle as needed
    alert('Incorrect password. Please try again.');
  }
});  

// function showp() {

//   var x = document.getElementById('showpass');
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }


