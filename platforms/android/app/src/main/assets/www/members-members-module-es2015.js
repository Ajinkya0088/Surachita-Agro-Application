(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-members-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/members.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/members/members.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title><b>संचालक मंडळ</b> </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n  <ion-content fullscreen=\"true\">\n    <!-- <ion-grid fixed>\n      <ion-row *ngFor=\"let m of members;let i=index;\">\n        <ion-col md-size=\"6\" size=\"10\"*ngIf=\"flag==false\"  >\n          <ion-card class=\"speaker-card\">\n            <ion-card-header (click)=\"show(m)\">\n              <ion-item detail=\"false\" lines=\"none\" class=\"speaker-item\" >\n                <ion-avatar slot=\"start\">\n                  <ion-icon name=\"person-outline\"></ion-icon>\n                </ion-avatar>\n                <ion-label color=\"dark\">\n                  <p><i><b>{{m.name}}</b></i></p>\n                  {{m.position}}\n                </ion-label>\n              </ion-item>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n        <ion-col >\n          <ion-card class=\"speaker-card\" *ngIf=\"flag==true && i==0\" (click)=\"clear()\">\n            <ion-card-header >\n\n                <ion-label color=\"primary\">\n                  <p><i><b>{{x.name}}</b></i></p>\n                </ion-label>\n            </ion-card-header>\n            <ion-card-content>\n              <p>{{x.age}}</p>\n              <p>{{x.phone}}</p>\n              <p>{{x.position}}</p>\n              <div align =\"center\">\n                <img [src]=\"x.image\"  width =\"150px\" height=\"150px\" >\n              </div> -->\n            <!-- </ion-card-content>\n          </ion-card>\n\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>  -->\n\n    <!-- <div align=\"center\">\n      <iframe src=\"https://docs.google.com/spreadsheets/d/e/2PACX-1vTKa0ZVAuYzeASCqrzFokAGy1mTIJxjhzi_sCjww1Y5tFhJAC9DwO6tXN2IXUbVgQ/pubhtml?gid=1578601038&amp;single=true&amp;widget=true&amp;headers=false\" width=\"100%\" height=\"900px\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"1\"></iframe>\n    </div> -->\n\n    <ion-slides  pager #Slider class=\"slides\" (ionSlidesDidLoad)=\"afterslidesLoad(Slider)\">\n      <ion-slide *ngFor=\"let m of members;\">\n        <ion-card class=\"speaker-card\" size=\"10\">\n          <ion-card-header >\n\n              <ion-label color=\"primary\">\n                <p><i><b>{{m.name}}</b></i></p>\n              </ion-label>\n          </ion-card-header>\n          <ion-card-content>\n            <p>{{m.age}}</p>\n            <p>{{m.phone}}</p>\n            <p>{{m.position}}</p>\n            <!-- <div align =\"center\">\n              <img [src]=\"m.image\"  width =\"15px\" height=\"15px\" >\n            </div> -->\n          </ion-card-content>\n        </ion-card>\n\n      </ion-slide>\n    </ion-slides>\n\n  </ion-content>\n");

/***/ }),

/***/ "./src/app/members.ts":
/*!****************************!*\
  !*** ./src/app/members.ts ***!
  \****************************/
/*! exports provided: Members */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Members", function() { return Members; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Members {
    constructor(name, phone, image, age, position) {
        this.name = name;
        this.phone = phone;
        this.image = image;
        this.age = age;
        this.position = position;
    }
}


/***/ }),

/***/ "./src/app/members/members-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/members/members-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MembersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPageRoutingModule", function() { return MembersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _members_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./members.page */ "./src/app/members/members.page.ts");




const routes = [
    {
        path: '',
        component: _members_page__WEBPACK_IMPORTED_MODULE_3__["MembersPage"]
    }
];
let MembersPageRoutingModule = class MembersPageRoutingModule {
};
MembersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MembersPageRoutingModule);



/***/ }),

/***/ "./src/app/members/members.module.ts":
/*!*******************************************!*\
  !*** ./src/app/members/members.module.ts ***!
  \*******************************************/
/*! exports provided: MembersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPageModule", function() { return MembersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _members_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./members-routing.module */ "./src/app/members/members-routing.module.ts");
/* harmony import */ var _members_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./members.page */ "./src/app/members/members.page.ts");







let MembersPageModule = class MembersPageModule {
};
MembersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _members_routing_module__WEBPACK_IMPORTED_MODULE_5__["MembersPageRoutingModule"]
        ],
        declarations: [_members_page__WEBPACK_IMPORTED_MODULE_6__["MembersPage"]]
    })
], MembersPageModule);



/***/ }),

/***/ "./src/app/members/members.page.scss":
/*!*******************************************!*\
  !*** ./src/app/members/members.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVycy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/members/members.page.ts":
/*!*****************************************!*\
  !*** ./src/app/members/members.page.ts ***!
  \*****************************************/
/*! exports provided: MembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersPage", function() { return MembersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _members__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../members */ "./src/app/members.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let MembersPage = class MembersPage {
    constructor() {
        this.flag = false;
        this.members = [
            new _members__WEBPACK_IMPORTED_MODULE_1__["Members"]('श्री. दिनकर नारायण मोरे.', '9421956479', '', '60', 'अध्यक्ष'),
            new _members__WEBPACK_IMPORTED_MODULE_1__["Members"](' श्री. सचिन भाऊसाहेब कवडे.', '8411088770', 'njnjjjj', '36', ' सचिव '),
            new _members__WEBPACK_IMPORTED_MODULE_1__["Members"](' श्री.मोहन नारायण मोरे.', '', '', '', 'सदस्य'),
            new _members__WEBPACK_IMPORTED_MODULE_1__["Members"]('सौ. सरस्वती विष्णू मोरे.', '', '', '', 'सदस्य'),
            new _members__WEBPACK_IMPORTED_MODULE_1__["Members"]('श्री.भाऊसाहेब शिवाजी कवडे .', '', '', '', 'सदस्य'),
            new _members__WEBPACK_IMPORTED_MODULE_1__["Members"]('श्री. सुधीर नारायण मोरे.', '', '', '', 'सदस्य'),
            new _members__WEBPACK_IMPORTED_MODULE_1__["Members"](' श्री. शीतल भाऊसाहेब कवडे . ', '', '', '', 'सदस्य'),
            new _members__WEBPACK_IMPORTED_MODULE_1__["Members"](' श्री. जगन्नाथ नामदेव चव्हाण.', '', '', '', 'सदस्य'),
            new _members__WEBPACK_IMPORTED_MODULE_1__["Members"]('सौ. शकुंतला विष्णू नाईकनवरे .', '', '', '', 'सदस्य'),
            new _members__WEBPACK_IMPORTED_MODULE_1__["Members"](' श्री. अजिंक्य अभिमन्यू पवार. ', '90040472686', 'assets/img/members/ajinkya.jpeg', '21', 'सदस्य'),
        ];
    }
    ngOnInit() {
    }
    afterslidesLoad(slides) {
        slides.startAutoplay();
    }
    show(m) {
        this.x = m;
        this.flag = true;
    }
    clear() {
        this.flag = false;
    }
};
MembersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-members',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./members.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/members/members.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./members.page.scss */ "./src/app/members/members.page.scss")).default]
    })
], MembersPage);



/***/ })

}]);
//# sourceMappingURL=members-members-module-es2015.js.map