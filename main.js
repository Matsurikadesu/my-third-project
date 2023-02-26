if(window.innerWidth  < 1080){
    const burger = document.querySelector('.intro__menu-container');
    const popup = document.querySelector('.popup');
    const closeBtn = popup.querySelector('.close-popup');

    burger.addEventListener('click', () => popup.classList.add('active'));

    popup.addEventListener('click', function(evt){
        const target = evt.target;
        if(target.classList.contains('nav-item')){
            popup.classList.remove('active');
        }
    });

    closeBtn.addEventListener('click', () => popup.classList.remove('active'));
}