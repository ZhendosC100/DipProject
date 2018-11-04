export default function forms_modal(){
    //modal
let form = document.getElementById('modal_form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    //statusMessage.classList.add('status');
    input[1].addEventListener('input', () => {
        input[1].value = input[1].value.replace(/[^0-9+]/ig, ''); //делаем невозможным ввод других символов, кроме указанных
    });

    //Прописываем запрос
    function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
            console.log('2');
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
            
        function clearInput(){              //обнуляем все input
            for(let i = 0; i < input.length; i++){
                input[i].value = '';
            }
        }
    
        postData(json)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
            
        });
    }
    sendForm(form);
 
}



/*form.addEventListener('submit', function(event) {
        
    event.preventDefault();
    form.appendChild(statusMessage);

    //создаем сам запрос чтобы отправить данные на сервер
    let request = new XMLHttpRequest();
    request.open('POST', 'server.json');

    request.setRequestHeader ('Content-type', 'application/json; charset=utf-8');//Вариант отправки через JSON

    let formData = new FormData(form);

    let obj = {};                            //Вариант отправки через JSON
    formData.forEach(function(value, key) {  //Вариант отправки через JSON
        obj[key] = value;                   //Вариант отправки через JSON
    });
    let json = JSON.stringify(obj);         //Вариант отправки через JSON
    request.send(json);                     //Вариант отправки через JSON

});*/




