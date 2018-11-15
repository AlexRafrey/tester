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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3NzL21haW4uc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jc3MvbWFpbi5zY3NzPzMxZjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/css/main.scss\n");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./../css/main.scss */ \"./src/css/main.scss\");\n\nvar _site = __webpack_require__(/*! ./components/site */ \"./src/js/components/site.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9hcHAuanM/MDM1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vLi4vY3NzL21haW4uc2Nzcyc7XHJcbmltcG9ydCB7IHNpdGUgfSBmcm9tICcuL2NvbXBvbmVudHMvc2l0ZSc7IFxyXG4gXHJcbiBcclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/components/content.js":
/*!**************************************!*\
  !*** ./src/js/components/content.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar content = exports.content = function content() {\n\t$('body').append('\\n\\t<div class=\"inerfase\">\\n\\t<div id=\\'stars\\'></div>\\n\\t<div id=\\'stars2\\'></div>\\n\\t<div id=\\'stars3\\'></div>\\n\\t<div id=\\'title\\'><span></span></div>\\n\\t<div class=\"scene2\">  \\n\\t\\t<div class=\"rain front-row\"></div>\\n\\t\\t<div class=\"rain back-row\"></div>  \\n\\t  \\n\\t\\t<div class=\"scoll_open\">\\n\\t\\t\\t<div class=\"text_scroll\">\\n\\t\\t\\t\\t<h1>\\u0414\\u043E\\u0440\\u043E\\u0433\\u043E\\u0439, \\u041C\\u0430\\u0440\\u043A</h1>\\n\\t\\t\\t\\t<p>\\u042F \\u0434\\u043E\\u043B\\u0433\\u043E \\u0442\\u0435\\u0431\\u044F \\u0436\\u0434\\u0430\\u043B\\u0430, \\u043D\\u043E \\u0442\\u044B \\u0442\\u0430\\u043A \\u0438 \\u043D\\u0435 \\u044F\\u0432\\u0438\\u043B\\u0441\\u044F. \\u042F \\u043B\\u0438\\u0447\\u043D\\u043E \\u043E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u043B\\u0430\\u0441\\u044C \\u043F\\u043E\\u0441\\u043C\\u043E\\u0442\\u0440\\u0435\\u0442\\u044C \\u043D\\u0430 \\u0442\\u0443 \\u0437\\u0430\\u0433\\u0430\\u0434\\u043E\\u0447\\u043D\\u0443\\u044E \\u0443\\u0441\\u0430\\u0434\\u044C\\u0431\\u0443 \\u0438 \\u043D\\u0430\\u0434\\u0435\\u044E\\u0441\\u044C \\u0442\\u044B \\u043F\\u0440\\u0438\\u0441\\u043E\\u0435\\u0434\\u0438\\u043D\\u0438\\u0448\\u044C\\u0441\\u044F \\u0432 \\u0441\\u043A\\u043E\\u0440\\u043E\\u043C \\u0432\\u0440\\u0435\\u043C\\u0435\\u043D\\u0438. \\u041D\\u0438 \\u0432\\u0438\\u043B\\u043B\\u0435 \\u043F\\u043E\\u043B\\u043D\\u043E \\u0443\\u0433\\u043E\\u0449\\u0435\\u043D\\u0438\\u0439 - \\u043D\\u0430\\u0441\\u043B\\u0430\\u0436\\u0434\\u0430\\u0439\\u0441\\u044F. \\u0410 \\u043A\\u043E\\u0433\\u0434\\u0430 \\u0431\\u0443\\u0434\\u0435\\u0448\\u044C \\u0433\\u043E\\u0442\\u043E\\u0432, \\u0432\\u043E\\u0437\\u044C\\u043C\\u0438 \\u043A\\u043B\\u044E\\u0447 \\u043E\\u0442 \\u0434\\u0432\\u0435\\u0440\\u0438 \\u043D\\u0430 \\u0432\\u0435\\u0440\\u0445\\u043D\\u0435\\u0439 \\u043F\\u043E\\u043B\\u043A\\u0435.</p>\\n\\t\\t\\t\\t<p>\\u041E\\u043D \\u043B\\u0435\\u0436\\u0438\\u0442 \\u0432 \\u0448\\u043A\\u0430\\u0442\\u0443\\u043B\\u043A\\u0435.</p>\\n\\t\\t\\t\\t<p>\\u0421\\u043E \\u0432\\u0441\\u0435\\u0439 \\u043B\\u044E\\u0431\\u043E\\u0432\\u044C\\u044E, \\u042D\\u043B\\u0438\\u0437\\u0430\\u0431\\u0435\\u0442</p>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\"box_open\">\\n\\t\\t\\t<div class=\"info\">\\n\\t\\t\\t\\t<h1>\\u0423\\u0437\\u043D\\u0430\\u0439 \\u0447\\u0442\\u043E \\u0432\\u043D\\u0443\\u0442\\u0440\\u0438 \\u043D\\u0430...</h1>\\n\\t\\t\\t\\t<div class=\"download-choise\">\\n\\t\\t\\t\\t\\t<a href=\"https://mytona.ru/\"  target=\"_blank\"><div class=\"download-choise-apple dwinf\"></div></a>\\n\\t\\t\\t\\t\\t<a href=\"https://mytona.ru/\"  target=\"_blank\"><div class=\"download-choise-android dwinf\"> </div></a>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div id=\\'light\\' style=\"opacity: 1;\"></div> \\n\\t</div>\\n</div>\\n\\t');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9jb250ZW50LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL2NvbnRlbnQuanM/M2Y1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyICBjb250ZW50ID0gZnVuY3Rpb24oKXtcclxuXHQkKCdib2R5JykuYXBwZW5kKGBcclxuXHQ8ZGl2IGNsYXNzPVwiaW5lcmZhc2VcIj5cclxuXHQ8ZGl2IGlkPSdzdGFycyc+PC9kaXY+XHJcblx0PGRpdiBpZD0nc3RhcnMyJz48L2Rpdj5cclxuXHQ8ZGl2IGlkPSdzdGFyczMnPjwvZGl2PlxyXG5cdDxkaXYgaWQ9J3RpdGxlJz48c3Bhbj48L3NwYW4+PC9kaXY+XHJcblx0PGRpdiBjbGFzcz1cInNjZW5lMlwiPiAgXHJcblx0XHQ8ZGl2IGNsYXNzPVwicmFpbiBmcm9udC1yb3dcIj48L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJyYWluIGJhY2stcm93XCI+PC9kaXY+ICBcclxuXHQgIFxyXG5cdFx0PGRpdiBjbGFzcz1cInNjb2xsX29wZW5cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInRleHRfc2Nyb2xsXCI+XHJcblx0XHRcdFx0PGgxPtCU0L7RgNC+0LPQvtC5LCDQnNCw0YDQujwvaDE+XHJcblx0XHRcdFx0PHA+0K8g0LTQvtC70LPQviDRgtC10LHRjyDQttC00LDQu9CwLCDQvdC+INGC0Ysg0YLQsNC6INC4INC90LUg0Y/QstC40LvRgdGPLiDQryDQu9C40YfQvdC+INC+0YLQv9GA0LDQstC40LvQsNGB0Ywg0L/QvtGB0LzQvtGC0YDQtdGC0Ywg0L3QsCDRgtGDINC30LDQs9Cw0LTQvtGH0L3Rg9GOINGD0YHQsNC00YzQsdGDINC4INC90LDQtNC10Y7RgdGMINGC0Ysg0L/RgNC40YHQvtC10LTQuNC90LjRiNGM0YHRjyDQsiDRgdC60L7RgNC+0Lwg0LLRgNC10LzQtdC90LguINCd0Lgg0LLQuNC70LvQtSDQv9C+0LvQvdC+INGD0LPQvtGJ0LXQvdC40LkgLSDQvdCw0YHQu9Cw0LbQtNCw0LnRgdGPLiDQkCDQutC+0LPQtNCwINCx0YPQtNC10YjRjCDQs9C+0YLQvtCyLCDQstC+0LfRjNC80Lgg0LrQu9GO0Ycg0L7RgiDQtNCy0LXRgNC4INC90LAg0LLQtdGA0YXQvdC10Lkg0L/QvtC70LrQtS48L3A+XHJcblx0XHRcdFx0PHA+0J7QvSDQu9C10LbQuNGCINCyINGI0LrQsNGC0YPQu9C60LUuPC9wPlxyXG5cdFx0XHRcdDxwPtCh0L4g0LLRgdC10Lkg0LvRjtCx0L7QstGM0Y4sINCt0LvQuNC30LDQsdC10YI8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiYm94X29wZW5cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImluZm9cIj5cclxuXHRcdFx0XHQ8aDE+0KPQt9C90LDQuSDRh9GC0L4g0LLQvdGD0YLRgNC4INC90LAuLi48L2gxPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJkb3dubG9hZC1jaG9pc2VcIj5cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL215dG9uYS5ydS9cIiAgdGFyZ2V0PVwiX2JsYW5rXCI+PGRpdiBjbGFzcz1cImRvd25sb2FkLWNob2lzZS1hcHBsZSBkd2luZlwiPjwvZGl2PjwvYT5cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL215dG9uYS5ydS9cIiAgdGFyZ2V0PVwiX2JsYW5rXCI+PGRpdiBjbGFzcz1cImRvd25sb2FkLWNob2lzZS1hbmRyb2lkIGR3aW5mXCI+IDwvZGl2PjwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgaWQ9J2xpZ2h0JyBzdHlsZT1cIm9wYWNpdHk6IDE7XCI+PC9kaXY+IFxyXG5cdDwvZGl2PlxyXG48L2Rpdj5cclxuXHRgKTtcclxufTsiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQStCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/components/content.js\n");

/***/ }),

/***/ "./src/js/components/scene2.js":
/*!*************************************!*\
  !*** ./src/js/components/scene2.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Scene2 = exports.Scene2 = function () {\n\tfunction Scene2() {\n\t\t_classCallCheck(this, Scene2);\n\n\t\tthis.start();\n\t}\n\n\t_createClass(Scene2, [{\n\t\tkey: 'start',\n\t\tvalue: function start() {\n\t\t\tsetTimeout(function () {\n\t\t\t\t$('#light').css({ 'opacity': '0', 'background-color': 'transporent', 'box-shadow': 'inset 0px 0px 195px 10px' });\n\t\t\t}, 10);\n\t\t\tthis.rain();\n\t\t\tthis.music();\n\t\t\tthis.firstItem();\n\t\t}\n\t}, {\n\t\tkey: 'firstItem',\n\t\tvalue: function firstItem() {\n\t\t\tvar that = this;\n\t\t\tsetTimeout(function () {\n\t\t\t\t$('.scene2').append('<div class=\"scroll\"><div class=\"scrollact\"></div></div><div class=\"protection\"></div>');\n\t\t\t\t$('.scrollact').click(openLetter);\n\t\t\t}, 900);\n\n\t\t\tfunction openLetter() {\n\t\t\t\t$('body').append('<audio autoplay=\"autoplay\" ><source src=\"https://sound-pack.net/download/Sound_19337.mp3\" type=\"audio/mpeg\" /></audio> ');\n\t\t\t\t$('.scrollact').css({ \"animation\": \"none\", \"z-index\": \"0\" });\n\t\t\t\t$('.scoll_open').attr({ \"style\": \"transform: scale(1)\" });\n\t\t\t\tthat.secondItem();\n\t\t\t\tsetTimeout(function () {\n\t\t\t\t\t$('.scoll_open').click(function () {\n\t\t\t\t\t\t$('.scoll_open').css({ \"transform\": \"scale(0)\" });\n\t\t\t\t\t\t$('.scrollact').css({ \"z-index\": \"11\" });\n\t\t\t\t\t});\n\t\t\t\t}, 1500);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'secondItem',\n\t\tvalue: function secondItem() {\n\t\t\tif (!$('.protection').length == 0) {\n\t\t\t\tsetTimeout(function () {\n\t\t\t\t\t$('.protection').append('<div class=\"protectionact\"></div>');\n\t\t\t\t\t$('.protectionact').click(function () {\n\t\t\t\t\t\t$('body').append('<audio autoplay=\"autoplay\" ><source src=\"https://sound-pack.net/download/Sound_18684.mp3\" type=\"audio/mpeg\" /></audio> ');\n\t\t\t\t\t\t$('.protectionact').css({ \"animation\": \"none\", \"z-index\": \"0\" });\n\t\t\t\t\t\t$('.box_open').attr({ \"style\": \"transform: scale(1)\" });\n\t\t\t\t\t\t$('.dwinf').click(function () {\n\t\t\t\t\t\t\t$('#musicbg').remove();\n\t\t\t\t\t\t});\n\t\t\t\t\t});\n\t\t\t\t}, 900);\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'music',\n\t\tvalue: function music() {\n\t\t\t$('body').append('<audio autoplay=\"autoplay\" id=\"musicbg\"><source src=\"https://s47man.storage.yandex.net/get-mp3/4c8d9650cf0a38610222ca7e0f8a70f4/00057805fe84ef72/music/6/8/data-0.6:21868838369:4816770?track-id=31786440&play=false\" type=\"audio/mpeg\" /></audio> ');\n\t\t}\n\t}, {\n\t\tkey: 'rain',\n\t\tvalue: function rain() {\n\t\t\t$('.rain').empty();\n\t\t\tvar increment = 0;\n\t\t\tvar drops = \"\";\n\t\t\tvar backDrops = \"\";\n\n\t\t\twhile (increment < 100) {\n\t\t\t\tvar randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);\n\t\t\t\tvar randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);\n\t\t\t\tincrement += randoFiver;\n\t\t\t\tdrops += '<div class=\"drop\" style=\"left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;\"><div class=\"stem\" style=\"animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;\"></div><div class=\"splat\" style=\"animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;\"></div></div>';\n\t\t\t\tbackDrops += '<div class=\"drop\" style=\"right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;\"><div class=\"stem\" style=\"animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;\"></div><div class=\"splat\" style=\"animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;\"></div></div>';\n\t\t\t}\n\n\t\t\t$('.rain.front-row').append(drops);\n\t\t\t$('.rain.back-row').append(backDrops);\n\t\t}\n\t}]);\n\n\treturn Scene2;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9zY2VuZTIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvc2NlbmUyLmpzP2IwZGQiXSwic291cmNlc0NvbnRlbnQiOlsiIFxyXG5leHBvcnQgIGNsYXNzIFNjZW5lMnsgXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnN0YXJ0KCk7IFxyXG5cdH1cclxuXHJcblx0c3RhcnQoKSB7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdCQoJyNsaWdodCcpLmNzcyh7J29wYWNpdHknOiAnMCcsICdiYWNrZ3JvdW5kLWNvbG9yJzogJ3RyYW5zcG9yZW50JywgJ2JveC1zaGFkb3cnOiAnaW5zZXQgMHB4IDBweCAxOTVweCAxMHB4JyB9KTtcclxuXHRcdH0sIDEwKTtcclxuXHRcdHRoaXMucmFpbigpO1xyXG5cdFx0dGhpcy5tdXNpYygpO1xyXG5cdFx0dGhpcy5maXJzdEl0ZW0oKTsgIFxyXG5cdH1cclxuXHRmaXJzdEl0ZW0gKCl7IFxyXG5cdFx0bGV0IHRoYXQgPSB0aGlzOyBcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0JCgnLnNjZW5lMicpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInNjcm9sbFwiPjxkaXYgY2xhc3M9XCJzY3JvbGxhY3RcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwicHJvdGVjdGlvblwiPjwvZGl2PicpOyBcclxuXHRcdFx0XHQkKCcuc2Nyb2xsYWN0JykuY2xpY2sob3BlbkxldHRlcik7XHJcblx0XHRcdH0sIDkwMCk7XHJcblxyXG5cdFx0XHQgZnVuY3Rpb24gIG9wZW5MZXR0ZXIoKSB7ICAgIFxyXG5cdFx0XHRcdCQoJ2JvZHknKS5hcHBlbmQoJzxhdWRpbyBhdXRvcGxheT1cImF1dG9wbGF5XCIgPjxzb3VyY2Ugc3JjPVwiaHR0cHM6Ly9zb3VuZC1wYWNrLm5ldC9kb3dubG9hZC9Tb3VuZF8xOTMzNy5tcDNcIiB0eXBlPVwiYXVkaW8vbXBlZ1wiIC8+PC9hdWRpbz4gJyk7IFxyXG5cdFx0XHRcdFx0JCgnLnNjcm9sbGFjdCcpLmNzcyh7XCJhbmltYXRpb25cIjogXCJub25lXCIsIFwiei1pbmRleFwiOlwiMFwiIH0pXHJcblx0XHRcdFx0XHQkKCcuc2NvbGxfb3BlbicpLmF0dHIoe1wic3R5bGVcIjogXCJ0cmFuc2Zvcm06IHNjYWxlKDEpXCJ9KSBcclxuXHRcdFx0XHRcdHRoYXQuc2Vjb25kSXRlbSgpO1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdCQoJy5zY29sbF9vcGVuJykuY2xpY2soZnVuY3Rpb24gKCkgeyBcclxuXHRcdFx0XHRcdFx0XHQkKCcuc2NvbGxfb3BlbicpLmNzcyh7XCJ0cmFuc2Zvcm1cIjogXCJzY2FsZSgwKVwifSk7XHJcblx0XHRcdFx0XHRcdFx0JCgnLnNjcm9sbGFjdCcpLmNzcyh7IFwiei1pbmRleFwiOlwiMTFcIiB9KVx0IFxyXG5cdFx0XHRcdFx0XHR9KSBcclxuXHRcdFx0XHRcdH0sIDE1MDApOyBcclxuXHRcdFx0fSAgIFxyXG5cdH1cclxuXHRzZWNvbmRJdGVtKCl7ICBcclxuXHRcdGlmICghJCgnLnByb3RlY3Rpb24nKS5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHQkKCcucHJvdGVjdGlvbicpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInByb3RlY3Rpb25hY3RcIj48L2Rpdj4nKTsgXHJcblx0XHRcdFx0JCgnLnByb3RlY3Rpb25hY3QnKS5jbGljayhmdW5jdGlvbiAoKSB7IFxyXG5cdFx0XHRcdFx0JCgnYm9keScpLmFwcGVuZCgnPGF1ZGlvIGF1dG9wbGF5PVwiYXV0b3BsYXlcIiA+PHNvdXJjZSBzcmM9XCJodHRwczovL3NvdW5kLXBhY2submV0L2Rvd25sb2FkL1NvdW5kXzE4Njg0Lm1wM1wiIHR5cGU9XCJhdWRpby9tcGVnXCIgLz48L2F1ZGlvPiAnKTtcclxuXHRcdFx0XHRcdCQoJy5wcm90ZWN0aW9uYWN0JykuY3NzKHtcImFuaW1hdGlvblwiOiBcIm5vbmVcIiwgXCJ6LWluZGV4XCI6XCIwXCIgfSlcclxuXHRcdFx0XHRcdCQoJy5ib3hfb3BlbicpLmF0dHIoe1wic3R5bGVcIjogXCJ0cmFuc2Zvcm06IHNjYWxlKDEpXCJ9KSBcclxuXHRcdFx0XHRcdCQoJy5kd2luZicpLmNsaWNrKGZ1bmN0aW9uKCl7IFxyXG5cdFx0XHRcdFx0XHQkKCcjbXVzaWNiZycpLnJlbW92ZSgpOyAgXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pOyBcclxuXHRcdFx0fSwgOTAwKTsgXHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdG11c2ljKCl7XHJcblx0XHQkKCdib2R5JykuYXBwZW5kKCc8YXVkaW8gYXV0b3BsYXk9XCJhdXRvcGxheVwiIGlkPVwibXVzaWNiZ1wiPjxzb3VyY2Ugc3JjPVwiaHR0cHM6Ly9zNDdtYW4uc3RvcmFnZS55YW5kZXgubmV0L2dldC1tcDMvNGM4ZDk2NTBjZjBhMzg2MTAyMjJjYTdlMGY4YTcwZjQvMDAwNTc4MDVmZTg0ZWY3Mi9tdXNpYy82LzgvZGF0YS0wLjY6MjE4Njg4MzgzNjk6NDgxNjc3MD90cmFjay1pZD0zMTc4NjQ0MCZwbGF5PWZhbHNlXCIgdHlwZT1cImF1ZGlvL21wZWdcIiAvPjwvYXVkaW8+ICcpO1xyXG5cdH1cclxuXHJcblx0cmFpbigpIHsgIFxyXG5cdFx0JCgnLnJhaW4nKS5lbXB0eSgpOyBcclxuXHRcdHZhciBpbmNyZW1lbnQgPSAwO1xyXG5cdFx0dmFyIGRyb3BzID0gXCJcIjtcclxuXHRcdHZhciBiYWNrRHJvcHMgPSBcIlwiO1xyXG5cdFxyXG5cdFx0d2hpbGUgKGluY3JlbWVudCA8IDEwMCkgeyBcclxuXHRcdHZhciByYW5kb0h1bmRvID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5OCAtIDEgKyAxKSArIDEpKTsgXHJcblx0XHR2YXIgcmFuZG9GaXZlciA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNSAtIDIgKyAxKSArIDIpKTsgXHJcblx0XHRpbmNyZW1lbnQgKz0gcmFuZG9GaXZlcjsgXHJcblx0XHRkcm9wcyArPSAnPGRpdiBjbGFzcz1cImRyb3BcIiBzdHlsZT1cImxlZnQ6ICcgKyBpbmNyZW1lbnQgKyAnJTsgYm90dG9tOiAnICsgKHJhbmRvRml2ZXIgKyByYW5kb0ZpdmVyIC0gMSArIDEwMCkgKyAnJTsgYW5pbWF0aW9uLWRlbGF5OiAwLicgKyByYW5kb0h1bmRvICsgJ3M7IGFuaW1hdGlvbi1kdXJhdGlvbjogMC41JyArIHJhbmRvSHVuZG8gKyAncztcIj48ZGl2IGNsYXNzPVwic3RlbVwiIHN0eWxlPVwiYW5pbWF0aW9uLWRlbGF5OiAwLicgKyByYW5kb0h1bmRvICsgJ3M7IGFuaW1hdGlvbi1kdXJhdGlvbjogMC41JyArIHJhbmRvSHVuZG8gKyAncztcIj48L2Rpdj48ZGl2IGNsYXNzPVwic3BsYXRcIiBzdHlsZT1cImFuaW1hdGlvbi1kZWxheTogMC4nICsgcmFuZG9IdW5kbyArICdzOyBhbmltYXRpb24tZHVyYXRpb246IDAuNScgKyByYW5kb0h1bmRvICsgJ3M7XCI+PC9kaXY+PC9kaXY+JztcclxuXHRcdGJhY2tEcm9wcyArPSAnPGRpdiBjbGFzcz1cImRyb3BcIiBzdHlsZT1cInJpZ2h0OiAnICsgaW5jcmVtZW50ICsgJyU7IGJvdHRvbTogJyArIChyYW5kb0ZpdmVyICsgcmFuZG9GaXZlciAtIDEgKyAxMDApICsgJyU7IGFuaW1hdGlvbi1kZWxheTogMC4nICsgcmFuZG9IdW5kbyArICdzOyBhbmltYXRpb24tZHVyYXRpb246IDAuNScgKyByYW5kb0h1bmRvICsgJ3M7XCI+PGRpdiBjbGFzcz1cInN0ZW1cIiBzdHlsZT1cImFuaW1hdGlvbi1kZWxheTogMC4nICsgcmFuZG9IdW5kbyArICdzOyBhbmltYXRpb24tZHVyYXRpb246IDAuNScgKyByYW5kb0h1bmRvICsgJ3M7XCI+PC9kaXY+PGRpdiBjbGFzcz1cInNwbGF0XCIgc3R5bGU9XCJhbmltYXRpb24tZGVsYXk6IDAuJyArIHJhbmRvSHVuZG8gKyAnczsgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjUnICsgcmFuZG9IdW5kbyArICdzO1wiPjwvZGl2PjwvZGl2Pic7XHJcblx0XHR9XHJcblx0XHJcblx0XHQkKCcucmFpbi5mcm9udC1yb3cnKS5hcHBlbmQoZHJvcHMpO1xyXG5cdFx0JCgnLnJhaW4uYmFjay1yb3cnKS5hcHBlbmQoYmFja0Ryb3BzKTsgIFxyXG5cdH1cclxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/components/scene2.js\n");

/***/ }),

/***/ "./src/js/components/site.js":
/*!***********************************!*\
  !*** ./src/js/components/site.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.Site = undefined;\n\nvar _scene = __webpack_require__(/*! ./scene2 */ \"./src/js/components/scene2.js\");\n\nvar _content = __webpack_require__(/*! ./content.js */ \"./src/js/components/content.js\");\n\nvar Site = exports.Site = function () {\n\t$('.jarallax').jarallax({\n\t\tspeed: 0.2\n\t});\n\t$('.navlink').hover(function () {\n\t\tif (!$(this).hasClass('activeli')) {\n\t\t\t$(this).addClass('showli');\n\t\t}\n\t}, function () {\n\t\tif (!$(this).hasClass('activeli')) {\n\t\t\t$(this).removeClass('showli');\n\t\t}\n\t});\n\t// footer \n\tif ($('body').height() >= 1302 || $('body').height() >= 400 && $('body').width() <= 550) {\n\t\t$('.footer-out').css({ 'position': 'absolute', 'bottom': '0' });\n\t}\n\t// scroll \n\t$(window).scroll(function () {\n\t\tif ($(this).scrollTop() > 20) {\n\t\t\t$('.nav').css({ \"position\": \"fixed\", \"width\": \"100%\", \"top\": \"0\" });\n\t\t} else {\n\t\t\t$('.nav').css({ \"position\": \"relative\", \"width\": \"100%\", \"top\": \"0\" });\n\t\t}\n\t});\n\t// event\n\t$('.play-game').one('click', function () {\n\t\t$('.movie').addClass('mv-hide');\n\t\t$('.movie').append('<div class=\"bt_close\"></div>');\n\t\tvar yt = $('#yt');\n\t\tyt.css({ \"display\": \"block\" });\n\t\tyt.attr('src', yt.attr('src') + '&autoplay=1');\n\t\t// .bt_close\n\t\t$('.bt_close').one('click', function () {\n\t\t\t$('body').empty();\n\t\t\t// $('.d').remove();\n\t\t\t// $('*[src=\"https://www.youtube.com/iframe_api\"]').remove();\n\t\t\t// $('#www-widgetapi-script').remove();\n\t\t\t(0, _content.content)();\n\t\t\tnew _scene.Scene2();\n\t\t});\n\t});\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50cy9zaXRlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3NpdGUuanM/ZjhjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NjZW5lMn0gZnJvbSAnLi9zY2VuZTInO1xyXG5pbXBvcnQge2NvbnRlbnR9IGZyb20gJy4vY29udGVudC5qcyc7XHJcblxyXG5leHBvcnQgdmFyIFNpdGUgPSBmdW5jdGlvbiAoICl7XHJcblx0JCgnLmphcmFsbGF4JykuamFyYWxsYXgoe1xyXG5cdFx0c3BlZWQ6IDAuMlxyXG5cdH0pO1xyXG5cdCQoJy5uYXZsaW5rJykuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHRcdGlmKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVsaScpKXtcclxuXHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnc2hvd2xpJyk7XHJcblx0XHR9XHJcblx0fSwgZnVuY3Rpb24oKXtcclxuXHRcdGlmKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmVsaScpKXtcclxuXHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnc2hvd2xpJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0Ly8gZm9vdGVyIFxyXG5cdGlmICgkKCdib2R5JykuaGVpZ2h0KCkgPj0gMTMwMiAgfHwgKCQoJ2JvZHknKS5oZWlnaHQoKSA+PSA0MDAgJiYgJCgnYm9keScpLndpZHRoKCkgPD0gNTUwICkpIHtcclxuXHQkKCcuZm9vdGVyLW91dCcpLmNzcyh7ICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsICdib3R0b20nOiAnMCd9KVxyXG5cdH1cclxuXHQvLyBzY3JvbGwgXHJcblx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDIwKSB7XHJcblx0XHRcdCQoJy5uYXYnKS5jc3Moe1wicG9zaXRpb25cIjpcImZpeGVkXCIsIFwid2lkdGhcIjpcIjEwMCVcIiwgXCJ0b3BcIjpcIjBcIn0pXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0JCgnLm5hdicpLmNzcyh7XCJwb3NpdGlvblwiOlwicmVsYXRpdmVcIiwgXCJ3aWR0aFwiOlwiMTAwJVwiLCBcInRvcFwiOlwiMFwifSlcclxuXHRcdH0gXHJcbiAgICB9KTtcclxuICAgIC8vIGV2ZW50XHJcbiAgICAkKCcucGxheS1nYW1lJykub25lKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgIFxyXG4gICAgICAgICQoJy5tb3ZpZScpLmFkZENsYXNzKCdtdi1oaWRlJyk7ICBcclxuICAgICAgICAkKCcubW92aWUnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJidF9jbG9zZVwiPjwvZGl2PicpOyAgICBcclxuICAgICAgICBsZXQgeXQgPSAkKCcjeXQnKTsgXHJcbiAgICAgICAgeXQgLmNzcyh7XCJkaXNwbGF5XCI6XCJibG9ja1wiIH0pXHJcbiAgICAgICAgeXQuYXR0cignc3JjJywgeXQuYXR0cignc3JjJykrJyZhdXRvcGxheT0xJyk7IFxyXG4gICAgICAgIC8vIC5idF9jbG9zZVxyXG4gICAgICAgICQoJy5idF9jbG9zZScpLm9uZSgnY2xpY2snLCBmdW5jdGlvbiAoKSB7IFxyXG5cdFx0XHQkKCdib2R5JykuZW1wdHkoKTtcclxuXHRcdFx0Ly8gJCgnLmQnKS5yZW1vdmUoKTtcclxuXHRcdFx0Ly8gJCgnKltzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpXCJdJykucmVtb3ZlKCk7XHJcblx0XHRcdC8vICQoJyN3d3ctd2lkZ2V0YXBpLXNjcmlwdCcpLnJlbW92ZSgpO1xyXG5cdFx0XHRjb250ZW50KCk7XHJcblx0XHRcdG5ldyBTY2VuZTIoKTtcclxuICAgICAgICB9KVxyXG5cdH0pICBcclxuXHRcclxufSgpOyBcclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/components/site.js\n");

/***/ })

/******/ });