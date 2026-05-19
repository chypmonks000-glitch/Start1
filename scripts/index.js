const logo = document.querySelector('.logo'),
    menu = document.querySelector('.menu'),
    items = menu.querySelectorAll('li');


logo.addEventListener('click', e => {
    e.preventDefault();
    logo.classList.toggle('movement');
})
