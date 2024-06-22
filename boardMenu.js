const navElement = document.querySelector('.aside');
const hamburgerElement = document.querySelector('.hamburger');
const goDashboard = document.querySelector('.btn');
const goDashboard2 = document.querySelector('.btn2');


const getItemFromLocalStorage = (key) => {
    return localStorage.getItem(key);
};


hamburgerElement.addEventListener("click", () => {
    navElement.classList.toggle('aside--open');
    hamburgerElement.classList.toggle('hamburger--open');
});

navElement


.addEventListener("click", () => {
    navElement.classList.remove('aside--open');
    hamburgerElement.classList.remove('hamburger--open');
});