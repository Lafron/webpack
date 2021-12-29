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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timers */ \"./src/modules/timers.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./src/modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"1 january 2022\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100);\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = price => {\r\n    const calcBlock = document.querySelector(\".calc-block\");\r\n    const calcType = document.querySelector(\".calc-type\");\r\n    const calcSquare = document.querySelector(\".calc-square\");\r\n    const calcCount = document.querySelector(\".calc-count\");\r\n    const calcDay = document.querySelector(\".calc-day\");\r\n    const total = document.querySelector(\"#total\");\r\n\r\n\r\n    const countCalc = () => {\r\n        let index = calcType.selectedIndex;\r\n        const calcTypeValue = +calcType.options[index].value;\r\n        const calcSquareValue = calcSquare.value;\r\n\r\n        let totalValue = 0;\r\n        let calcCountValue = 1;\r\n        let calcDayValue = 1;\r\n\r\n        if(calcCount.value > 1){\r\n            calcCountValue += +calcCount.value / 10;\r\n        }\r\n\r\n        if(calcDay.value && calcDay.value < 5){\r\n            calcDayValue = 2;\r\n        }\r\n        else if(calcDay.value && calcDay.value < 10){\r\n            calcDayValue = 1.5;\r\n        }\r\n\r\n        if(calcType.value && calcSquare.value){\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n        }\r\n        else{\r\n            totalValue = 0;\r\n        }\r\n\r\n        total.textContent = totalValue; \r\n        \r\n    };\r\n\r\n    calcBlock.addEventListener(\"input\", e => {\r\n        const tar = e.target;\r\n        if(tar === calcType || tar === calcSquare ||\r\n             tar === calcCount || tar === calcDay){\r\n                countCalc();\r\n        }\r\n    });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://webpack/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\"use strick\";\r\nconst menu = () => {\r\n    const menu = document.querySelector(\"menu\");\r\n    const main = document.querySelector(\"main\");\r\n\r\n    const handleMenu = e => {\r\n        e.preventDefault();\r\n        menu.classList.toggle(\"active-menu\");\r\n    };\r\n    \r\n    const scrollF = e => {\r\n        e.preventDefault();\r\n        handleMenu(e);\r\n\r\n        let aimIndex = e.target.href.indexOf(\"#\");\r\n        let aimId = e.target.href.substring(aimIndex);\r\n        \r\n        let aim = document.querySelector(aimId);\r\n        aim.scrollIntoView({behavior: \"smooth\"});\r\n    };\r\n\r\n    const moveDown = e => {\r\n        e.preventDefault();\r\n        let aimAdr = e.target.parentElement;\r\n        let aimIndex = aimAdr.href.indexOf(\"#\");\r\n        let aimId = aimAdr.href.substring(aimIndex);\r\n        \r\n        let aim = document.querySelector(aimId);\r\n        aim.scrollIntoView({behavior: \"smooth\"});\r\n    };\r\n\r\n    menu.addEventListener(\"click\", e =>{\r\n        if(e.target.closest(\".close-btn\")){\r\n            handleMenu(e);            \r\n        }\r\n        else if(e.target.closest(\"li>a\")){\r\n            scrollF(e);\r\n        }\r\n    });\r\n\r\n    main.addEventListener(\"click\", e => {\r\n        if(e.target.closest(\".menu\")){\r\n            handleMenu(e);\r\n        }\r\n        else if(e.target.closest(\"a\")) {\r\n            moveDown(e);\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\"use strick\";\r\nconst modal = () => {\r\n    \r\n    const modal = document.querySelector(\".popup\");\r\n    const buttons = document.querySelectorAll(\".popup-btn\");\r\n    const contentMenu = modal.querySelector(\".popup-content\");\r\n\r\n    let index = 0;\r\n    \r\n    const showPopup = () => { \r\n        let animationFrameId = requestAnimationFrame(showPopup);\r\n        if (index < 100){\r\n            index++;\r\n            contentMenu.style.opacity = index / 100;\r\n        }\r\n        else{\r\n            index = 100;  \r\n            cancelAnimationFrame(animationFrameId);       \r\n        }     \r\n};\r\n\r\n    const closePopup = () => { \r\n        let animationFrameId = requestAnimationFrame(closePopup);\r\n        if (index > 0){\r\n            index = index - 3;\r\n            contentMenu.style.opacity = index / 100;\r\n        }\r\n        else{\r\n            index = 0;  \r\n            cancelAnimationFrame(animationFrameId);  \r\n            modal.style.display = \"none\";\r\n        }     \r\n   \r\n};\r\n    buttons.forEach( btn => {\r\n        btn.addEventListener(\"click\", () => {\r\n            modal.style.display = \"block\";\r\n            if(document.body.offsetWidth > 768){\r\n                contentMenu.style.opacity = 0;\r\n                showPopup();\r\n            }\r\n            else{\r\n                contentMenu.style.opacity = 100;\r\n            }\r\n        });\r\n    });\r\n\r\n    modal.addEventListener(\"click\", e => {\r\n        if(!e.target.closest(\".popup-content\")||e.target.closest(\".popup-close\")){\r\n            if(document.body.offsetWidth > 768){\r\n                closePopup();\r\n            }\r\n            else{\r\n                modal.style.display = \"none\";\r\n            }\r\n        }\r\n    });\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://webpack/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const sliderBlock = document.querySelector(\".portfolio-content\");\r\n    const slides = document.querySelectorAll(\".portfolio-item\");\r\n    const dotsBlock = document.querySelector(\"ul[class='portfolio-dots']\");\r\n    const dots = [];\r\n\r\n    const addDots = () => {\r\n        slides.forEach((li, index) => {\r\n            li = document.createElement(\"li\");\r\n            li.classList.add(\"dot\");\r\n\r\n            if(index == 0){\r\n                li.classList.add(\"dot-active\");\r\n            }\r\n            dots.push(li);\r\n            dotsBlock.appendChild(li);\r\n        });\r\n    };\r\n\r\n    let currentSlide = 0;\r\n    let interval;\r\n    let timeInterval = 2000;\r\n\r\n    const prevSlide = (elements, index, strClass) => {\r\n        elements[index].classList.remove(strClass);\r\n    };\r\n\r\n    const nextSlide = (elements, index, strClass) => {\r\n        elements[index].classList.add(strClass);\r\n    };\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n        prevSlide(dots, currentSlide, \"dot-active\");\r\n        currentSlide++;\r\n\r\n        if(currentSlide >= slides.length){\r\n            currentSlide = 0;\r\n        }\r\n        nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n        nextSlide(dots, currentSlide, \"dot-active\");\r\n    };\r\n\r\n    const startSlide = (timer = 1500) => {\r\n        if(dots.length == 0){\r\n            addDots();\r\n        }\r\n        interval = setInterval(autoSlide, timer);\r\n    };\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    };\r\n\r\n    sliderBlock.addEventListener(\"click\", e => {\r\n        e.preventDefault();\r\n\r\n        if(!e.target.matches('.dot, .portfolio-btn')){\r\n            return;\r\n        }\r\n        \r\n        prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n        prevSlide(dots, currentSlide, \"dot-active\");\r\n        \r\n        if(e.target.matches(\"#arrow-right\")){\r\n            currentSlide++;\r\n        }\r\n        else if(e.target.matches(\"#arrow-left\")){\r\n            currentSlide--;\r\n        }\r\n        else if(e.target.classList.contains(\"dot\")){\r\n            dots.forEach((dot, index) => {\r\n                if(e.target === dot){\r\n                    currentSlide = index;\r\n                }\r\n            });\r\n        }\r\n\r\n        if(currentSlide >= slides.length){\r\n            currentSlide = 0;\r\n        }\r\n        if(currentSlide < 0){\r\n            currentSlide = slides.length - 1 ;\r\n        }\r\n\r\n        nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n        nextSlide(dots, currentSlide, \"dot-active\");\r\n    });\r\n\r\n    sliderBlock.addEventListener(\"mouseenter\", e => {\r\n        if(e.target.matches('.dot, .portfolio-btn')){\r\n            stopSlide();\r\n        }\r\n    }, true);\r\n\r\n    sliderBlock.addEventListener(\"mouseleave\", e => {\r\n        if(e.target.matches('.dot, .portfolio-btn')){\r\n            startSlide(timeInterval);\r\n        }\r\n    }, true);\r\n\r\n    startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n\r\n    const tabsContet = document.querySelectorAll(\".service-tab\");\r\n    const tabsPanel = document.querySelector(\".service-header\");\r\n    const tabs = document.querySelectorAll(\".service-header-tab\");\r\n\r\n    //console.log(tabs);\r\n    tabsPanel.addEventListener(\"click\", e => {\r\n        if(e.target.closest(\".service-header-tab\")){\r\n            const tabBtn = e.target.closest(\".service-header-tab\");\r\n            tabs.forEach((tab, index) => {\r\n                if(tab === tabBtn){\r\n                    tab.classList.add(\"active\");\r\n                    tabsContet[index].classList.remove(\"d-none\");\r\n                }\r\n                else{\r\n                    tab.classList.remove(\"active\");\r\n                    tabsContet[index].classList.add(\"d-none\");\r\n                }\r\n            });\r\n        }\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack://webpack/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/timers.js":
/*!*******************************!*\
  !*** ./src/modules/timers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\"use strick\";\r\nconst timers = deadline => {   \r\n    const timerHours = document.querySelector(\"#timer-hours\");\r\n    const timerMinutes = document.querySelector(\"#timer-minutes\");\r\n    const timerSeconds = document.querySelector(\"#timer-seconds\");\r\n\r\n    const getTimeRemaining = deadline => {\r\n        \r\n        const dateStop = new Date(deadline).getTime();\r\n        const dateNow = new Date().getTime();\r\n\r\n        let timeRemaining = (dateStop - dateNow)/1000;\r\n\r\n        let hours = Math.floor(timeRemaining / 3600);\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return { timeRemaining, hours, minutes, seconds };\r\n        \r\n    };\r\n\r\n    const updateClock = getTime => {\r\n        getTime = getTimeRemaining(deadline);\r\n        for (let k in getTime){\r\n            if (getTime[k] < 10) {\r\n                getTime[k] = \"0\" + getTime[k];\r\n            }\r\n        }\r\n        timerHours.textContent = getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes;\r\n        timerSeconds.textContent = getTime.seconds;    \r\n    };\r\n\r\n    const setZero = () => {\r\n        const timers = document.querySelector(\"#timer\");\r\n        timers.style.color = \"red\";\r\n\r\n        timerHours.textContent = \"00\";\r\n        timerMinutes.textContent = \"00\";\r\n        timerSeconds.textContent = \"00\";\r\n    };\r\n\r\n        const start = () => {\r\n        let getTime = getTimeRemaining(deadline);\r\n\r\n        if(getTime.timeRemaining > 0){        \r\n            updateClock(getTime);\r\n            setInterval(updateClock, 1000, getTime);\r\n        }\r\n        else{\r\n            setZero();\r\n        }\r\n   };\r\n   start();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timers);\r\n\n\n//# sourceURL=webpack://webpack/./src/modules/timers.js?");

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n    const calcBlock = document.querySelector(\"div[class='calc-block']\");\r\n    \r\n    const calcSelect = calcBlock.querySelector(\"select\");\r\n    const calcInputArr = calcBlock.querySelectorAll(\"input[type='text']\");\r\n\r\n    calcInputArr.forEach(input => {\r\n        input.addEventListener(\"input\", e => {\r\n            e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n        });\r\n    });\r\n\r\n    // calcSelect.addEventListener(\"change\", () => {\r\n    //     calcInputArr.forEach(input => {\r\n    //         input.value = \"\";\r\n    //     });\r\n    // });\r\n\r\n    const texts = document.querySelectorAll(\"form input[type='text']\");\r\n    const emails = document.querySelectorAll(\"form input[type='email']\");\r\n    const tels = document.querySelectorAll(\"form input[type='tel']\");\r\n    const message = document.querySelector(\"#form2-message\");\r\n\r\n    texts.forEach(text => {\r\n        text.addEventListener(\"input\", e => {\r\n            let val = e.target.value;\r\n            const letters = /^[А-Яа-яёЁ]+$/;\r\n            if(!val.match(letters)){\r\n                e.target.value = \"\";\r\n            }\r\n        });\r\n    });\r\n\r\n    tels.forEach(input => {\r\n        input.addEventListener(\"input\", e => {\r\n            e.target.value = e.target.value.replace(/\\D+/,\"\");\r\n        });\r\n    });\r\n\r\n    message.addEventListener(\"input\", e => {\r\n            let val = e.target.value;\r\n            const letters = /^[А-Яа-яёЁ]+$/;\r\n            if(!val.match(letters)){\r\n                e.target.value = \"\";\r\n            }\r\n        });\r\n\r\n\r\n    emails.forEach(email => {\r\n        email.addEventListener(\"input\", e => {\r\n            //e.target.value = e.target.value.replace(/^[^a-zA-Z0-9@]+$/,\"\");\r\n            let val = e.target.value;\r\n            const letters = /^[a-zA-Z0-9@\\-\\_\\.\\!\\~\\*\\']+$/;\r\n            if(!val.match(letters)){\r\n                e.target.value = \"\";\r\n            }\r\n        });\r\n\r\n        email.addEventListener(\"blur\", () => {\r\n            if(!validateEmail(email.value)){\r\n                email.value = \"\";\r\n            }\r\n        });\r\n    });\r\n    \r\n    const validateEmail = email => {\r\n    return String(email)\r\n        .toLowerCase()\r\n        .match(\r\n        /[\\-\\_\\.\\!\\~\\*\\'\\w]+@([\\w]+\\.)+[\\w]+/gi\r\n        );\r\n    };//  @  -  _  . ! ~ * '\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://webpack/./src/modules/validation.js?");

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