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

/***/ "./GameOver.js":
/*!*********************!*\
  !*** ./GameOver.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameOver {\r\n    constructor({font,fillStyle,textAlign,text,canvas}){\r\n        this.font = font;\r\n        this.fillStyle = fillStyle;\r\n        this.textAlign = textAlign;\r\n        this.text = text;\r\n        this.canvas = canvas;\r\n        this.ctx = canvas.getContext('2d');\r\n    }\r\n    render(){\r\n        this.ctx.font = this.font;\r\n        this.ctx.fillStyle = this.fillStyle;\r\n        this.ctx.textAlign = this.textAlign;\r\n        this.ctx.fillText(this.text, canvas.width / 2, canvas.height / 2);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameOver);\r\n\n\n//# sourceURL=webpack:///./GameOver.js?");

/***/ }),

/***/ "./Score.js":
/*!******************!*\
  !*** ./Score.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Score {\r\n    constructor({font,fillStyle,textAlign,text,canvas}){\r\n        this.font = font;\r\n        this.fillStyle = fillStyle;\r\n        this.textAlign = textAlign;\r\n        this.text = text;\r\n        this.canvas = canvas;\r\n        this.ctx = canvas.getContext('2d');\r\n        this.score = 0;\r\n    }\r\n\r\n    render(){\r\n        this.ctx.font = this.font;\r\n        this.ctx.fillStyle = this.fillStyle;\r\n        this.ctx.textAlign = this.textAlign;\r\n        this.ctx.fillText(`${this.text} ${this.score}`, 10, 10);\r\n    }\r\n\r\n    incrementScore(){\r\n        this.score++;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Score);\n\n//# sourceURL=webpack:///./Score.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameOver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameOver */ \"./GameOver.js\");\n/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Score */ \"./Score.js\");\n\n\n\nconst canvas = document.getElementById('canvas');\nconst ctx = canvas.getContext('2d');\nlet y = 50;\nlet x = 50;\n\nconst gameOver = new _GameOver__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  font : 'bold 24px verdana, sans-serif ',\n  fillStyle : '#ff0000',\n  textAlign : 'center',\n  text : 'GAME OVER',\n  canvas\n})\n\nconst score = new _Score__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  font : 'bold 10px verdana, sans-serif',\n  fillStyle : '#000',\n  textAlign : 'left',\n  text : 'Score ',\n  canvas\n})\n\nconst onClick = event => {\n  if (event.region) {\n    score.incrementScore();\n    score.render();\n    y = 0;\n    x = Math.floor(Math.random() * canvas.width);\n  }\n};\n\nconst draw = () => {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  ctx.beginPath();\n  ctx.arc(x, y, 25, 0, Math.PI * 2, true);\n  ctx.closePath();\n  ctx.fill();\n\n  ctx.addHitRegion({ id: 'circle' });\n  canvas.addEventListener('click', onClick);\n\n  y = y + 3;\n\n  // CHECK BOUNDS\n  score.render();\n  if (y > canvas.height) {\n    x = Math.floor(Math.random() * canvas.width);\n    gameOver.render();\n    score.render();\n  } else {\n    window.requestAnimationFrame(draw);\n  }\n};\ndraw();\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });