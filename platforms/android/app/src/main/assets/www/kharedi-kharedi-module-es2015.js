(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kharedi-kharedi-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/kharedi/kharedi.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kharedi/kharedi.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>खरेदी</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"kharedi-logo\" align=\"center\">\n    <img src=\"assets/img/about/surachita.jpeg\" height=\"200px\" width=\"200px\">\n  </div>\n  <div align=\"center\">\n    <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLScH17YTdd9ZpjJYe6AV6R3Ygf8EF37BjCKmO4xwr0nvFT4deQ/viewform?embedded=true\" width=\"100%\" height=\"900px\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"1\">Loading…</iframe>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/kharedi/kharedi-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/kharedi/kharedi-routing.module.ts ***!
  \***************************************************/
/*! exports provided: KharediPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KharediPageRoutingModule", function() { return KharediPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _kharedi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kharedi.page */ "./src/app/kharedi/kharedi.page.ts");




const routes = [
    {
        path: '',
        component: _kharedi_page__WEBPACK_IMPORTED_MODULE_3__["KharediPage"]
    }
];
let KharediPageRoutingModule = class KharediPageRoutingModule {
};
KharediPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], KharediPageRoutingModule);



/***/ }),

/***/ "./src/app/kharedi/kharedi.module.ts":
/*!*******************************************!*\
  !*** ./src/app/kharedi/kharedi.module.ts ***!
  \*******************************************/
/*! exports provided: KharediPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KharediPageModule", function() { return KharediPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _kharedi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kharedi-routing.module */ "./src/app/kharedi/kharedi-routing.module.ts");
/* harmony import */ var _kharedi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kharedi.page */ "./src/app/kharedi/kharedi.page.ts");







let KharediPageModule = class KharediPageModule {
};
KharediPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _kharedi_routing_module__WEBPACK_IMPORTED_MODULE_5__["KharediPageRoutingModule"]
        ],
        declarations: [_kharedi_page__WEBPACK_IMPORTED_MODULE_6__["KharediPage"]]
    })
], KharediPageModule);



/***/ }),

/***/ "./src/app/kharedi/kharedi.page.scss":
/*!*******************************************!*\
  !*** ./src/app/kharedi/kharedi.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2toYXJlZGkva2hhcmVkaS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/kharedi/kharedi.page.ts":
/*!*****************************************!*\
  !*** ./src/app/kharedi/kharedi.page.ts ***!
  \*****************************************/
/*! exports provided: KharediPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KharediPage", function() { return KharediPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KharediPage = class KharediPage {
    constructor() { }
    ngOnInit() {
    }
};
KharediPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kharedi',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kharedi.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/kharedi/kharedi.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kharedi.page.scss */ "./src/app/kharedi/kharedi.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], KharediPage);



/***/ })

}]);
//# sourceMappingURL=kharedi-kharedi-module-es2015.js.map