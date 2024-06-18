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

 signInBtn.addEventListener('submit', async (e) => {
    console.log('Gabriel')
   e.preventDefault()
   const response = await fetch('https://maduabuchi-001-site1.jtempurl.com/api/auth/login', {
    method: 'POST',
    headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       email: email.value, 
       password: password.value
     })
 })
  const pickup = await response.json()
 if(!response.ok){
   response.textContent = pickup.message
 }
 if(response.ok){
   responseOkay.textContent = pickup.message
   responseNotOkay.textContent = ''
   location.assign('/board.html')
 }
console.log(pickup)
 })
