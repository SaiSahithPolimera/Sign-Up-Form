const password = document.getElementById("password");
const confirmPassword =  document.getElementById("confirmpassword");
const passwordValidator = document.getElementById("password-validator");


confirmPassword.addEventListener("input",  checkPasswords);
password.addEventListener("input",  checkPasswords);

function checkPasswords() {
    if (confirmPassword.value === password.value) {
        passwordValidator.textContent = "";
    }
    else {
        passwordValidator.textContent = "* Passwords do not match";
        passwordValidator.style.fontSize = "0.9rem";
        passwordValidator.style.color = "#fa3e3e";
    }
}