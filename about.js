document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('hamburger--open');
        nav.classList.toggle('nav--open');
    });
});

const header = document.querySelector('.header');
console.log('header')

window.addEventListener('scroll', () =>
     {
        if (window.scrollY > 0) {
            header.classList.add('scrolled')
            console.log(header.classList)
        } else {
            header.classList.remove('scrolled');
        }
     })