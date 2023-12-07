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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_callButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/callButton */ \"./modules/callButton.js\");\n/* harmony import */ var _modules_callMaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/callMaster */ \"./modules/callMaster.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_requisition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/requisition */ \"./modules/requisition.js\");\n/* harmony import */ var _modules_sliderService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sliderService */ \"./modules/sliderService.js\");\n/* harmony import */ var _modules_scrollBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scrollBtn */ \"./modules/scrollBtn.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_sertificate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sertificate */ \"./modules/sertificate.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_callButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_callMaster__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_requisition__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_sliderService__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_scrollBtn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_sertificate__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n  document.addEventListener(\"DOMContentLoaded\", function () {\r\n    // Получаем элементы формы\r\n    const calcTypeSelect = document.getElementById(\"calc-type\");\r\n    const materiaTypeSelect = document.getElementById(\"calc-type-material\");\r\n    const calcInput = document.getElementById(\"calc-input\");\r\n    const calcTotal = document.getElementById(\"calc-total\");\r\n\r\n    // Событие для изменения типа балкона\r\n    calcTypeSelect.addEventListener(\"change\", function () {\r\n      calculateTotal();\r\n    });\r\n\r\n    // Событие для изменения типа остекления\r\n    materiaTypeSelect.addEventListener(\"change\", function () {\r\n      calculateTotal();\r\n    });\r\n\r\n    // Событие для изменения площади балкона\r\n    calcInput.addEventListener(\"input\", function () {\r\n      // Проверяем ввод на соответствие цифрам\r\n      this.value = this.value.replace(/\\D/g, \"\");\r\n      calculateTotal();\r\n    });\r\n\r\n    // Функция для вычисления итоговой стоимости\r\n    function calculateTotal() {\r\n      const area = parseFloat(calcInput.value);\r\n      const typeValue = parseFloat(calcTypeSelect.value);\r\n      const materialValue = parseFloat(materiaTypeSelect.value);\r\n\r\n      const total = area * typeValue * materialValue;\r\n      calcTotal.value = total;\r\n\r\n      // Добавляем свойство calc-total к отправляемым данным в JSON-формате\r\n      const formData = {\r\n        \"calc-total\": total,\r\n      };\r\n      const jsonData = JSON.stringify(formData);\r\n      console.log(jsonData);\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/callButton.js":
/*!*******************************!*\
  !*** ./modules/callButton.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst callButton = () => {\r\n  document.addEventListener(\"DOMContentLoaded\", function () {\r\n    // Получаем элементы кнопки, модального окна и подложки\r\n    const modalButton = document.querySelector(\r\n      \".btn.btn-warning.btn-block.fancyboxModal\"\r\n    );\r\n    const modal = document.querySelector(\".header-modal\");\r\n    const overlay = document.querySelector(\".overlay\");\r\n    const closeButton = document.querySelector(\".header-modal__close\");\r\n\r\n    // Функция открытия модального окна\r\n    function openModal() {\r\n      modal.style.display = \"block\";\r\n      overlay.style.display = \"block\";\r\n    }\r\n\r\n    // Функция закрытия модального окна\r\n    function closeModal() {\r\n      modal.style.display = \"none\";\r\n      overlay.style.display = \"none\";\r\n    }\r\n\r\n    // Назначаем событие клика на кнопку \"Заказать звонок\"\r\n    modalButton.addEventListener(\"click\", openModal);\r\n\r\n    // Назначаем событие клика на крестик\r\n    closeButton.addEventListener(\"click\", closeModal);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callButton);\r\n\n\n//# sourceURL=webpack:///./modules/callButton.js?");

/***/ }),

/***/ "./modules/callMaster.js":
/*!*******************************!*\
  !*** ./modules/callMaster.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst callMaster = () => {\r\n  document.addEventListener(\"DOMContentLoaded\", function () {\r\n    // Получаем все элементы кнопок\r\n    const modalButtons = document.querySelectorAll(\r\n      \".btn.btn-success.btn-sm.fancyboxModal\"\r\n    );\r\n    const modal = document.querySelector(\".services-modal\");\r\n    const overlay = document.querySelector(\".overlay\");\r\n    const closeButton = document.querySelector(\".services-modal__close\");\r\n\r\n    // Функция открытия модального окна\r\n    function openModal() {\r\n      modal.style.display = \"block\";\r\n      overlay.style.display = \"block\";\r\n    }\r\n\r\n    // Функция закрытия модального окна\r\n    function closeModal() {\r\n      modal.style.display = \"none\";\r\n      overlay.style.display = \"none\";\r\n    }\r\n\r\n    // Назначаем событие клика на каждую кнопку\r\n    modalButtons.forEach(function (button) {\r\n      button.addEventListener(\"click\", openModal);\r\n    });\r\n\r\n    // Назначаем событие клика на крестик\r\n    closeButton.addEventListener(\"click\", closeModal);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callMaster);\r\n\n\n//# sourceURL=webpack:///./modules/callMaster.js?");

/***/ }),

/***/ "./modules/requisition.js":
/*!********************************!*\
  !*** ./modules/requisition.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst requisition = () => {\r\n  document.addEventListener(\"DOMContentLoaded\", function () {\r\n    function validateName(input) {\r\n      // Регулярное выражение для проверки имени\r\n      const regex = /^[а-яА-ЯёЁa-zA-Z\\s-]+$/;\r\n\r\n      // Приводим первую букву каждого слова к верхнему регистру, а остальные к нижнему\r\n      input.value = input.value\r\n        .toLowerCase()\r\n        .replace(/(?:^|\\s|-)\\S/g, function (match) {\r\n          return match.toUpperCase();\r\n        });\r\n\r\n      // Проверяем значение с помощью регулярного выражения\r\n      if (!regex.test(input.value)) {\r\n        input.value = \"\";\r\n      }\r\n    }\r\n\r\n    function validatePhone(input) {\r\n      // Регулярное выражение для проверки номера телефона\r\n      const regex = /^[0-9+]{1,16}$/;\r\n\r\n      // Проверяем значение с помощью регулярного выражения\r\n      if (!regex.test(input.value)) {\r\n        input.value = \"\";\r\n      }\r\n    }\r\n\r\n    const form = document.forms[\"action-form\"];\r\n\r\n    const inputName = form.elements[\"fio\"];\r\n    const inputPhone = form.elements[\"phone\"];\r\n\r\n    form.addEventListener(\"submit\", function (event) {\r\n      event.preventDefault();\r\n\r\n      // Проверяем заполненность обоих полей\r\n      if (inputName.value === \"\" || inputPhone.value === \"\") {\r\n        return;\r\n      }\r\n\r\n      // Валидируем введенные значения имени и номера телефона\r\n      validateName(inputName);\r\n      validatePhone(inputPhone);\r\n\r\n      // Создаем объект с данными\r\n      const data = {\r\n        name: inputName.value,\r\n        phone: inputPhone.value,\r\n      };\r\n\r\n      // Преобразуем данные в JSON-строку\r\n      const jsonData = JSON.stringify(data);\r\n\r\n      // Отправляем данные на сервер (здесь нужно добавить \"url_to_server_endpoint\")\r\n      fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n        method: \"POST\",\r\n        headers: {\r\n          \"Content-Type\": \"application/json\",\r\n        },\r\n        body: jsonData,\r\n      })\r\n        .then((response) => response.json())\r\n        .then((result) => {\r\n          console.log(result);\r\n        })\r\n        .catch((error) => {\r\n          console.error(error);\r\n        });\r\n    });\r\n\r\n    inputName.addEventListener(\"input\", function () {\r\n      // При обновлении значения имени запускаем валидацию\r\n      validateName(this);\r\n    });\r\n\r\n    inputPhone.addEventListener(\"input\", function () {\r\n      // При обновлении значения номера телефона запускаем валидацию\r\n      validatePhone(this);\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requisition);\r\n\n\n//# sourceURL=webpack:///./modules/requisition.js?");

/***/ }),

/***/ "./modules/scrollBtn.js":
/*!******************************!*\
  !*** ./modules/scrollBtn.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollBtn = () => {\r\n  document.addEventListener(\"DOMContentLoaded\", () => {\r\n    document\r\n      .querySelector(\".smooth-scroll\")\r\n      .addEventListener(\"click\", function () {\r\n        window.scrollTo({\r\n          top: 0,\r\n          behavior: \"smooth\",\r\n        });\r\n      });\r\n\r\n    // Появление кнопки скролла после прокрутки первой секции\r\n    window.addEventListener(\"scroll\", function () {\r\n      if (window.scrollY > document.querySelector(\".section\").offsetHeight) {\r\n        document.querySelector(\".smooth-scroll\").style.display = \"block\";\r\n      } else {\r\n        document.querySelector(\".smooth-scroll\").style.display = \"none\";\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollBtn);\r\n\n\n//# sourceURL=webpack:///./modules/scrollBtn.js?");

/***/ }),

/***/ "./modules/sertificate.js":
/*!********************************!*\
  !*** ./modules/sertificate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sertificate = () => {\r\n  document.addEventListener(\"DOMContentLoaded\", function () {\r\n    console.log(123);\r\n\r\n    //Не получается ничего(((((\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sertificate);\r\n\n\n//# sourceURL=webpack:///./modules/sertificate.js?");

/***/ }),

/***/ "./modules/sliderService.js":
/*!**********************************!*\
  !*** ./modules/sliderService.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sliderService = () => {\r\n  document.addEventListener(\"DOMContentLoaded\", function () {\r\n    // Получаем текущую ширину окна и определяем количество отображаемых слайдов\r\n    let windowWidth = window.innerWidth;\r\n    let slideCount = windowWidth >= 576 ? 3 : 1;\r\n\r\n    let slider = document.querySelector(\".benefits-inner\");\r\n    let slides = slider.querySelectorAll(\".benefits__item\");\r\n\r\n    let currentIndex = 0;\r\n\r\n    // Функция для обновления количества отображаемых слайдов\r\n    function updateSlideCount() {\r\n      windowWidth = window.innerWidth;\r\n      slideCount = windowWidth >= 576 ? 3 : 1;\r\n      showSlides(currentIndex);\r\n    }\r\n\r\n    // Функция для отображения слайдов\r\n    function showSlides(index) {\r\n      for (let i = 0; i < slides.length; i++) {\r\n        slides[i].style.display = \"none\";\r\n      }\r\n      for (let i = index; i < index + slideCount; i++) {\r\n        if (slides[i]) {\r\n          slides[i].style.display = \"block\";\r\n        }\r\n      }\r\n    }\r\n\r\n    // Обновляем отображаемые слайды при изменении размера окна\r\n    window.addEventListener(\"resize\", function () {\r\n      updateSlideCount();\r\n    });\r\n\r\n    updateSlideCount();\r\n\r\n    // Добавляем обработчики событий для стрелок\r\n    const benefitsArrowLeft = document.querySelector(\".benefits__arrow--left\");\r\n    const benefitsArrowRight = document.querySelector(\r\n      \".benefits__arrow--right\"\r\n    );\r\n\r\n    benefitsArrowLeft.addEventListener(\"click\", () => {\r\n      if (currentIndex > 0) {\r\n        currentIndex -= 1;\r\n        showSlides(currentIndex);\r\n      }\r\n    });\r\n\r\n    benefitsArrowRight.addEventListener(\"click\", () => {\r\n      if (currentIndex + slideCount < slides.length) {\r\n        currentIndex += 1;\r\n        showSlides(currentIndex);\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderService);\r\n\n\n//# sourceURL=webpack:///./modules/sliderService.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = () => {\r\n  document.addEventListener(\"DOMContentLoaded\", function () {\r\n    // Получаем все элементы с классом \"countdown\"\r\n    const countdownBlocks = document.querySelectorAll(\".countdown\");\r\n\r\n    // Функция для добавления ведущего нуля к числу\r\n    function addLeadingZero(number) {\r\n      return number < 10 ? \"0\" + number : number;\r\n    }\r\n\r\n    // Функция для обновления таймера\r\n    function updateTimer(block) {\r\n      const daysElement = block.querySelector(\".count_1 span\");\r\n      const hoursElement = block.querySelector(\".count_2 span\");\r\n      const minutesElement = block.querySelector(\".count_3 span\");\r\n      const secondsElement = block.querySelector(\".count_4 span\");\r\n\r\n      const days = parseInt(block.dataset.days);\r\n\r\n      // Загружаем сохраненное время таймера из localStorage\r\n      let savedTime = localStorage.getItem(\r\n        \"countdown_timer_\" + block.dataset.id\r\n      );\r\n      if (savedTime) {\r\n        savedTime = new Date(savedTime);\r\n      } else {\r\n        // Если сохраненного времени нет, устанавливаем текущее время\r\n        savedTime = new Date();\r\n        // Добавляем необходимое количество дней к сохраненному времени\r\n        savedTime.setDate(savedTime.getDate() + days);\r\n        // Сохраняем время в localStorage\r\n        localStorage.setItem(\"countdown_timer_\" + block.dataset.id, savedTime);\r\n      }\r\n\r\n      setInterval(function () {\r\n        const currentDate = new Date();\r\n        const timeDifference = savedTime.getTime() - currentDate.getTime();\r\n\r\n        const seconds = Math.floor(timeDifference / 1000) % 60;\r\n        const minutes = Math.floor(timeDifference / 1000 / 60) % 60;\r\n        const hours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;\r\n        const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);\r\n\r\n        // Обновляем значения в таймере\r\n        daysElement.textContent = addLeadingZero(days);\r\n        hoursElement.textContent = addLeadingZero(hours);\r\n        minutesElement.textContent = addLeadingZero(minutes);\r\n        secondsElement.textContent = addLeadingZero(seconds);\r\n      }, 1000);\r\n    }\r\n\r\n    // Обновляем таймеры для каждого блока с классом \"countdown\"\r\n    countdownBlocks.forEach(function (block) {\r\n      updateTimer(block);\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;