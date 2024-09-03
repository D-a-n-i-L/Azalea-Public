// Mock database for demonstration purposes
var users = {
    "admin": "admin"
};

function checkLogin(event) {
    event.preventDefault(); // Prevent form submission

    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    if (usernameInput === null || passwordInput === null) {
        console.error("Error: username or password input is null!");
        return;
    }
    var username = usernameInput.value;
    var password = passwordInput.value;
    if (username === "" || password === "") {
        alert("Please enter both username and password!");
        return;
    }
    if (users[username] && users[username] === password) {
        alert("Login success!");
    } else {
        alert("Username or password is incorrect!");
    }
}

function signUp(event) {
    event.preventDefault(); // Prevent form submission

    var newUsernameInput = document.getElementById("newUsername");
    var newPasswordInput = document.getElementById("newPassword");
    if (newUsernameInput === null || newPasswordInput === null) {
        console.error("Error: new username or password input is null!");
        return;
    }
    var newUsername = newUsernameInput.value;
    var newPassword = newPasswordInput.value;
    if (newUsername === "" || newPassword === "") {
        alert("Please enter both username and password!");
        return;
    }
    if (users[newUsername]) {
        alert("Username already exists!");
    } else {
        users[newUsername] = newPassword;
        alert("Sign up success! You can now log in.");
    }
}

function checkPassword(password) {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
}function checkPassword(password) {
  if (password.length >= 8) {
    // Assuming the correct password is "mysecretpassword" for example
    if (password === "mysecretpassword") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  let password = document.getElementById("password").value;
  if (checkPassword(password)) {
    console.log("Password is correct");
    // You can add code here to proceed to the next step
  } else {
    console.log("Password is incorrect");
    window.location.reload(); // Reload the page
  }
}

// Assuming you have a form with an input field and a submit button
document.getElementById("form").addEventListener("submit", handleSubmit);

// Example usage:
let password = "mysecretpassword";
if (checkPassword(password)) {
  console.log("Password is valid");
} else {
  console.log("Password must have at least 8 characters");
}

