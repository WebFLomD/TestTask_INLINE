const links = document.querySelectorAll('.header__link');
const items = document.querySelectorAll('.main__item');

links.forEach(link => {
    link.addEventListener('click', function(event) {
    event.preventDefault(); 

    
    items.forEach(item => item.classList.remove('main__item--active'));
    
    const targetId = this.getAttribute('href');
    const targetItem = document.querySelector(targetId);
    targetItem.classList.add('main__item--active');


    links.forEach(link => link.classList.remove('header__link--active'));

    this.classList.add('header__link--active');
    });
});