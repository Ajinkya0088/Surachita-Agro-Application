function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["masik-masik-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/masik/masik.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/masik/masik.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMasikMasikPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>कृषी जागरण मराठी</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div align=\"center\">\n    <iframe src=\"https://marathi.krishijagran.com/\" width=\"100%\" height=\"900px\" style=\"overflow:auto\" ></iframe>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/masik/masik-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/masik/masik-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: MasikPageRoutingModule */

  /***/
  function srcAppMasikMasikRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MasikPageRoutingModule", function () {
      return MasikPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _masik_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./masik.page */
    "./src/app/masik/masik.page.ts");

    var routes = [{
      path: '',
      component: _masik_page__WEBPACK_IMPORTED_MODULE_3__["MasikPage"]
    }];

    var MasikPageRoutingModule = function MasikPageRoutingModule() {
      _classCallCheck(this, MasikPageRoutingModule);
    };

    MasikPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MasikPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/masik/masik.module.ts":
  /*!***************************************!*\
    !*** ./src/app/masik/masik.module.ts ***!
    \***************************************/

  /*! exports provided: MasikPageModule */

  /***/
  function srcAppMasikMasikModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MasikPageModule", function () {
      return MasikPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _masik_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./masik-routing.module */
    "./src/app/masik/masik-routing.module.ts");
    /* harmony import */


    var _masik_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./masik.page */
    "./src/app/masik/masik.page.ts");

    var MasikPageModule = function MasikPageModule() {
      _classCallCheck(this, MasikPageModule);
    };

    MasikPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _masik_routing_module__WEBPACK_IMPORTED_MODULE_5__["MasikPageRoutingModule"]],
      declarations: [_masik_page__WEBPACK_IMPORTED_MODULE_6__["MasikPage"]]
    })], MasikPageModule);
    /***/
  },

  /***/
  "./src/app/masik/masik.page.scss":
  /*!***************************************!*\
    !*** ./src/app/masik/masik.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppMasikMasikPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hc2lrL21hc2lrLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/masik/masik.page.ts":
  /*!*************************************!*\
    !*** ./src/app/masik/masik.page.ts ***!
    \*************************************/

  /*! exports provided: MasikPage */

  /***/
  function srcAppMasikMasikPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MasikPage", function () {
      return MasikPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MasikPage =
    /*#__PURE__*/
    function () {
      function MasikPage() {
        _classCallCheck(this, MasikPage);
      }

      _createClass(MasikPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MasikPage;
    }();

    MasikPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-masik',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./masik.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/masik/masik.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./masik.page.scss */
      "./src/app/masik/masik.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MasikPage);
    /***/
  }
}]);
//# sourceMappingURL=masik-masik-module-es5.js.map