export default function modal() {
    //modal
    let body = document.querySelector('body'),
        mdl = document.querySelector('.popup_engineer'), // modal
        mdl_time = document.querySelector('.popup'); //modal 60sek
    


        body.addEventListener('click', function(e){
            let target = e.target;

            console.log(e.target);

            if(target.classList.contains('header_btn')){ //modal
                mdl.style.display = 'block';
            }

            if(target.classList.contains('phone_link')) { //modal 60sek at link
                mdl_time.style.display = 'block';
            }

            if(target.classList.contains('popup_engineer')){ //modal close
                mdl.style.display = 'none';
            }

            if(target.classList.contains('popup')){ //modal 60s close
                mdl_time.style.display = 'none';
            }

            if(e.target.tagName == 'STRONG') {
                mdl.style.display = 'none'; //modal close
                mdl_time.style.display = 'none'; //modal 60sek close
            }
        
        });

    //modal 60sek
    const mdl_delay =  () => {
        mdl_time.style.display = 'block';
    };

    setTimeout(mdl_delay, 60000);

}