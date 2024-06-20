const loginForm = document.querySelector('.sign-in-form');

const loginEmail = document.querySelector('.emailInput');

const loginPassword = document.querySelector('.password');

const loginError = document.querySelector('.login-error');


const getItemFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const setItemInLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  // console.log('email', loginEmail.value)
  const res = await fetch('https://maduabuchi-001-site1.jtempurl.com/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email: loginEmail.value,
      password: loginPassword.value
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })

  const response = await res.json();

  if(!res.ok){
    loginError.textContent = response.message;
  }

  if(res.ok){
    const token = response.token.response.token
    localStorage.setItem('token', token);
    location.assign('/board.html')
  }
  
})

const token = localStorage.getItem('token')
if(token){
  location.assign('/index.html')
}



