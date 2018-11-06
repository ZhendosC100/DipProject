export default function forms_modal(){
    
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    function inp_form(m) {
        m[1].addEventListener('input', () => {
            m[1].value = m[1].value.replace(/[^0-9+]/ig, ''); //делаем невозможным ввод других символов, кроме указанных
        });
    }

    let notice_forms = document.querySelectorAll('.form_notice');
     //modal_time_60sec
    let form_time = document.getElementById('modal_form_time'),
        input = form_time.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        notice_time = notice_forms[7];

        inp_form(input);
    

    //modal

    let form_modal = document.getElementById('modal_form'),
        input_modal = form_modal.getElementsByTagName('input'),
        notice_modal = notice_forms[6];

        inp_form(input_modal);// только цифры
       

    //form one 
    let form_one = document.getElementById('form_one'),
        input_one = form_one.getElementsByTagName('input'),
        notice_f_one = notice_forms[0];

        inp_form(input_one);

    //form two
    let form_two = document.getElementById('form_two'),
        input_two = form_two.getElementsByTagName('input'),
        notice_f_two = notice_forms[1];

        inp_form(input_two);

    //form three
    let form_three = document.getElementById('form_three'),
        input_three = form_three.getElementsByTagName('input'),
        notice_f_three = notice_forms[2];

        inp_form(input_three);

    //form four
    let form_four = document.getElementById('form_four'),
        input_four = form_four.getElementsByTagName('input'),
        notice_f_four = notice_forms[3];

        inp_form(input_four);

    //form five
    let form_five = document.getElementById('form_five'),
        input_five = form_five.getElementsByTagName('input'),
        notice_f_five = notice_forms[4];

        inp_form(input_five);

    //form six
    let form_six = document.getElementById('form_six'),
        input_six = form_six.getElementsByTagName('input'),
        notice_f_six = notice_forms[5];

        inp_form(input_six);

      /*  function sendMessage(m){
            m.innerHTML = message.loading;
            m.innerHTML = message.success;
            m.innerHTML = message.failure;
        }*/

        

       /* function toMessageLoad(l){
            l.innerHTML = message.loading;     
        }

        function toMessageSucces(s){
            s.innerHTML = message.success;
        }

        function toMessageFailure(f){
            m.innerHTML = message.failure;
        }*/
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
            /*for(let i = 0; i < input.length; i++){
                input[i].value = '';
            }*/

            clrToAllInput(input);       //form_modal_60sec
            clrToAllInput(input_modal); //modal
            clrToAllInput(input_one);   //form_one
            clrToAllInput(input_two);   //form_two
            clrToAllInput(input_three); //form_three
            clrToAllInput(input_four);  //form_four
            clrToAllInput(input_five);  //form five
            clrToAllInput(input_six);   //form six
        
        }
            
            postData(json)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
            
        });
    }
    sendForm(form_time);   //modal_time_60sec
    sendForm(form_modal); //modal
    sendForm(form_one);    //form one
    sendForm(form_two);    //form two
    sendForm(form_three);  //form three
    sendForm(form_four);   //form four
    sendForm(form_five);   //form five
    sendForm(form_six);    //form six

 
}





