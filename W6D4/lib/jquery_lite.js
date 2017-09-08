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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DOMNodeCollection = __webpack_require__(1);

$( () => {
  window.$l = (selector) => {
    if (typeof selector === 'string'){
      let elementList = Array.from(document.querySelectorAll(selector));
      return new DOMNodeCollection(elementList);
    }else if(selector instanceof HTMLElement){
      return new DOMNodeCollection([selector]);
    }
  };

});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DOMNodeCollection {
  constructor($el){
    this.$el = $el;
  }

  html(string = undefined){
    if (typeof string === 'undefined'){
      return this.$el[0].innerHTML;
    }else{
      this.$el.forEach(el => {
        el.innerHTML = string;
      });
    }
  }

  empty(){
    this.$el.forEach(el => {
      el.innerHTML = "";
    });
  }

  append(string){
    this.$el.forEach(el => {
      el.innerHTML += string;
    });
  }

  attr(tag, data){
    this.$el.forEach(el => {
      el.attributes[tag] = data;
    });
  }

  addClass(c){
    this.$el.forEach(el => {
      el.className += ", " + c;
    });
  }

  removeClass(c){
    this.$el.forEach(el => {
      let classes = el.className.split(",");
      let wanted = [];
      classes.forEach(cl => {
        if(c !== cl) wanted.push(cl);
      });
      el.className = wanted.join(", ");
    });
  }

  //traversal
  children(){
    let kids = [];
    this.$el.forEach(el => {
      Array.from(el.children).forEach(cl => {
        kids.push(cl);
      });
    });
    return new DOMNodeCollection(kids);
  }

  parent(){
    let parents = [];
    this.$el.forEach(el => {
      parents.push(el.parentNode);
    });

    return new DOMNodeCollection(parents);
  }

  find(selector){
    let result = [];
    this.$el.forEach(el => {
      result.push(el.querySelectorAll(selector));
    });
    return new DOMNodeCollection(result);
  }

  remove(){
    this.$el.forEach(el => {
      el.remove();
    });

    this.$el = [];
  }

}


module.exports = DOMNodeCollection;


/***/ })
/******/ ]);