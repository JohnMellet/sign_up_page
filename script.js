const signUpForm = document.getElementById("sign-up-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const userEmail = document.getElementById("user-email");
const userNumber = document.getElementById("user-phone-number");
const password = document.getElementById("user-password");
const confirmPassword = document.getElementById("user-password-confirm");

const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex =
  /^(?:(?:(?:\+|00)44\s?|0)7(?:[45789]\d{2}|624)\s?\d{3}\s?\d{3}|(?!0)(?:\+|00)44\s?(?:\d\s?){9}|(?:(?:\+|00)44\s?)(?:[1-9]\d{1,2}\s?){4}|(?:(?:\+|00)44\s?)(?:[1-9]\d{1,2}\s?){3}\d{4}|(?:(?:\+|00)44\s?)(?:\d\s?){6}\d{2}(?:\s?\d{3})?)$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*[^\s]){8,}$/;

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});
