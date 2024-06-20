const showPassword = document.querySelector("#show-password");
 const passwordField = document.getElementById("password");
 const emailField = document.getElementById("emailAddress");

 showPassword.addEventListener("click", function(){
    this.classList.toggle(".fa-eye-slash");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
 });

// // signIn API integration
const email = document.querySelector('#emailAddress')
const password = document.querySelector('#password')
const signInBtn = document.querySelector('#signInForm')

const signIn = async () => {
//   console.log('I want to sign in.', password.value, email.value)
}

