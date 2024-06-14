const showPassword = document.querySelector("#show-password");
 const passwordField = document.getElementById("password");
 const emailField = document.getElementById("emailAddress");

 showPassword.addEventListener("click", function(){
    this.classList.toggle(".fa-eye-slash");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
 });

const registerForm = document.querySelector('#login-form')
const fullName = document.querySelector('#name')
const userEmail = document.querySelector('.email')
const userPassword = document.querySelector('#password')
const confirmUserPassword = document.querySelector('#cpassword')

registerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch('https://maduabuchi-001-site1.jtempurl.com/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fullName: fullName.value,
      email: userEmail.value,
      password: userPassword.value,
      confirmPassword: confirmUserPassword.value
    })
  })
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    location.assign('/sign-in.html')
  })
  .catch((error) => console.log(error))
})

// // signIn API integration
 const signInBtn = document.getElementById('signInForm')

 const signIn = () => {
   console.log('I want to sign in.', passwordField.value, emailField.value)
   fetch('https://maduabuchi-001-site1.jtempurl.com/api/auth/login', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         email: emailField.value, 
         password: passwordField.value
       })
   })
	.then(response => response.json())
  .then((data) => {
    location.assign('/board.html')
  })
	// .then(data => console.log(data))
	.catch(err => console.error(err));
 }

 signInBtn.addEventListener('submit', (e) => {
   e.preventDefault()
   signIn()
 })


