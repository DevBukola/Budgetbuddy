const navElement = document.querySelector('.nav');
const hamburgerElement = document.querySelector('.hamburger');
const goDashboard = document.querySelector('.btn');
const goDashboard2 = document.querySelector('.btn2');


const getItemFromLocalStorage = (key) => {
    return localStorage.getItem(key);
};


hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle('nav--open');
    hamburgerElement.classList.toggle('hamburger--open');
});

navElement


.addEventListener("click", () => {
    navElement.classList.remove('nav--open');
    hamburgerElement.classList.remove('hamburger--open');
});


const checkLoginStatus = () => {
    const token = getItemFromLocalStorage('token');

    if (token) {
        goDashboard.setAttribute('href', '/board.html');
        goDashboard2.textContent = 'Logout'
        goDashboard2.addEventListener('click', () => {
            localStorage.removeItem('token');
            location.reload();
        });
    } else {
        goDashboard.setAttribute('href', '/sign-in.html');
        goDashboard2.setAttribute('href', '/sign-in.html');
        goDashboard2.textContent = 'Login'
    }
};


checkLoginStatus()
