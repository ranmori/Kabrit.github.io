
document.addEventListener("DOMContentLoaded", () => {
  // your code
  const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function validateForm() {
  let x = document.forms["myForm"]["femail,fpassword"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
function handleSignupFormSubmit(e) {
  // prevent default browser behaviour
  e.preventDefault();

  const formDataEntries = new FormData(signupForm).entries();
  const { email, password } = Object.fromEntries(formDataEntries);

  // submit email and password to an API
}
function validatePassword(password, minlength) {
  if (!password) return 'Password is required';

  if (password.length < minlength) {
    return `Please enter a password that's at least ${minlength} characters long`;
  }

  const hasCapitalLetter = /[A-Z]/g;
  if (!hasCapitalLetter.test(password)) {
    return 'Please use at least one capital letter.';
  }

  const hasNumber = /\d/g;
  if (!hasNumber.test(password)) {
    return 'Please use at least one number.';
  }

  return '';
}
function validateEmail(email) {
  if (!email) return 'Email is required';
    
  const isValidEmail = /^\S+@\S+$/g
  if (!isValidEmail.test(email)) {
    return 'Please enter a valid email';
  }

  return '';
}
function handleSignupFormSubmit(e) {
  // prevent default browser behaviour
  e.preventDefault();

  const formDataEntries = new FormData(signupForm).entries();
  const { email, password } = Object.fromEntries(formDataEntries);

  const emailErrorMessage = validateEmail(email);
  const passowrdErrorMessage = validatePassword(password);

  if (!emailErrorMessage) {
		// select the email form field message element
    const emailErrorMessageElement = document.querySelector('.email .dkh-form-field__messages');
    // show email error message to user
    emailErrorMessageElement.innerText = emailErrorMessage;
  }

  if (passowrdErrorMessage) {
		// select the email form field message element
    const passwordErrorMessageElement = document.querySelector('.password .dkh-form-field__messages');
    // show password error message to user
    passwordErrorMessageElement.innerText = passowrdErrorMessage;
  }
}
});

// loader
// function myFunction() {
//     var x = document.getElementById("loader");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
