let navbar = document.querySelector('.navbar');
let accountForm = document.querySelector('.account-form');
let registerBtn = document.querySelector('.register-btn');
let loginBtn = document.querySelector('.login-btn');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
document.querySelector('#account-btn').onclick = () => {
    accountForm.classList.toggle('active');
}
document.querySelector('#close-navbar').onclick = () => {
    navbar.classList.remove('active');
}

document.querySelector('#close-form').onclick = () => {
    accountForm.classList.remove('active');
}
registerBtn.onclick = () => {
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    document.querySelector('.login-form').classList.remove('active');
    document.querySelector('.register-form').classList.add('active');
}
loginBtn.onclick = () => {
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
    document.querySelector('.register-form').classList.remove('active');
    document.querySelector('.login-form').classList.add('active');
}
let accordion = document.querySelectorAll('.faq .accordion-container .accordion');
accordion.forEach(accord => {
    accord.onclick = () => {
        accordion.forEach(dion => {
            dion.classList.remove('active');
        });
        accord.classList.toggle('active');
    }
});
window.onscroll = () => {
    accountForm.classList.remove('active');
    navbar.classList.remove('active');
}