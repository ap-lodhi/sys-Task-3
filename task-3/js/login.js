
// Show Login Password
function showloginpassword() {
    var loginpassword = document.getElementById("loginpassword")
    if (loginpassword.type === "password") {
        loginpassword.type = "text";
    } else {
        loginpassword.type = "password";
    }
}



var userArray = JSON.parse(localStorage.getItem("userData")) || [];




// console.log(userArray.username);


function login() {
  var email = document.getElementById("loginnameoremail").value;
  var password = document.getElementById("loginpassword").value;

  if (userArray.email === email || userArray.username === email  && userArray.password === password) {
    alert("User lgoin successfully");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Credentials");
    email.value = "";
    password.value = "";
  }
}