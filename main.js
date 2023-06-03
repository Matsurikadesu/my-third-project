const burger = document.querySelector('.intro__menu-container');
const popup = document.querySelector('.popup');

burger.addEventListener('click', () => popup.classList.add('active'));
popup.addEventListener('click', function(evt){
    const target = evt.target;
    //закрытие попапа после нажатия на ссылку
    if(target.classList.contains('nav-item')){
        popup.classList.remove('active');
    }
});

const closeBtn = popup.querySelector('.close-popup-btn');
closeBtn.addEventListener('click', () => popup.classList.remove('active'));
