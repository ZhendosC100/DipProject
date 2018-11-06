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
        check_cold = document.getElementById('cold'),
        check_warm = document.getElementById('warm'),
        body_calc = document.querySelector('body'),
        notice_calc = document.querySelectorAll('.form_notice')[8];

        calc_img_one.style.display = "block";
        

        function replace() {
            this.value = this.value.replace(/[^\d]/ig, '');
        }
        
            inp_width.oninput = replace;
            inp_height.oninput = replace;

    body_calc.addEventListener('click', function(event){
        let target = event.target;


        if(target.classList.contains('glazing_price_btn')){
            calc.style.display = 'block';                           //calc open
        }

        if(target.classList.contains('popup_calc_button')){
            event.preventDefault();
           if(inp_width.value !="" && inp_height.value != "") 
                {
                    calc.style.display = 'none';                      //calc close
                    calc_profile.style.display = 'block';             //calc_profile open
                } else {
                    alert('Введите все данные');
                }           
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
            notice_calc.innerHTML = "Перезвоним в течение 10 минут";
        }


        //prevju to close 3,4 and 1,2
        const toClose_one = () => {
            event.preventDefault();
            calc_img_three.style.display = "none";
            calc_img_four.style.display = "none";
        };

        const toClose_two = () => {
            event.preventDefault();
            calc_img_one.style.display = "none";
            calc_img_two.style.display = "none";
        };

            //prevju
        if(target.classList.contains('type1_img')){
            toClose_one();
            calc_img_one.style.display = "block";
            calc_img_two.style.display = "none";
        }

        if(target.classList.contains('type2_img')){
            toClose_one();
            calc_img_one.style.display = "none";
            calc_img_two.style.display = "block";
        }

        if(target.classList.contains('type3_img')){
            toClose_two();
            calc_img_three.style.display = "block";
            calc_img_four.style.display = "none";
        }

        if(target.classList.contains('type4_img')){
            toClose_two();
            calc_img_three.style.display = "none";
            calc_img_four.style.display = "block";
        }
    });


//select profil
    let selectElem = document.getElementById('view_type'),
        sel_profil;

        selectElem.addEventListener('change', (event) => {
            let currency = currentCurrency(event.target.children);
                sel_profil = `${currency}`;
  });

  function currentCurrency(elements) {
    for(let i = 0; i < elements.length; i++) {
      if(elements[i].selected) return elements[i].innerHTML;
    }
  }

 

//to check cold/warm
    let cold_item,
        warm_item;

    
    check_cold.addEventListener('click', () => {
            check_warm.classList.toggle('checkbox-custom');
            if(check_warm.classList.toggle('checkbox-custom' == true)){
                cold_item = 'Холодное';
            }else {
                cold_item ="-";
            }
    });


    check_warm.addEventListener('click', () => {
            check_cold.classList.toggle('checkbox-custom');
            if(check_cold.classList.toggle('checkbox-custom' == true)){
                warm_item = 'Теплое';
            }else {
                warm_item ="-";
            }
    });
    //form of calculator

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    function inp_calc(m) {
        m[1].addEventListener('input', () => {
            m[1].value = m[1].value.replace(/[^0-9+]/ig, ''); //делаем невозможным ввод других символов, кроме указанных
        });
    }

    let form_calc = document.getElementById('form_calc'),
        calc_input = form_calc.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        inp_calc(calc_input);


     //Прописываем запрос
     function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            
            let formData = new FormData(elem);
    
            let obj = {};                            //Вариант отправки через JSON
            formData.forEach(function(value, key) {  //Вариант отправки через JSON
                obj[key] = value;                   //Вариант отправки через JSON
            });

            obj["width"] = inp_width.value;
            obj["height"]= inp_height.value;
            obj["Type 1"] = cold_item;
            obj["Type 2"] = warm_item;
            obj["Тип профиля"] = sel_profil;

            let json = JSON.stringify(obj);
    
        function postData(data){
    
            return new Promise(function (resolve,reject){
                let request = new XMLHttpRequest();
                    request.open('POST', 'server.json');
                    request.setRequestHeader ('Content-type', 'application/json; charset=utf-8');//Вариант отправки через JSON        
    
                    
                request.onreadystatechange = function(){
                    if(request.readyState < 4) {
                        resolve();
                    } else if(request.readyState === 4 && request.readyState ==200){
                            resolve();
                    } else{
                           reject();
                     
                    }
                };                   
    
                    request.send(data);
            });
               
            } // end of function postData 

            function clrToAllInput(k) {
                for(let i = 0; i < k.length; i++){
                    k[i].value = '';
                }

            }
            
        function clearInput(){              //обнуляем все input

            clrToAllInput(calc_input);       //form calc
            inp_width.value = '';
            inp_height.value = '';

           
        
        }
            
        postData(json)
                .then(() => notice_calc.innerHTML = message.loading)
                .then(() => notice_calc.innerHTML = message.success)
                .catch(() => notice_calc.innerHTML = message.failure)
                .then(clearInput);
            
        });
    }
    sendForm(form_calc);   //modal_time_60sec
    
}