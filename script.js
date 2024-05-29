const showPassword = document.querySelector("#show-password");
 const passwordField = document.getElementById("password");
 const emailField = document.getElementById("emailAddress");

 showPassword.addEventListener("click", function(){
    this.classList.toggle(".fa-eye-slash");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
 });

 const signInBtn = document.getElementById('signInForm')

 const signIn = () => {
   console.log('I want to sign in.', passwordField.value, emailField.value)
   fetch('https://budget.somee.com/api/auth/login', {
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
	.then(data => console.log(data))
	.catch(err => console.error(err));
 }

 signInBtn.addEventListener('submit', (e) => {
   e.preventDefault()
   signIn()
 })