const signUpForm = document.getElementById("sign-up-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const userEmail = document.getElementById("user-email");
const userNumber = document.getElementById("user-phone-number");
const password = document.getElementById("user-password");
const confirmPassword = document.getElementById("user-password-confirm");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});
