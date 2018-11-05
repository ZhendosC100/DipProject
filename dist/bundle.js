/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/modal */ "./parts/modal.js");
/* harmony import */ var _parts_forms_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/forms_modal */ "./parts/forms_modal.js");
/* harmony import */ var _parts_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/calc */ "./parts/calc.js");
/* harmony import */ var _parts_forms_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/forms_page */ "./parts/forms_page.js");
/* harmony import */ var _parts_tabs_wind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/tabs_wind */ "./parts/tabs_wind.js");
/* harmony import */ var _parts_tabs_finish__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/tabs_finish */ "./parts/tabs_finish.js");
/* harmony import */ var _parts_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parts/timer */ "./parts/timer.js");
/* harmony import */ var _parts_img_click__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parts/img_click */ "./parts/img_click.js");
/* harmony import */ var _parts_modal_popup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parts/modal_popup */ "./parts/modal_popup.js");









window.addEventListener('DOMContentLoaded', function () {
  Object(_parts_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_parts_forms_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_parts_calc__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_parts_forms_page__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_parts_tabs_wind__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_parts_tabs_finish__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_parts_timer__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_parts_img_click__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_parts_modal_popup__WEBPACK_IMPORTED_MODULE_8__["default"])();
});

/***/ }),

/***/ "./parts/calc.js":
/*!***********************!*\
  !*** ./parts/calc.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calc; });
function calc() {
  var calc = document.querySelector('.popup_calc'),
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
  body_calc.addEventListener('click', function (event) {
    //event.preventDefault();
    var target = event.target;
    console.log(event.target);

    if (target.classList.contains('glazing_price_btn')) {
      calc.style.display = 'block'; //calc open
    }

    if (target.classList.contains('popup_calc_button')) {
      event.preventDefault();

      if (inp_width.value != "" && inp_height.value != "") {
        calc.style.display = 'none'; //calc close

        calc_profile.style.display = 'block'; //calc_profile open
      } else {
        alert('Введите все данные');
      } //check_cold.style.background = 'url(../img/modal_calc/check.png)';

    }

    if (target.classList.contains('popup_calc_profile_button')) {
      event.preventDefault();
      calc_profile.style.display = 'none'; //calc_profile close

      calc_end.style.display = 'block'; //cacl_end open
    }

    if (target.classList.contains('popup_calc')) {
      calc.style.display = 'none'; //calc close
    }

    if (target.classList.contains('popup_calc_profile')) {
      calc_profile.style.display = 'none'; //calc_profile close
    }

    if (event.target.tagName == 'STRONG') {
      calc.style.display = 'none'; //calc close

      calc_profile.style.display = 'none'; //calc_profile close

      calc_end.style.display = 'none'; //calc_end close
    } //prevju to close 3,4 and 1,2


    var toClose_one = function toClose_one() {
      event.preventDefault();
      calc_img_three.style.display = "none";
      calc_img_four.style.display = "none";
    };

    var toClose_two = function toClose_two() {
      event.preventDefault();
      calc_img_one.style.display = "none";
      calc_img_two.style.display = "none";
    }; //prevju


    if (target.classList.contains('type1_img')) {
      toClose_one();
      calc_img_one.style.display = "block";
      calc_img_two.style.display = "none";
    }

    if (target.classList.contains('type2_img')) {
      toClose_one();
      calc_img_one.style.display = "none";
      calc_img_two.style.display = "block";
    }

    if (target.classList.contains('type3_img')) {
      toClose_two();
      calc_img_three.style.display = "block";
      calc_img_four.style.display = "none";
    }

    if (target.classList.contains('type4_img')) {
      toClose_two();
      calc_img_three.style.display = "none";
      calc_img_four.style.display = "block";
    }
  }); //select profil

  var selectElem = document.getElementById('view_type'),
      sel_profil;
  selectElem.addEventListener('change', function (event) {
    //let value = e.target.value;
    var currency = currentCurrency(event.target.children);
    sel_profil = "".concat(currency);
  });

  function currentCurrency(elements) {
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].selected) return elements[i].innerHTML;
    }
  } //to check cold/warm


  var cold_item, warm_item;
  check_cold.addEventListener('click', function () {
    check_warm.classList.toggle('checkbox-custom');

    if (check_warm.classList.toggle('checkbox-custom' == true)) {
      cold_item = 'Холодное';
      console.log(cold_item);
    } else {
      cold_item = "-";
    }
  });
  console.log(cold_item);
  check_warm.addEventListener('click', function () {
    check_cold.classList.toggle('checkbox-custom');

    if (check_cold.classList.toggle('checkbox-custom' == true)) {
      warm_item = 'Теплое';
      console.log(warm_item);
    } else {
      warm_item = "-";
    }
  }); //form of calculator

  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с Вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  function inp_calc(m) {
    m[1].addEventListener('input', function () {
      m[1].value = m[1].value.replace(/[^0-9+]/ig, ''); //делаем невозможным ввод других символов, кроме указанных
    });
  }

  var form_calc = document.getElementById('form_calc'),
      calc_input = form_calc.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  inp_calc(calc_input); //Прописываем запрос

  function sendForm(elem) {
    elem.addEventListener('submit', function (event) {
      event.preventDefault();
      elem.appendChild(statusMessage);
      var formData = new FormData(elem);
      var obj = {}; //Вариант отправки через JSON

      formData.forEach(function (value, key) {
        //Вариант отправки через JSON
        obj[key] = value; //Вариант отправки через JSON
      });
      obj["width"] = inp_width.value;
      obj["height"] = inp_height.value;
      obj["Type 1"] = cold_item;
      obj["Type 2"] = warm_item;
      obj["Тип профиля"] = sel_profil;
      var json = JSON.stringify(obj);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open('POST', 'server.json');
          request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //Вариант отправки через JSON        

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4 && request.readyState == 200) {
              resolve();
            } else {
              reject();
            }
          };

          request.send(data);
        });
      } // end of function postData 


      function clrToAllInput(k) {
        for (var i = 0; i < k.length; i++) {
          k[i].value = '';
        }
      }

      function clearInput() {
        //обнуляем все input

        /*for(let i = 0; i < input.length; i++){
            input[i].value = '';
        }*/
        clrToAllInput(calc_input); //form calc

        inp_width.value = '';
        inp_height.value = '';
      }

      postData(json).then(function () {
        return statusMessage.innerHTML = message.loading;
      }).then(function () {
        return statusMessage.innerHTML = message.success;
      }).catch(function () {
        return statusMessage.innerHTML = message.failure;
      }).then(clearInput);
    });
  }

  sendForm(form_calc); //modal_time_60sec
}

/***/ }),

/***/ "./parts/forms_modal.js":
/*!******************************!*\
  !*** ./parts/forms_modal.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return forms_modal; });
function forms_modal() {
  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с Вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  function inp_form(m) {
    m[1].addEventListener('input', function () {
      m[1].value = m[1].value.replace(/[^0-9+]/ig, ''); //делаем невозможным ввод других символов, кроме указанных
    });
  } //modal_time_60sec


  var form_time = document.getElementById('modal_form_time'),
      input = form_time.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  inp_form(input); //modal

  var form_modal = document.getElementById('modal_form'),
      input_modal = form_modal.getElementsByTagName('input');
  inp_form(input_modal); // только цифры
  //form one 

  var form_one = document.getElementById('form_one'),
      input_one = form_one.getElementsByTagName('input');
  inp_form(input_one); //form two

  var form_two = document.getElementById('form_two'),
      input_two = form_two.getElementsByTagName('input');
  inp_form(input_two); //form three

  var form_three = document.getElementById('form_three'),
      input_three = form_three.getElementsByTagName('input');
  inp_form(input_three); //form four

  var form_four = document.getElementById('form_four'),
      input_four = form_four.getElementsByTagName('input');
  inp_form(input_four); //form five

  var form_five = document.getElementById('form_five'),
      input_five = form_five.getElementsByTagName('input');
  inp_form(input_five); //form six

  var form_six = document.getElementById('form_six'),
      input_six = form_six.getElementsByTagName('input');
  inp_form(input_six); //Прописываем запрос

  function sendForm(elem) {
    elem.addEventListener('submit', function (event) {
      event.preventDefault();
      elem.appendChild(statusMessage);
      var formData = new FormData(elem);
      var obj = {}; //Вариант отправки через JSON

      formData.forEach(function (value, key) {
        //Вариант отправки через JSON
        obj[key] = value; //Вариант отправки через JSON
      });
      var json = JSON.stringify(obj);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open('POST', 'server.json');
          request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //Вариант отправки через JSON        

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4 && request.readyState == 200) {
              resolve();
            } else {
              reject();
            }
          };

          request.send(data);
        });
      } // end of function postData 


      function clrToAllInput(k) {
        for (var i = 0; i < k.length; i++) {
          k[i].value = '';
        }
      }

      function clearInput() {
        //обнуляем все input

        /*for(let i = 0; i < input.length; i++){
            input[i].value = '';
        }*/
        clrToAllInput(input); //form_modal_60sec

        clrToAllInput(input_modal); //modal

        clrToAllInput(input_one); //form_one

        clrToAllInput(input_two); //form_two

        clrToAllInput(input_three); //form_three

        clrToAllInput(input_four); //form_four

        clrToAllInput(input_five); //form five

        clrToAllInput(input_six); //form six
      }

      postData(json).then(function () {
        return statusMessage.innerHTML = message.loading;
      }).then(function () {
        return statusMessage.innerHTML = message.success;
      }).catch(function () {
        return statusMessage.innerHTML = message.failure;
      }).then(clearInput);
    });
  }

  sendForm(form_time); //modal_time_60sec

  sendForm(form_modal); //modal

  sendForm(form_one); //form one

  sendForm(form_two); //form two

  sendForm(form_three); //form three

  sendForm(form_four); //form four

  sendForm(form_five); //form five

  sendForm(form_six); //form six
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

/***/ }),

/***/ "./parts/forms_page.js":
/*!*****************************!*\
  !*** ./parts/forms_page.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return forms_page; });
function forms_page() {}

/***/ }),

/***/ "./parts/img_click.js":
/*!****************************!*\
  !*** ./parts/img_click.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return img_click; });
function img_click() {
  var body_img = document.querySelector('body'),
      works = document.querySelector('.works'),
      div = document.createElement('div'),
      section_sub = works.querySelector('.section_header_sub');
  div.classList.add('big_image');
  works.appendChild(div);
  console.log(div);
  body_img.addEventListener('click', function (e) {
    var target = e.target; //console.log(e.target);

    if (target.classList.contains('section_header_sub')) {
      section_sub.style.display = "none";
      div.style.display = 'none';
      div.style.backgroundImage = "none";
    }

    var toBig = function toBig() {
      e.preventDefault();
      section_sub.style.display = "block";
      div.style.display = 'block';
    };

    if (target.classList.contains('a_img_one')) {
      toBig();
      div.style.background = "url(img/our_works/big_img/1.png) no-repeat";
    }

    if (target.classList.contains('a_img_two')) {
      toBig();
      div.style.background = "url(img/our_works/big_img/2.png) no-repeat";
    }

    if (target.classList.contains('a_img_three')) {
      toBig();
      div.style.background = "url(img/our_works/big_img/3.png) no-repeat";
    }

    if (target.classList.contains('a_img_four')) {
      toBig();
      div.style.background = "url(img/our_works/big_img/4.png) no-repeat";
    }

    if (target.classList.contains('a_img_five')) {
      toBig();
      div.style.background = "url(img/our_works/big_img/5.png) no-repeat";
    }

    if (target.classList.contains('a_img_six')) {
      toBig();
      div.style.background = "url(img/our_works/big_img/6.png) no-repeat";
    }

    if (target.classList.contains('a_img_seven')) {
      toBig();
      div.style.background = "url(img/our_works/big_img/7.png) no-repeat";
    }

    if (target.classList.contains('a_img_eight')) {
      toBig();
      div.style.background = "url(img/our_works/big_img/8.png) no-repeat";
    }
  });
}

/***/ }),

/***/ "./parts/modal.js":
/*!************************!*\
  !*** ./parts/modal.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal; });
function modal() {
  //modal
  var body = document.querySelector('body'),
      mdl = document.querySelector('.popup_engineer'),
      // modal
  mdl_time = document.querySelector('.popup'); //modal 60sek

  body.addEventListener('click', function (e) {
    var target = e.target;
    console.log(e.target);

    if (target.classList.contains('header_btn')) {
      //modal
      mdl.style.display = 'block';
    }

    if (target.classList.contains('phone_link')) {
      //modal 60sek at link
      mdl_time.style.display = 'block';
    }

    if (target.classList.contains('popup_engineer')) {
      //modal close
      mdl.style.display = 'none';
    }

    if (target.classList.contains('popup')) {
      //modal 60s close
      mdl_time.style.display = 'none';
    }

    if (e.target.tagName == 'STRONG') {
      mdl.style.display = 'none'; //modal close

      mdl_time.style.display = 'none'; //modal 60sek close
    }
  }); //modal 60sek

  var mdl_delay = function mdl_delay() {
    mdl_time.style.display = 'block';
  };

  setTimeout(mdl_delay, 60000);
}

/***/ }),

/***/ "./parts/modal_popup.js":
/*!******************************!*\
  !*** ./parts/modal_popup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal_popup; });
function modal_popup() {}

/***/ }),

/***/ "./parts/tabs_finish.js":
/*!******************************!*\
  !*** ./parts/tabs_finish.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tabs_finish; });
function tabs_finish() {
  var body_tabs = document.querySelector('body'),
      slider_dec = document.querySelector('.decoration_slider'),
      //tabs_dec = slider_dec.querySelectorAll('.decoration_item'),
  internal_link = slider_dec.querySelector('.internal_link'),
      external_link = slider_dec.querySelector('.external_link'),
      rising_link = slider_dec.querySelector('.rising_link'),
      roof_link = slider_dec.querySelector('.roof_link'),
      dec_content = document.querySelector('.decoration_content'),
      internal = dec_content.querySelector('.internal'),
      external = dec_content.querySelector('.external'),
      rising = dec_content.querySelector('.rising'),
      roof = dec_content.querySelector('.roof');

  var toActive = function toActive(a) {
    a.classList.add('after_click');
  };

  var disActive = function disActive(b) {
    b.classList.remove('after_click');
  };

  var displayOn = function displayOn(c) {
    c.style.display = 'block';
  };

  var displayNone = function displayNone(d) {
    d.style.display = 'none';
  };

  body_tabs.addEventListener('click', function (event) {
    var target = event.target;

    if (target.classList.contains('internal_lnk')) {
      //event.preventDefault();
      //activited/deactived tabs 
      toActive(internal_link);
      disActive(external_link);
      disActive(rising_link);
      disActive(roof_link); //end
      //display block/none content of tabs

      displayOn(internal);
      displayNone(external);
      displayNone(rising);
      displayNone(roof); //end
    }

    if (target.classList.contains('external_lnk')) {
      //event.preventDefault();
      //activited/deactived tabs
      toActive(external_link);
      disActive(roof_link);
      disActive(internal_link);
      disActive(rising_link); //end
      //display block/none content of tabs

      displayOn(external);
      displayNone(internal);
      displayNone(rising);
      displayNone(roof); //end
    }

    if (target.classList.contains('rising_lnk')) {
      //event.preventDefault();
      //activited/deactived tabs
      toActive(rising_link);
      disActive(roof_link);
      disActive(internal_link);
      disActive(external_link); //end
      //display block/none content of tabs

      displayOn(rising);
      displayNone(internal);
      displayNone(external);
      displayNone(roof); //end
    }

    if (target.classList.contains('roof_lnk')) {
      //event.preventDefault();
      //activited/deactived tabs
      toActive(roof_link);
      disActive(external_link);
      disActive(internal_link);
      disActive(rising_link); //end
      //display block/none content of tabs

      displayOn(roof);
      displayNone(internal);
      displayNone(external);
      displayNone(rising); //end
    }
  });
}
/*let tab = document.querySelectorAll('.info-header-tab'),
info = document.querySelector('.info-header'),
tabContent = document.querySelectorAll('.info-tabcontent');

//функция скрывающая табы
const hideTabContent = (a) => {
for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
}
};
hideTabContent(1);

//функция показывающая tabContent
const showTabContent = (b) => {
for (let i = b; i < tabContent.length; i++) {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }

}
};

//назначение обработчика событий при клике на каждый из табов
info.addEventListener('click', (event) => {
let target = event.target; //делегирование события
if (target && target.classList.contains('info-header-tab')) { //делегирование события
    for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
            hideTabContent(0);
            showTabContent(i);
            break;
        }
    }
}
});*/

/***/ }),

/***/ "./parts/tabs_wind.js":
/*!****************************!*\
  !*** ./parts/tabs_wind.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tabs_wind; });
function tabs_wind() {}

/***/ }),

/***/ "./parts/timer.js":
/*!************************!*\
  !*** ./parts/timer.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return timer; });
function timer() {
  var deadLine = '2018-11-07';

  var getTimeRemaining = function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        //.parse превращает любую дату в мс  и используем для остановки таймера как только t<=0 таймер останавливатеся 
    seconds = Math.floor(t / 1000 % 60),
        //Math.floor() для округления, (t/1000)%60 берем остаток секунд от минуты
    minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      //вычленяем значения полностью времени, часов, минут, секунд в массив
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  var setClock = function setClock(id
  /*id элемента с которым будет работать*/
  , endtime
  /*переменная времени остановки*/
  ) {
    var days = document.querySelector('.days'),
        hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds');

    var updateClock = function updateClock() {
      var tm = getTimeRemaining(endtime);
      /*function timerOn(n) {
          n.innerHTML = (`0${tm.n}`).slice(-2);
      }
            timerOn(days);
          timerOn(hours);
          timerOn(minutes);
          timerOn(seconds);*/

      days.innerHTML = "0".concat(tm.days).slice(-2);
      hours.innerHTML = "0".concat(tm.hours).slice(-2);
      minutes.innerHTML = "0".concat(tm.minutes).slice(-2);
      seconds.innerHTML = "0".concat(tm.seconds).slice(-2); //остановка таймера

      function timerOff(n) {
        n.innerHTML = "00";
      }

      if (tm.total <= 0) {
        clearInterval(timeInterval);
        timerOff(days);
        timerOff(hours);
        timerOff(minutes);
        timerOff(seconds);
      }
    };

    var timeInterval = setInterval(updateClock, 1000);
  };

  setClock('timer', deadLine);
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map