// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
const text = document.querySelector('navbar-brand');


window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100 || top ==0) {
        header.classList.add('navbar-ligth');
        header.classList.remove('navbar-dark');
    }
    else {
        header.classList.remove('navbar-dark');
        header.classList.add('bg-dark');

    }
}