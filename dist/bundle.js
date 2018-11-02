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
/* harmony import */ var _parts_modal_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parts/modal_time */ "./parts/modal_time.js");
/* harmony import */ var _parts_modal_popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/modal_popup */ "./parts/modal_popup.js");










window.addEventListener('DOMContentLoaded', function () {
  Object(_parts_modal__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_parts_forms_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_parts_calc__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_parts_forms_page__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_parts_tabs_wind__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_parts_tabs_finish__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_parts_timer__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_parts_img_click__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_parts_modal_time__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_parts_modal_popup__WEBPACK_IMPORTED_MODULE_9__["default"])();
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
function calc() {}

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
function forms_modal() {}

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
function img_click() {}

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
  var body = document.querySelector('body'),
      mdl = document.querySelector('.popup_engineer'),
      btn_close = mdl.querySelector('.popup_close');
  body.addEventListener('click', function (e) {
    var target = e.target;

    if (target.classList.contains('header_btn')) {
      mdl.style.display = 'block';
    }

    if (target.classList.contains('popup_engineer')) {
      mdl.style.display = 'none';
    }
  });
  btn_close.addEventListener('click', function () {
    mdl.style.display = 'none';
  });
} //btn_mdl = document.querySelector('.header_btn'),

/* body.addEventListener('click', function(e){
            let target = e.target;
    
            if(target.classList.contains('header_btn')){
                mdl.style.display = 'block';
            }
    
            if(target.classList.contains('fun_close')) {
                mdl.style.display = 'none';
            }
        });*/

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

/***/ "./parts/modal_time.js":
/*!*****************************!*\
  !*** ./parts/modal_time.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal_time; });
function modal_time() {}

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
function tabs_finish() {}

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

      if (tm.total <= 0) {
        clearInterval(timeInterval);
        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
      }
    };

    var timeInterval = setInterval(updateClock, 1000);
  };

  setClock('timer', deadLine);
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map