export default function modal() {
    //modal
    let body = document.querySelector('body'),
        mdl = document.querySelector('.popup_engineer'),
        btn_close = mdl.querySelector('.popup_close');


        body.addEventListener('click', function(e){
            let target = e.target;
            if(target.classList.contains('header_btn')){
                mdl.style.display = 'block';
            }

            if(target.classList.contains('popup_engineer')){ //modal
                mdl.style.display = 'none';
            }

            if(target.classList.contains('popup')){ //modal 60s
                mdl_time.style.display = 'none';
            }
        
        });

    btn_close.addEventListener('click', function(){
        mdl.style.display = 'none';
    });


    //modal 60sek
    let mdl_time = document.querySelector('.popup'),
        btn_close_time = mdl_time.querySelector('.popup_close');

    const mdl_delay =  () => {
        mdl_time.style.display = 'block';
    };

    setTimeout(mdl_delay, 60000);

    btn_close_time.addEventListener('click', function(){
        mdl_time.style.display = 'none';
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