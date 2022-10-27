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

/***/ "./ts/constants.ts":
/*!*************************!*\
  !*** ./ts/constants.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TARGET_FPS\": () => (/* binding */ TARGET_FPS)\n/* harmony export */ });\nvar TARGET_FPS = 60;\r\n\n\n//# sourceURL=webpack://website/./ts/constants.ts?");

/***/ }),

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mouseClick\": () => (/* binding */ mouseClick)\n/* harmony export */ });\n// mouseがクリックされたら、play.htmlに遷移する\r\nfunction mouseClick() {\r\n    window.location.href = \"play.html\";\r\n}\r\n\n\n//# sourceURL=webpack://website/./ts/index.ts?");

/***/ }),

/***/ "./ts/main.ts":
/*!********************!*\
  !*** ./ts/main.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _polaris__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polaris */ \"./ts/polaris.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./ts/constants.ts\");\n\r\n\r\ninit();\r\ngameLoop();\r\nfunction init() {\r\n    _polaris__WEBPACK_IMPORTED_MODULE_0__.Polaris.getInstance().init();\r\n}\r\nfunction gameLoop() {\r\n    var begin = performance.now();\r\n    _polaris__WEBPACK_IMPORTED_MODULE_0__.Polaris.getInstance().update();\r\n    var end = performance.now();\r\n    setTimeout(gameLoop, (1000 / _constants__WEBPACK_IMPORTED_MODULE_1__.TARGET_FPS) - (end - begin));\r\n}\r\n\n\n//# sourceURL=webpack://website/./ts/main.ts?");

/***/ }),

/***/ "./ts/play.ts":
/*!********************!*\
  !*** ./ts/play.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onKeyDown\": () => (/* binding */ onKeyDown),\n/* harmony export */   \"onKeyUp\": () => (/* binding */ onKeyUp)\n/* harmony export */ });\nvar laneEffectLeft = document.getElementById('lane_effect_left');\r\nvar laneEffectRight = document.getElementById('lane_effect_right');\r\nfunction onKeyDown(e) {\r\n    if (laneEffectLeft == null || laneEffectRight == null) {\r\n        return;\r\n    }\r\n    if (e.isComposing) {\r\n        return;\r\n    }\r\n    if (e.key == 'f') {\r\n        laneEffectLeft.style.visibility = \"visible\";\r\n    }\r\n    if (e.key == 'j') {\r\n        laneEffectRight.style.visibility = \"visible\";\r\n    }\r\n}\r\nfunction onKeyUp(e) {\r\n    if (laneEffectLeft == null || laneEffectRight == null) {\r\n        return;\r\n    }\r\n    if (e.isComposing) {\r\n        return;\r\n    }\r\n    if (e.key == 'f') {\r\n        laneEffectLeft.style.visibility = \"hidden\";\r\n    }\r\n    if (e.key == 'j') {\r\n        laneEffectRight.style.visibility = \"hidden\";\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://website/./ts/play.ts?");

/***/ }),

/***/ "./ts/polaris.ts":
/*!***********************!*\
  !*** ./ts/polaris.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Polaris\": () => (/* binding */ Polaris)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./ts/index.ts\");\n/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play */ \"./ts/play.ts\");\n\r\n\r\nvar Polaris = /** @class */ (function () {\r\n    function Polaris() {\r\n    }\r\n    Polaris.prototype.init = function () {\r\n        // Set callbacks\r\n        document.addEventListener(\"mousedown\", function () { return _index__WEBPACK_IMPORTED_MODULE_0__.mouseClick(); });\r\n        document.addEventListener(\"keyup\", function (e) { return _play__WEBPACK_IMPORTED_MODULE_1__.onKeyUp(e); });\r\n        document.addEventListener(\"keydown\", function (e) { return _play__WEBPACK_IMPORTED_MODULE_1__.onKeyDown(e); });\r\n    };\r\n    Polaris.prototype.update = function () {\r\n    };\r\n    Polaris.prototype.render = function () {\r\n    };\r\n    Polaris.getInstance = function () {\r\n        if (!Polaris.instance) {\r\n            Polaris.instance = new Polaris();\r\n        }\r\n        return Polaris.instance;\r\n    };\r\n    return Polaris;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://website/./ts/polaris.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./ts/main.ts");
/******/ 	
/******/ })()
;