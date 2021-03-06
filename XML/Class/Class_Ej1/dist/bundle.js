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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _patient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patient */ \"./patient.js\");\n/* harmony import */ var _medic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medic */ \"./medic.js\");\n\r\n\r\n\r\nconst patients = [];\r\nconst doctors = [];\r\n\r\nconst onSubmitMedic = () => {\r\n\r\n}\r\n\r\nconst onSubmitPatient = () => {\r\n\r\n}\r\n\r\nwindow.onSubmitMedic = onSubmitMedic;\r\nwindow.onSubmitPatient = onSubmitPatient;\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./medic.js":
/*!******************!*\
  !*** ./medic.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person */ \"./person.js\");\n\r\n\r\nclass Medic extends _person__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor({name,surname,age,field,floor}){\r\n        super({name: name, surname: surname, age: age});\r\n        this.field = field;\r\n        this.floor = floor;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Medic);\n\n//# sourceURL=webpack:///./medic.js?");

/***/ }),

/***/ "./patient.js":
/*!********************!*\
  !*** ./patient.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person */ \"./person.js\");\n\r\n\r\nclass Patient extends _person__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor({name,surname,age,illness,date}){\r\n        super({name, surname, age});\r\n        this.illness = illness;\r\n        this.data = data;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Patient);\n\n//# sourceURL=webpack:///./patient.js?");

/***/ }),

/***/ "./person.js":
/*!*******************!*\
  !*** ./person.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Person{\r\n    constructor({name,surname,age}){\r\n        this.name = name;\r\n        this.surname = surname;\r\n        this.age = age;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Person);\n\n//# sourceURL=webpack:///./person.js?");

/***/ })

/******/ });