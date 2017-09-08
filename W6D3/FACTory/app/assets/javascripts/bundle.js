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

const FollowToggle = __webpack_require__(1);

$(() => {
  FollowToggle.getAllFTogs();
  console.log('it ran!');
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(2);

class FollowToggle {
  constructor($el) {
    this.$el = $el;
    this.userID = $el.data('user-id');
    this.followState = $el.data('follow-state');

    this.render();
    this.handleClick();
  }

  static allFTogButtons() {
    return $('.follow-toggle');
  }

  static getAllFTogs() {
    const $all = FollowToggle.allFTogButtons();

    return $all.map((idx, el) => {
      new FollowToggle($(el));
    });
  }

  render() {
    const btnText = this.followState === "unfollowed" ? 'Follow!' : 'Unfollow!';
    this.$el.text(btnText);
  }

  toggle() {
    const updatedStatus = this.followState === 'followed' ? 'unfollowed' : 'followed';

    this.followState = updatedStatus;
    this.render();
  }

  laugh() {
    console.log('hahahaha');
  }

  handleClick() {
    this.$el.on('click', (e) => {
      debugger;
      let success;
      const id = this.userID;

      if (this.followState === 'unfollowed') {
        success = APIUtil.followUser(id);
      } else if (this.followState === 'followed') {
        success = APIUtil.unfollowUser(id);
      }

      if (success) {
        this.toggle();
      }
    });
  }

  // handleClick() {
  //   this.$el.on('click', (e) => {
  //     e.preventDefault();
  //
  //     let method = null;
  //     if (this.followState === "unfollowed") {
  //       method = "Post";
  //     } else {
  //       method = "Delete";
  //     }
  //
  //     $.ajax({
  //       url: `/users/${this.userID}/follow`,
  //       type: method,
  //       dataType: "JSON",
  //       success: this.toggle.bind(this),
  //       error: this.laugh
  //     });
  //   });
  // }
}

module.exports = FollowToggle;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const APIUtil = {
  followUser: (id) => {
    const method = 'post';

    $.ajax({
      url: `/users/${id}/follow`,
      type: method,
      dataType: "JSON",
      success: function() { return true; },
      error: () => false
    });
  },

  unfollowUser: (id) => {
    const method = 'delete';

    $.ajax({
      url: `/users/${id}/follow`,
      type: method,
      dataType: "JSON",
      success: () => true,
      error: () => false
    });
  },
};

module.exports = APIUtil;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map