export default function calc(){

    let calc = document.querySelector('.popup_calc'),
        calc_profile = document.querySelector('.popup_calc_profile'),
        calc_end = document.querySelector('.popup_calc_end'),
        inp_width = document.getElementById('width'),
        inp_height = document.getElementById('height'),
        calc_img_one = document.getElementById('type1'),
        calc_img_two = document.getElementById('type2'),
        calc_img_three = document.getElementById('type3'),
        calc_img_four = document.getElementById('type4'),
        //farm/cold cacl_profile
        check_cold = document.getElementById('cold'),
        check_warm = document.getElementById('warm'),
        //end farm/cold cacl_profile
        body_calc = document.querySelector('body');
        calc_img_one.style.display = "block";

        function replace() {
            this.value = this.value.replace(/[^\d]/ig, '');
        }
        
            inp_width.oninput = replace;
            inp_height.oninput = replace;

    body_calc.addEventListener('click', function(event){
        //event.preventDefault();
        let target = event.target;

        console.log(event.target);

        if(target.classList.contains('glazing_price_btn')){
            calc.style.display = 'block';          //calc open
        }

        if(target.classList.contains('popup_calc_button')){
            event.preventDefault();
            calc.style.display = 'none';          //calc close
            calc_profile.style.display = 'block'; //calc_profile open
            //check_cold.style.background = 'url(../img/modal_calc/check.png)';
        }

        if(target.classList.contains('popup_calc_profile_button')){
            event.preventDefault();
            calc_profile.style.display = 'none'; //calc_profile close
            calc_end.style.display = 'block'; //cacl_end open

        }

        if(target.classList.contains('popup_calc')){
            calc.style.display = 'none';         //calc close
        } 

        if(target.classList.contains('popup_calc_profile')){
            calc_profile.style.display = 'none'; //calc_profile close
        } 

        if(event.target.tagName == 'STRONG') {
            calc.style.display = 'none';         //calc close
            calc_profile.style.display = 'none'; //calc_profile close
            calc_end.style.display = 'none'; //calc_end close
        }

            //prevju
        if(target.classList.contains('type1_img')){
            event.preventDefault();
            calc_img_one.style.display = "block";
            calc_img_two.style.display = "none";
            calc_img_three.style.display = "none";
            calc_img_four.style.display = "none";
        }

        if(target.classList.contains('type2_img')){
            event.preventDefault();
            calc_img_one.style.display = "none";
            calc_img_two.style.display = "block";
            calc_img_three.style.display = "none";
            calc_img_four.style.display = "none";
        }

        if(target.classList.contains('type3_img')){
            event.preventDefault();
            calc_img_one.style.display = "none";
            calc_img_two.style.display = "none";
            calc_img_three.style.display = "block";
            calc_img_four.style.display = "none";
        }

        if(target.classList.contains('type4_img')){
            event.preventDefault();
            calc_img_one.style.display = "none";
            calc_img_two.style.display = "none";
            calc_img_three.style.display = "none";
            calc_img_four.style.display = "block";
        }
    });




    check_cold.addEventListener('click', () => {
            check_warm.classList.toggle('checkbox-custom');
    });

    check_warm.addEventListener('click', () => {
            check_cold.classList.toggle('checkbox-custom');
    });
    
}