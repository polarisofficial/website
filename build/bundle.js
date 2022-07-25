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

/***/ "./ts/main.ts":
/*!********************!*\
  !*** ./ts/main.ts ***!
  \********************/
/***/ (() => {

eval("\r\nvar laneEffectLeft = document.getElementById('lane_effect_left');\r\nvar laneEffectRight = document.getElementById('lane_effect_right');\r\ndocument.addEventListener('keydown', function (e) { return onKeyDown(e); });\r\ndocument.addEventListener('keyup', function (e) { return onKeyUp(e); });\r\nfunction onKeyDown(e) {\r\n    if (laneEffectLeft == null || laneEffectRight == null) {\r\n        return;\r\n    }\r\n    if (e.isComposing || e.keyCode === 229) {\r\n        return;\r\n    }\r\n    if (e.key == 'f') {\r\n        laneEffectLeft.style.visibility = \"visible\";\r\n    }\r\n    if (e.key == 'j') {\r\n        laneEffectRight.style.visibility = \"visible\";\r\n    }\r\n}\r\nfunction onKeyUp(e) {\r\n    if (laneEffectLeft == null || laneEffectRight == null) {\r\n        return;\r\n    }\r\n    if (e.isComposing || e.keyCode === 229) {\r\n        return;\r\n    }\r\n    if (e.key == 'f') {\r\n        laneEffectLeft.style.visibility = \"hidden\";\r\n    }\r\n    if (e.key == 'j') {\r\n        laneEffectRight.style.visibility = \"hidden\";\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://website/./ts/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./ts/main.ts"]();
/******/ 	
/******/ })()
;