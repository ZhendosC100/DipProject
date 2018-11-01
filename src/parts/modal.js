export default function modal() {
    let body = document.querySelector('body'),
        mdl = document.querySelector('.popup_engineer'),
        btn_mdl = document.querySelector('.header_btn'),
        btn_close = mdl.querySelector('strong');

    

       /* body.addEventListener('click', function(e){
            let target = e.target;
    
            if(target.classList.contains('header_btn')){
                mdl.style.display = 'block';
            }
    
            if(target.classList.contains('popup_close')) {
                mdl.style.display = 'none';
            }
        });*/
    
    btn_mdl.addEventListener('click', function(){
        mdl.style.display = 'block';
        console.log(btn_close);
    });

    btn_close.addEventListener('click', function(){
        mdl.style.display = 'none';
    });

}