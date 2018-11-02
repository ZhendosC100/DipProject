export default function calc(){

    let calc = document.querySelector('.popup_calc'),
        close_calc = calc.querySelector('.popup_calc_close'),
        inp_width = document.getElementById('width'),
        inp_height = document.getElementById('height'),
        body_calc = document.querySelector('body');

        function replace() {
            this.value = this.value.replace(/[^\d]/ig, '');
        }
        
            inp_width.oninput = replace;
            inp_height.oninput = replace;

    body_calc.addEventListener('click', function(event){
        let target = event.target;

        if(target.classList.contains('glazing_price_btn')){
            calc.style.display = 'block';
        }
    });

    close_calc.addEventListener('click', function(){
        calc.style.display = 'none';
    });

    
}