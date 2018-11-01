export default function modal() {
    let body = document.querySelector('body'),
        mdl = document.querySelector('.popup_engineer'),
        btn_close = mdl.querySelector('.popup_close');


        body.addEventListener('click', function(e){
            let target = e.target;
            if(target.classList.contains('header_btn')){
                mdl.style.display = 'block';
            }

            if(target.classList.contains('popup_engineer')){
                mdl.style.display = 'none';
            }
        
        });

    btn_close.addEventListener('click', function(){
        mdl.style.display = 'none';
    });

}

//btn_mdl = document.querySelector('.header_btn'),

/* body.addEventListener('click', function(e){
            let target = e.target;
    
            if(target.classList.contains('header_btn')){
                mdl.style.display = 'block';
            }
    
            if(target.classList.contains('fun_close')) {
                mdl.style.display = 'none';
            }
        });*/