function checkStrength(){

  let password = document.getElementById("password").value;

  let strengthBar = document.getElementById("strengthBar");

  let strengthText = document.getElementById("strengthText");

  let suggestionsList = document.getElementById("suggestionsList");

  let score = 0;

  let feedback = [];

  // LENGTH CHECK

  if(password.length >= 8){

    score++;

    document.getElementById("length").innerHTML =
      "✅ Minimum 8 characters";

  }
  else{

    feedback.push("Use at least 8 characters");

    document.getElementById("length").innerHTML =
      "❌ Minimum 8 characters";

  }

  // UPPERCASE CHECK

  if(/[A-Z]/.test(password)){

    score++;

    document.getElementById("uppercase").innerHTML =
      "✅ At least 1 uppercase letter";

  }
  else{

    feedback.push("Add uppercase letters");

    document.getElementById("uppercase").innerHTML =
      "❌ At least 1 uppercase letter";

  }

  // LOWERCASE CHECK

  if(/[a-z]/.test(password)){

    score++;

    document.getElementById("lowercase").innerHTML =
      "✅ At least 1 lowercase letter";

  }
  else{

    feedback.push("Add lowercase letters");

    document.getElementById("lowercase").innerHTML =
      "❌ At least 1 lowercase letter";

  }

  // NUMBER CHECK

  if(/[0-9]/.test(password)){

    score++;

    document.getElementById("number").innerHTML =
      "✅ At least 1 number";

  }
  else{

    feedback.push("Add numbers");

    document.getElementById("number").innerHTML =
      "❌ At least 1 number";

  }

  // SPECIAL CHARACTER CHECK

  if(/[!@#$%^&*(),.?":{}|<>]/.test(password)){

    score++;

    document.getElementById("special").innerHTML =
      "✅ At least 1 special character";

  }
  else{

    feedback.push("Add special characters");

    document.getElementById("special").innerHTML =
      "❌ At least 1 special character";

  }

  // COMMON PASSWORD CHECK

  let commonPasswords = [
    "123456",
    "password",
    "password123",
    "admin",
    "qwerty"
  ];

  if(commonPasswords.includes(password.toLowerCase())){

    feedback.push("Avoid common passwords");

    score = 1;

  }

  // STRENGTH BAR

  let width = (score / 5) * 100;

  strengthBar.style.width = width + "%";

  // PASSWORD STRENGTH LEVEL

  if(password.length === 0){

    strengthBar.style.width = "0%";

    strengthText.innerHTML = "Enter a password";

    strengthText.style.color = "black";

  }

  else if(score <= 2){

    strengthBar.style.background = "red";

    strengthText.innerHTML = "Weak Password";

    strengthText.style.color = "red";

  }

  else if(score <= 4){

    strengthBar.style.background = "orange";

    strengthText.innerHTML = "Medium Password";

    strengthText.style.color = "orange";

  }

  else{

    strengthBar.style.background = "green";

    strengthText.innerHTML = "Strong Password";

    strengthText.style.color = "green";

  }

  // SUGGESTIONS

  suggestionsList.innerHTML = "";

  feedback.forEach(function(item){

    let li = document.createElement("li");

    li.textContent = item;

    suggestionsList.appendChild(li);

  });

}


// SHOW/HIDE PASSWORD

function togglePassword(){

  let passwordInput = document.getElementById("password");

  let toggleBtn = document.getElementById("toggleBtn");

  if(passwordInput.type === "password"){

    passwordInput.type = "text";

    toggleBtn.innerHTML = "Hide";

  }
  else{

    passwordInput.type = "password";

    toggleBtn.innerHTML = "Show";

  }

}