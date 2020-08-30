(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sell-sell-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sell/sell.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sell/sell.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>विक्री</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"kharedi-logo\" align=\"center\">\n    <img src=\"assets/img/about/surachita.jpeg\" height=\"200px\">\n  </div>\n\n  <div align=\"center\">\n    <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSfx_UPl6IEO4k7A3P1IgCb2ZhTKF4Q7ZI6RPhIwyNDsw8-7jw/viewform?embedded=true\" width=\"100%\" height=\"900px\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"1\">Loading…</iframe>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/sell/sell-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/sell/sell-routing.module.ts ***!
  \*********************************************/
/*! exports provided: SellPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellPageRoutingModule", function() { return SellPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sell_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sell.page */ "./src/app/sell/sell.page.ts");




const routes = [
    {
        path: '',
        component: _sell_page__WEBPACK_IMPORTED_MODULE_3__["SellPage"]
    }
];
let SellPageRoutingModule = class SellPageRoutingModule {
};
SellPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellPageRoutingModule);



/***/ }),

/***/ "./src/app/sell/sell.module.ts":
/*!*************************************!*\
  !*** ./src/app/sell/sell.module.ts ***!
  \*************************************/
/*! exports provided: SellPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellPageModule", function() { return SellPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sell_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sell-routing.module */ "./src/app/sell/sell-routing.module.ts");
/* harmony import */ var _sell_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sell.page */ "./src/app/sell/sell.page.ts");







let SellPageModule = class SellPageModule {
};
SellPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sell_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellPageRoutingModule"]
        ],
        declarations: [_sell_page__WEBPACK_IMPORTED_MODULE_6__["SellPage"]]
    })
], SellPageModule);



/***/ }),

/***/ "./src/app/sell/sell.page.scss":
/*!*************************************!*\
  !*** ./src/app/sell/sell.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGwvc2VsbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/sell/sell.page.ts":
/*!***********************************!*\
  !*** ./src/app/sell/sell.page.ts ***!
  \***********************************/
/*! exports provided: SellPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellPage", function() { return SellPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SellPage = class SellPage {
    constructor() { }
    ngOnInit() {
    }
};
SellPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sell',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sell.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sell/sell.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sell.page.scss */ "./src/app/sell/sell.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SellPage);



/***/ })

}]);
//# sourceMappingURL=sell-sell-module-es2015.js.map