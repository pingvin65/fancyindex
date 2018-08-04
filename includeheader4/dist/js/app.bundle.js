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
/******/ 	__webpack_require__.p = "/includeheader4";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/icons/apk.png":
/*!***************************!*\
  !*** ./src/icons/apk.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/apk.png";

/***/ }),

/***/ "./src/icons/back.png":
/*!****************************!*\
  !*** ./src/icons/back.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/back.png";

/***/ }),

/***/ "./src/icons/bat.png":
/*!***************************!*\
  !*** ./src/icons/bat.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/bat.png";

/***/ }),

/***/ "./src/icons/bin.png":
/*!***************************!*\
  !*** ./src/icons/bin.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/bin.png";

/***/ }),

/***/ "./src/icons/blank.png":
/*!*****************************!*\
  !*** ./src/icons/blank.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/blank.png";

/***/ }),

/***/ "./src/icons/css.png":
/*!***************************!*\
  !*** ./src/icons/css.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/css.png";

/***/ }),

/***/ "./src/icons/exe.png":
/*!***************************!*\
  !*** ./src/icons/exe.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/exe.png";

/***/ }),

/***/ "./src/icons/file.png":
/*!****************************!*\
  !*** ./src/icons/file.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/file.png";

/***/ }),

/***/ "./src/icons/folder.png":
/*!******************************!*\
  !*** ./src/icons/folder.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/folder.png";

/***/ }),

/***/ "./src/icons/html.png":
/*!****************************!*\
  !*** ./src/icons/html.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/html.png";

/***/ }),

/***/ "./src/icons/html2.png":
/*!*****************************!*\
  !*** ./src/icons/html2.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/html2.png";

/***/ }),

/***/ "./src/icons/image.png":
/*!*****************************!*\
  !*** ./src/icons/image.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/image.png";

/***/ }),

/***/ "./src/icons/image2.png":
/*!******************************!*\
  !*** ./src/icons/image2.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/image2.png";

/***/ }),

/***/ "./src/icons/js.png":
/*!**************************!*\
  !*** ./src/icons/js.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/js.png";

/***/ }),

/***/ "./src/icons/json.png":
/*!****************************!*\
  !*** ./src/icons/json.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/json.png";

/***/ }),

/***/ "./src/icons/move.png":
/*!****************************!*\
  !*** ./src/icons/move.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/move.png";

/***/ }),

/***/ "./src/icons/mp4.png":
/*!***************************!*\
  !*** ./src/icons/mp4.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/mp4.png";

/***/ }),

/***/ "./src/icons/ovpn.png":
/*!****************************!*\
  !*** ./src/icons/ovpn.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/ovpn.png";

/***/ }),

/***/ "./src/icons/pdf.png":
/*!***************************!*\
  !*** ./src/icons/pdf.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/pdf.png";

/***/ }),

/***/ "./src/icons/php.png":
/*!***************************!*\
  !*** ./src/icons/php.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/php.png";

/***/ }),

/***/ "./src/icons/rb.png":
/*!**************************!*\
  !*** ./src/icons/rb.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/rb.png";

/***/ }),

/***/ "./src/icons/scss.png":
/*!****************************!*\
  !*** ./src/icons/scss.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/scss.png";

/***/ }),

/***/ "./src/icons/sound.png":
/*!*****************************!*\
  !*** ./src/icons/sound.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/sound.png";

/***/ }),

/***/ "./src/icons/txt.png":
/*!***************************!*\
  !*** ./src/icons/txt.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/txt.png";

/***/ }),

/***/ "./src/icons/zip.png":
/*!***************************!*\
  !*** ./src/icons/zip.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icons/zip.png";

/***/ }),

/***/ "./src/images/favicon16x16.png":
/*!*************************************!*\
  !*** ./src/images/favicon16x16.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/favicon16x16.png";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/logo.png";

/***/ }),

/***/ "./src/js/dim.js":
/*!***********************!*\
  !*** ./src/js/dim.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
    var spanToggle = document.getElementById("toggle");
    var widthnavbarin = document.getElementById('navbar');
    var toggleul = "toggleul";
    var oldclass = "nav";
    var newclass = "test";
    var toggle = "toggle";
    var see = "see";

    window.addEventListener("resize", resizeThrottler, false);

    var resizeTimeout;
    function resizeThrottler() {
        // ignore resize events as long as an actualResizeHandler execution is in the queue
        if (!resizeTimeout) {
            resizeTimeout = setTimeout(function () {
                resizeTimeout = null;
                actualResizeHandler();

                // The actualResizeHandler will execute at a rate of 15fps
            }, 100);
        }
    }
    function resettoggleul() {
        var elmtnav = widthnavbarin.firstElementChild.children;
        var seeclass = widthnavbarin.getElementsByClassName(see);
        spanToggle.innerHTML = "\u2261";
        spanToggle.removeAttribute("style");
        if (elmtnav.length > 0) {
            for (var i = 0; i < elmtnav.length; i++) {
                if (elmtnav[i].classList.contains(toggleul)) {
                    elmtnav[i].classList.remove(toggleul);
                    console.log("i   " + i + "   " + elmtnav[i].classList);
                }else if(elmtnav[i].classList.contains(newclass)){
                    elmtnav[i].classList.remove(oldclass);
                    elmtnav[i].classList.add(newclass);

                }else if(elmtnav[i].classList.contains(see)){
                    elmtnav[i].classList.remove(see);

                }
            }
        }
        if (seeclass.length > 0){
            for (var i = 0; i < seeclass.length; i++) {
                seeclass[i].classList.remove(see);
            }
        }
    }
    function actualResizeHandler() {
        // handle the resize event


        var navwidth = 0;
        var contentwidth = widthnavbarin.firstElementChild.offsetWidth;
        var elmtnav = widthnavbarin.firstElementChild.children;

        
        if (elmtnav.length > 0) {
            for (var i = 0; i < elmtnav.length; i++) {
                if (elmtnav[i].offsetWidth === 0) {
                    if (elmtnav[i].classList.contains(newclass)) {
                        elmtnav[i].classList.remove(newclass);
                        elmtnav[i].classList.add(oldclass);
                        navwidth = navwidth + elmtnav[i].offsetWidth;
                        elmtnav[i].classList.remove(oldclass);
                        elmtnav[i].classList.add(newclass);
                    }

                } else {
                    navwidth = navwidth + elmtnav[i].offsetWidth;
                }
            }
        }
        if (navwidth + 50 > contentwidth) {
            resettoggleul();
            for (var i = 0; i < elmtnav.length; i++) {
                //console.log(elmtnav[i]);
                if (i !== 0) {
                    if (!elmtnav[i].classList.contains(newclass) && !elmtnav[i].classList.contains(toggle)) {
                        elmtnav[i].classList.remove(oldclass);
                        elmtnav[i].classList.add(newclass);
                    } else if (elmtnav[i].classList.contains(toggle)) {
                        //console.log(spanToggle);
                        spanToggle.setAttribute("style", "display: inline-block;")
                    }
                }
            }
        } else {
            //resettoggleul();
            for (var i = 0; i < elmtnav.length; i++) {
                if (i !== 0) {
                    if (elmtnav[i].classList.contains(newclass)) {
                        elmtnav[i].classList.remove(newclass);
                        elmtnav[i].classList.add(oldclass);
                        spanToggle.removeAttribute("style");
                    }
                }
            }

        }

    }
    actualResizeHandler();


    spanToggle.addEventListener("click", function (evn) {
       
        var elmtnav = widthnavbarin.firstElementChild.children;
        var oldclass = "nav";

        
        if (spanToggle.innerHTML === "\u2717") {
            spanToggle.innerHTML = "\u2261";

            if (elmtnav.length > 0) {
                for (var i = 0; i < elmtnav.length; i++) {
                    if (elmtnav[i].classList.contains(toggleul)) {
                        elmtnav[i].classList.remove(toggleul);
                        console.log("i   " + i + "   " + elmtnav[i].classList);
                    }
                }
            }
        } else {
            spanToggle.innerHTML = "\u2717";

            for (var i = 0; i < elmtnav.length; i++) {
                if (elmtnav[i].classList.contains(newclass)) {
                    elmtnav[i].classList.add(toggleul);
                }
            }
        }
        //console.log(spanToggle.innerHTML);
    })
}());


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menus */ "./src/js/menus.js");
/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menus__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dim */ "./src/js/dim.js");
/* harmony import */ var _dim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _indexpath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indexpath */ "./src/js/indexpath.js");
/* harmony import */ var _indexpath__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_indexpath__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_favicon16x16_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/favicon16x16.png */ "./src/images/favicon16x16.png");
/* harmony import */ var _images_favicon16x16_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_favicon16x16_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons_apk_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/apk.png */ "./src/icons/apk.png");
/* harmony import */ var _icons_apk_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_icons_apk_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons_back_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/back.png */ "./src/icons/back.png");
/* harmony import */ var _icons_back_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_icons_back_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icons_blank_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/blank.png */ "./src/icons/blank.png");
/* harmony import */ var _icons_blank_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_icons_blank_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _icons_bat_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icons/bat.png */ "./src/icons/bat.png");
/* harmony import */ var _icons_bat_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_icons_bat_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _icons_bin_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icons/bin.png */ "./src/icons/bin.png");
/* harmony import */ var _icons_bin_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_icons_bin_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _icons_css_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icons/css.png */ "./src/icons/css.png");
/* harmony import */ var _icons_css_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_icons_css_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _icons_exe_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../icons/exe.png */ "./src/icons/exe.png");
/* harmony import */ var _icons_exe_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_icons_exe_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _icons_file_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../icons/file.png */ "./src/icons/file.png");
/* harmony import */ var _icons_file_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_icons_file_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _icons_folder_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../icons/folder.png */ "./src/icons/folder.png");
/* harmony import */ var _icons_folder_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_icons_folder_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _icons_html2_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../icons/html2.png */ "./src/icons/html2.png");
/* harmony import */ var _icons_html2_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_icons_html2_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _icons_html_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../icons/html.png */ "./src/icons/html.png");
/* harmony import */ var _icons_html_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_icons_html_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _icons_image2_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../icons/image2.png */ "./src/icons/image2.png");
/* harmony import */ var _icons_image2_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_icons_image2_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _icons_image_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../icons/image.png */ "./src/icons/image.png");
/* harmony import */ var _icons_image_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_icons_image_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _icons_json_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../icons/json.png */ "./src/icons/json.png");
/* harmony import */ var _icons_json_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_icons_json_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _icons_js_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../icons/js.png */ "./src/icons/js.png");
/* harmony import */ var _icons_js_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_icons_js_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _icons_ovpn_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../icons/ovpn.png */ "./src/icons/ovpn.png");
/* harmony import */ var _icons_ovpn_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_icons_ovpn_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _icons_move_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../icons/move.png */ "./src/icons/move.png");
/* harmony import */ var _icons_move_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_icons_move_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _icons_mp4_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../icons/mp4.png */ "./src/icons/mp4.png");
/* harmony import */ var _icons_mp4_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_icons_mp4_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _icons_pdf_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../icons/pdf.png */ "./src/icons/pdf.png");
/* harmony import */ var _icons_pdf_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_icons_pdf_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _icons_php_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../icons/php.png */ "./src/icons/php.png");
/* harmony import */ var _icons_php_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_icons_php_png__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _icons_rb_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../icons/rb.png */ "./src/icons/rb.png");
/* harmony import */ var _icons_rb_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_icons_rb_png__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _icons_scss_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../icons/scss.png */ "./src/icons/scss.png");
/* harmony import */ var _icons_scss_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_icons_scss_png__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _icons_sound_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../icons/sound.png */ "./src/icons/sound.png");
/* harmony import */ var _icons_sound_png__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_icons_sound_png__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _icons_txt_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../icons/txt.png */ "./src/icons/txt.png");
/* harmony import */ var _icons_txt_png__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_icons_txt_png__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _icons_zip_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../icons/zip.png */ "./src/icons/zip.png");
/* harmony import */ var _icons_zip_png__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_icons_zip_png__WEBPACK_IMPORTED_MODULE_30__);


 





























//import '../icons/';
//import '../icons/';
//import '../icons/';

/***/ }),

/***/ "./src/js/indexpath.js":
/*!*****************************!*\
  !*** ./src/js/indexpath.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
    const indexname = document.getElementById('indexof');
    function checkpath(inpath) {

        return inpath !== '';
    }

    function createlinks(patnames2 = '') {
        var link = '';


        indexname.innerHTML = '';
        indexname.classList.add("addmargin");
        //var para = document.createElement("p");
        //var node = document.createTextNode("This is new.");
        var node;
        //para.appendChild(node);
        //indexname.appendChild(para);
        const homea = document.createElement("a");
        homea.setAttribute("href", "/");
        const homeimg = document.createElement("img");
        homeimg.setAttribute("src", "/includeheader4/images/logo.png");
        homeimg.setAttribute("width", "28");
        homeimg.setAttribute("height", "28");
        homeimg.classList.add("homeimg");
        homea.appendChild(homeimg)
        indexname.appendChild(homea);
        if (Array.isArray(patnames2)) {
            for (let index = 0; index < patnames2.length; index++) {
                if (index < patnames2.length - 1) {
                    var alink = document.createElement("a");
                    link += '/' + patnames2[index];
                    alink.setAttribute("href", link);
                    var node = document.createTextNode(patnames2[index]);
                    alink.appendChild(node);

                    node = document.createTextNode(' / ');
                    indexname.appendChild(node);
                    indexname.appendChild(alink);

                } else {
                    var node = document.createTextNode(' / ');
                    indexname.appendChild(node);
                    node = document.createTextNode(patnames2[index]);
                    indexname.appendChild(node);
                }
            }
        }
    }

    function styletable() {
        var bodyContent = document.getElementById("bcontent");
        var tablelist = bodyContent.getElementsByTagName("table");
        console.log(tablelist[0]);
    }
    const patnames = location.pathname.split("/");

    const patnames2 = patnames.filter(checkpath);
    createlinks(patnames2);
    styletable();
    //indexname.innerHTML = ''; //window.location.pathname;
    console.log(patnames2);
}());

/***/ }),

/***/ "./src/js/menus.js":
/*!*************************!*\
  !*** ./src/js/menus.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {


function hendlechaild(event) {
  var inels = document.getElementsByClassName("see");
  var childUl = event.target.nextElementSibling;
  if (inels.length > 0) {
    //console.log("inels.length " + inels.length);
    for (var i = 0; i < inels.length; i++) {
      if (event.target.id !== inels[i].id) {
        inels[i].classList.remove("see");     
      }
    }
  }

  if (childUl.classList.contains("see")) {
    childUl.classList.remove("see");
  } else {
    childUl.classList.add("see");
  }
}

var matches = document.getElementsByClassName('linkul');
for (var i = 0; i < matches.length; i++) {
  matches[i].nextElementSibling.id = 'linkul' + i;
  //console.log(matches[i].nextElementSibling.id);
  matches[i].setAttribute('id', 'linkul' + i)
  matches[i].addEventListener("click", hendlechaild, false);
}


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map