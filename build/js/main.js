document.addEventListener('DOMContentLoaded', function(){

    // Мобильное меню
    if(window.innerWidth < 993){
        let openMenuButton = document.querySelector('.mobile-menu-button-js');
        let mobileMenu = document.querySelector('.mobile-menu-js');
        let closeMenuButton = document.querySelector('.mobile-menu-close-button-js');

        openMenuButton.addEventListener('click', function(e){
            e.preventDefault();
            mobileMenu.classList.add('mobile-menu_active');

            closeMenuButton.addEventListener('click', function(e){
                e.preventDefault();
                mobileMenu.classList.remove('mobile-menu_active');
            });
        });
    }


    // Модальное окно записи
    let buttonsOpenAuth = document.querySelectorAll('.button-open-auth-js');
    let modalAuthReg = document.querySelector('.modal-auth-reg-js');
    let modalAuthRegCloseButton = modalAuthReg.querySelector('.modal-auth-reg-close-js');
    let buttonsMobileOpenAuth = document.querySelectorAll('.button-open-auth-mobile-js');

    let closeModalAuth = function(e){
        e.preventDefault()
        modalAuthReg.classList.remove('modal-auth-reg--active'); 
    }

    let openModal = function(e){
        e.preventDefault();
        modalAuthReg.classList.add('modal-auth-reg--active');
        document.addEventListener('keydown', function(){
            if(event.code==='Escape'){
                closeModalAuth(event);
            }
        });
    }

    for(let i = 0; i < buttonsOpenAuth.length; i++){
        buttonsOpenAuth[i].addEventListener('click', openModal)
    }

    // Модальное окно записи на мобильных после исчезновения импута
    if(window.innerWidth < 761){
        for(let i = 0; i < buttonsMobileOpenAuth.length; i++){
            buttonsMobileOpenAuth[i].addEventListener('click', openModal)    
        }
    }
    
    modalAuthRegCloseButton.addEventListener('click', closeModalAuth);

    
    // Sticky Header
    let header = document.querySelector('.header-js');

    window.addEventListener('scroll', function(){
        if(window.pageYOffset > 100){
            header.classList.add('header_white');
        }else if(window.pageYOffset < 100){
            header.classList.remove('header_white');
        }
    });

    // Слайдер преподавателей

    $('.teacher-block__slider-js').owlCarousel({
		margin: 15,
		navText: ["<img src='img/commons/slider/arrow.svg' />","<img src='img/commons/slider/arrow.svg' />"],
        responsive: {
            0: {
                items:1,
                nav: false,
                dots: true,
            },
            720: {
                items:1,
                nav: true,
                dots: true,
            }
        }
    });

});