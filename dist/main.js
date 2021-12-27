/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timers */ \"./src/modules/timers.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./src/modules/validation.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"1 january 2022\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\"use strick\";\r\nconst menu = () => {\r\n    const menuBtn = document.querySelector(\".menu\");\r\n    const menu = document.querySelector(\"menu\");\r\n    const closeBtn = menu.querySelector(\".close-btn\");\r\n    const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n\r\n    const main = document.querySelector(\"main\");\r\n    const target = main.querySelector(\"a[href='#service-block']>img[src='images/scroll.svg']\");\r\n\r\n    const handleMenu = event => {\r\n        event.preventDefault();\r\n        menu.classList.toggle(\"active-menu\");\r\n    };\r\n    \r\n    const scrollF = event => {\r\n        event.preventDefault();\r\n        handleMenu(event);\r\n\r\n        let aimIndex = event.target.href.indexOf(\"#\");\r\n        let aimId = event.target.href.substring(aimIndex);\r\n        \r\n        let aim = document.querySelector(aimId);\r\n        aim.scrollIntoView({behavior: \"smooth\"});\r\n    };\r\n\r\n    const moveDown = event => {\r\n        event.preventDefault();\r\n        let aimAdr = target.parentElement;\r\n        let aimIndex = aimAdr.href.indexOf(\"#\");\r\n        let aimId = aimAdr.href.substring(aimIndex);\r\n        \r\n        let aim = document.querySelector(aimId);\r\n        aim.scrollIntoView({behavior: \"smooth\"});\r\n    };\r\n\r\n    menuBtn.addEventListener(\"click\", handleMenu);\r\n    closeBtn.addEventListener(\"click\", handleMenu);\r\n\r\n    menuItems.forEach(item => {\r\n        item.addEventListener(\"click\", scrollF);\r\n    });\r\n\r\n    target.addEventListener(\"click\", moveDown);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\"use strick\";\r\nconst modal = () => {\r\n    \r\n    const modal = document.querySelector(\".popup\");\r\n    const buttons = document.querySelectorAll(\".popup-btn\");\r\n    const btnClose = modal.querySelector(\".popup-close\");\r\n    const contentMenu = modal.querySelector(\".popup-content\");\r\n\r\n    let index = 0;\r\n\r\n    //let winWidth2 = document.documentElement.clientWidth;\r\n    \r\n    const showPopup = () => { \r\n        let animationFrameId = requestAnimationFrame(showPopup);\r\n        if (index < 100){\r\n            index++;\r\n            contentMenu.style.opacity = index / 100;\r\n        }\r\n        else{\r\n            index = 100;  \r\n            cancelAnimationFrame(animationFrameId);       \r\n        }     \r\n};\r\n\r\n    const closePopup = () => { \r\n        let animationFrameId = requestAnimationFrame(closePopup);\r\n        if (index > 0){\r\n            index--;\r\n            contentMenu.style.opacity = index / 200;\r\n        }\r\n        else{\r\n            index = 0;  \r\n            cancelAnimationFrame(animationFrameId);  \r\n            modal.style.display = \"none\";\r\n        }     \r\n   \r\n};\r\n    buttons.forEach( btn => {\r\n        btn.addEventListener(\"click\", () => {\r\n            modal.style.display = \"block\";\r\n            if(document.body.offsetWidth > 768){\r\n                contentMenu.style.opacity = 0;\r\n                showPopup();\r\n            }\r\n            else{\r\n                contentMenu.style.opacity = 100;\r\n            }\r\n        });\r\n    });\r\n\r\n    btnClose.addEventListener(\"click\", () => {\r\n        if(document.body.offsetWidth > 768){\r\n            closePopup();\r\n        }\r\n        else{\r\n            modal.style.display = \"none\";\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://webpack/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/timers.js":
/*!*******************************!*\
  !*** ./src/modules/timers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\"use strick\";\r\nconst timers = deadline => {   \r\n    //const timerDays = document.querySelector(\"#timer-days\");\r\n    const timerHours = document.querySelector(\"#timer-hours\");\r\n    const timerMinutes = document.querySelector(\"#timer-minutes\");\r\n    const timerSeconds = document.querySelector(\"#timer-seconds\");\r\n\r\n    const getTimeRemaining = deadline => {\r\n        \r\n        const dateStop = new Date(deadline).getTime();\r\n        const dateNow = new Date().getTime();\r\n\r\n        let timeRemaining = (dateStop - dateNow)/1000;\r\n\r\n        //let days = Math.floor(timeRemaining / 3600 /24);\r\n        let hours = Math.floor(timeRemaining / 3600);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return { timeRemaining, hours, minutes, seconds };\r\n        \r\n    };\r\n\r\n    const updateClock = getTime => {\r\n        getTime = getTimeRemaining(deadline);\r\n        for (let k in getTime){\r\n            if (getTime[k] < 10) {\r\n                getTime[k] = \"0\" + getTime[k];\r\n            }\r\n        }\r\n        //timerDays.textContent = getTime.days;\r\n        timerHours.textContent = getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes;\r\n        timerSeconds.textContent = getTime.seconds;    \r\n    };\r\n\r\n    const setZero = () => {\r\n        const timers = document.querySelector(\"#timer\");\r\n        timers.style.color = \"red\";\r\n        //timerDays.textContent = \"00\";\r\n        timerHours.textContent = \"00\";\r\n        timerMinutes.textContent = \"00\";\r\n        timerSeconds.textContent = \"00\";\r\n    };\r\n\r\n        const start = () => {\r\n        let getTime = getTimeRemaining(deadline);\r\n\r\n        if(getTime.timeRemaining > 0){        \r\n            updateClock(getTime);\r\n            setInterval(updateClock, 1000, getTime);\r\n        }\r\n        else{\r\n            setZero();\r\n        }\r\n   };\r\n   start();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timers);\r\n\n\n//# sourceURL=webpack://webpack/./src/modules/timers.js?");

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n    const calcBlock = document.querySelector(\"div[class='calc-block']\");\r\n    \r\n    const calcSelect = calcBlock.querySelector(\"select\");\r\n    const calcInputArr = calcBlock.querySelectorAll(\"input[type='text']\");\r\n\r\n    calcInputArr.forEach(input => {\r\n        input.addEventListener(\"input\", e => {\r\n            e.target.value = e.target.value.replace(/\\D+/,\"\");\r\n        });\r\n    });\r\n\r\n    calcSelect.addEventListener(\"change\", () => {\r\n        calcInputArr.forEach(input => {\r\n            input.value = \"\";\r\n        });\r\n    });\r\n\r\n\r\n    const texts = document.querySelectorAll(\"input[type='text']\");\r\n    const emails = document.querySelectorAll(\"input[type='email']\");\r\n    const tels = document.querySelectorAll(\"input[type='tel']\");\r\n    const submits = document.querySelectorAll(\"button[type='submit']\");\r\n    const message = document.querySelector(\"#form2-message\");\r\n\r\n    texts.forEach(text => {\r\n        text.addEventListener(\"input\", e => {\r\n            //console.log(e.target);\r\n            let val = e.target.value;\r\n            const letters = /^[А-Яа-яёЁ]+$/;\r\n            if(!val.match(letters)){\r\n                alert('Неверный формат ввода');\r\n                e.target.value = \"\";\r\n            }\r\n        });\r\n    });\r\n\r\n    tels.forEach(input => {\r\n        input.addEventListener(\"input\", e => {\r\n            e.target.value = e.target.value.replace(/\\D+/,\"\");\r\n        });\r\n    });\r\n\r\n    message.addEventListener(\"input\", e => {\r\n            let val = e.target.value;\r\n            const letters = /^[А-Яа-яёЁ]+$/;\r\n            if(!val.match(letters)){\r\n                alert('Неверный формат ввода');\r\n                e.target.value = \"\";\r\n            }\r\n        });\r\n\r\n\r\n    submits.forEach(submit => {\r\n        submit.addEventListener(\"click\", e => {\r\n            e.preventDefault();\r\n            const div = e.target.parentNode.parentNode.parentNode;\r\n            const email = div.querySelector(\"input[type='email']\");\r\n            \r\n            if(!validateEmail(email.value)){\r\n                alert(\"address is not correct\");\r\n                email.value = \"\";\r\n            }\r\n            else{\r\n                alert(\"submit\");\r\n            }\r\n        });\r\n    });\r\n    \r\n    const validateEmail = email => {\r\n    return String(email)\r\n        .toLowerCase()\r\n        .match(\r\n        /[\\-\\_\\.\\!\\~\\*\\'\\w]+@([\\w]+\\.)+[\\w]+/gi\r\n        );\r\n    };//  @  -  _  . ! ~ * '\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://webpack/./src/modules/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;