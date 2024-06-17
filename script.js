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
const responseNotOkay = document.querySelector('.response')
const responseOkay = document.querySelector('.response-okay')

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const retrieve = await fetch('https://maduabuchi-001-site1.jtempurl.com/api/auth/register', {
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
  const collect = await retrieve.json()
  // console.log(collect)
  if(!retrieve.ok){
    responseNotOkay.textContent = collect.message
  }
  if(retrieve.ok){
    responseOkay.textContent = collect.message
    responseNotOkay.textContent = ''
    location.assign('/sign-in.html')
  }
})

// // signIn API integration
 const signInBtn = document.getElementById('signInForm')

 const signIn = async () => {
   console.log('I want to sign in.', passwordField.value, emailField.value)
   const response = await fetch('https://maduabuchi-001-site1.jtempurl.com/api/auth/login', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         email: emailField.value, 
         password: passwordField.value
       })
   })
	const pickup = await response.json()
  if(!response.ok){
    response.textContent = pickup.message
  }
  if(retrieve.ok){
    responseOkay.textContent = pickup.message
    // responseNotOkay.textContent = ''
    location.assign('/board.html')
  }
 }

//  signInBtn.addEventListener('submit', (e) => {
//    e.preventDefault()
//    signIn()
//  })


