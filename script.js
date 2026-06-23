let username;
let password;
let confrimPassword;

let cancelled = false;

// step 1: get username
while (true) {
  username = prompt("Enter Username");
  if (username === null) {
    alert("cancelled.");
    cancelled = true;
    break;
  }

  if (username.length <= 10 && username.length > 0) {
    break;
  } else {
    alert("Username must be less than 10 characters long.");
  }
}

// step 2: get password
if (!cancelled) {
  while (true) {
    password = prompt("Enter Password");
    if (password === null) {
      alert("cancelled.");
      cancelled = true;
      break;
    }

    let hasUpperCase = /[A-Z]/.test(password);
    let hasSymbol = /[!@#$%^&*(),.?":{}|<>_]/.test(password);
    let hasDigit = /\d/.test(password);
    let minLength = password.length >= 6;

    if (!hasUpperCase) {
      alert("Password must contain at least one uppercase letter.");
      continue;
    }
    if (!hasSymbol) {
      alert("Password must contain at least one symbol.");
      continue;
    }
    if (!hasDigit) {
      alert("Password must contain at least one digit.");
      continue;
    }
    if (!minLength) {
      alert("Password must be at least 6 characters long.");
      continue;
    }
    break;
  }
}


// let confirmPassword
if (!cancelled) {
  while (true) {
    confirmPassword = prompt("Re-enter Password");
    if (confirmPassword === null) {
      alert("cancelled.");
      cancelled = true;
      break;
    }

    if (password === confirmPassword) {
      break;
    } else {
      alert("Passwords do not match.");
    }
  }
}

if (!cancelled) {
  alert("Registration successful!");
}
