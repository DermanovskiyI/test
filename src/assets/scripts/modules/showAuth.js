const authbtn = document.querySelector('.btn--auth');
const welcome = document.querySelector('.welcome__container');


authbtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('btn--auth')) {
        welcome.classList.toggle('welcome__container--animate')

    }
})