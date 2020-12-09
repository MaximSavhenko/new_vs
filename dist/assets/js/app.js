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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function toggleMobileMenu() {\r\n    var btnMenu = document.querySelector(\".header__btn-menu\")\r\n  \r\n  \r\n    btnMenu.onclick = function () {\r\n      document.body.classList.toggle(\"overflow\");\r\n      btnMenu.classList.toggle(\"animationClose\");\r\n    };\r\n  }\r\n  \r\ntoggleMobileMenu();\r\n  \r\n  \r\nlet t;\r\nfunction up() {\r\n  let top = Math.max(\r\n    document.body.scrollTop,\r\n    document.documentElement.scrollTop\r\n  );\r\n  if (top > 0) {\r\n    window.scrollBy(0, (top + 100) / -10);\r\n    t = setTimeout(\"up()\", 10);\r\n  } else clearTimeout(t);\r\n  return false;\r\n}\r\n  \r\n  function openSubLang() {\r\n    var spanBtn = document.getElementById(\"openSettingLang\")\r\n      \r\n  \r\n    spanBtn.onclick = function () {\r\n      spanBtn.classList.toggle(\"transformArrow\");\r\n    };\r\n  }\r\n  \r\n  openSubLang();\r\n\r\n  function openArrow() {\r\n    let arrow = document.querySelectorAll(\".topMenu__hiddenMenu-item\");\r\n        arrowSub = document.querySelectorAll(\".topMenu__hiddenMenu-sub-item\");\r\n        \r\n      for (let elem of arrow) {\r\n        elem.onclick = function () {\r\n        elem.classList.toggle('activeArrow')\r\n        }\r\n      }\r\n      for (let elem of arrowSub) {\r\n        elem.onclick = function () {\r\n        elem.classList.toggle('activeArrowSub')\r\n        }\r\n      }\r\n      \r\n    }\r\n    \r\n  \r\n  openArrow();\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function(){\r\n    $('.product__wrap-slider').slick({\r\n      vertical: true,\r\n      verticalSwiping: true,\r\n      slidesToShow: 3,\r\n      arrows: true\r\n    });\r\n  });\r\n\r\n$(document).ready(function(){\r\n    $('.product__previews-slider').slick({\r\n      // centerMode: true,\r\n      slidesToShow: 1,\r\n      arrows: true,\r\n      infinite: false,\r\n    });\r\n  });\r\n\r\n$(document).ready(function(){\r\n    $('.product__viewed-slider').slick({\r\n      slidesToShow: 4,\r\n      slidesToScroll: 1,\r\n      arrows: true,\r\n      infinite: !1\r\n    });\r\n  });\n\n//# sourceURL=webpack:///./src/assets/js/slider.js?");

/***/ }),

/***/ 0:
/*!***************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ./src/assets/js/slider.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\Max\\Desktop\\WORK\\volshebnayaStrana_gulp\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! C:\\Users\\Max\\Desktop\\WORK\\volshebnayaStrana_gulp\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\Max\\Desktop\\WORK\\volshebnayaStrana_gulp\\src\\assets\\js\\slider.js */\"./src/assets/js/slider.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js_./src/assets/js/slider.js?");

/***/ })

/******/ });