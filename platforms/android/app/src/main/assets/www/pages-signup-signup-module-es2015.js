(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"tertiary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title><b>नोंदणी</b></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div size=\"4\">\r\n  <div class=\"signup-logo\">\r\n    <img src=\"assets/img/about/surachita.jpeg\" alt=\"Ionic Logo\">\r\n  </div>\r\n      <div align=\"center\">\r\n        <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSftm8VFH0Yzhhma5nvnVwKYmiBmvkhHEOVfJEFyzFyBbjIjrQ/viewform?embedded=true\" width=\"100%\" height=\"900px\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading…\r\n        </iframe>\r\n      </div>\r\n\r\n\r\n\r\n    <!-- <form (ngSubmit)=\"signupForm.form.valid && onSignup(signupForm)\" #signupForm=\"ngForm\" novalidate>\r\n      <ion-list lines=\"none\">\r\n        <ion-item>\r\n          <ion-label  class=\"label\"position=\"floating\" color=\"primary\"> <ion-icon name=\"person-circle-outline\"></ion-icon> नाव:</ion-label>\r\n          <ion-input [(ngModel)]=\"user.name\" name=\"name\" type=\"text\" #name=\"ngModel\" placeholder=\" कृपया येथे नाव टाका\"\r\n            [ngClass]=\"{'is-invalid':signupForm.submitted && name.invalid}\" pattern=\"[a-zA-Z\\s]+\" minlength=\"3\" required>\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label class=\"label\" position=\"stacked\" color=\"primary\"><ion-icon name=\"ellipse\"></ion-icon>जन्मतारीख:</ion-label>\r\n          <ion-datetime displayformat=\"DD/MM/YYYY\" placeholder=\"कृपया जन्मतारीख  निवडा\"></ion-datetime>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label class=\"label\" position=\"stacked\" color=\"primary\"><ion-icon name=\"list-circle-sharp\"></ion-icon> पत्ता: </ion-label>\r\n          <ion-input   placeholder=\"कृपया येथे पत्ता टाका\" pattern=\"[a-zA-Z\\s]+\" type=\"text\" required>\r\n          </ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label class=\"label\" position=\"stacked\" color=\"primary\"><ion-icon name=\"call\"></ion-icon> मोबाईल नंबर :</ion-label>\r\n          <ion-input placeholder=\"कृपया येथे मोबाईल नंबर टाका\"[(ngModel)]=\"user.phonenumber\" name=\"phonenumber\" type=\"number\" #phonenumber=\"ngModel\"\r\n            pattern='[0-9]{10}' required>\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n\r\n        <ion-item>\r\n          <ion-label  class=\"label1\" color=\"primary\">लिंग:</ion-label>\r\n          <ion-select placeholder=\"Select gender\" [(ngModel)]=\"user.gender\" #gender=\"ngModel\" name=gender required>\r\n            <ion-select-option value=\"Female\"  >महिला </ion-select-option>\r\n            <ion-select-option value=\"Male\"  >पुरुष </ion-select-option>\r\n            <ion-select-option value=\"Other\">अन्य </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-card>\r\n\r\n      </ion-card>\r\n      <ion-card-header color=\"blue\" (click)=\"f=!f\"><p style=\"color:red;\"><b><i>तुमची पिके निवडा :</i></b></p></ion-card-header>\r\n      <ion-card-content *ngIf=\"f==true\"><ion-item>\r\n        <ion-label>द्राक्षे</ion-label>\r\n        <ion-checkbox (click)=\"flag1=!flag1\"></ion-checkbox><br>\r\n      </ion-item>\r\n      <ion-item  *ngIf=\"flag1==true\" color=\"tertiary\">\r\n        <ion-label>एकूण  क्षेत्र:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      <ion-label>छाटणी/पेरणी दिनांक:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>डाळिंब</ion-label>\r\n        <ion-checkbox (click)=\"flag2=!flag2\"></ion-checkbox>\r\n      </ion-item>\r\n      <ion-item  *ngIf=\"flag2==true\" color=\"tertiary\">\r\n        <ion-label>एकूण  क्षेत्र:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      <ion-label>छाटणी/पेरणी दिनांक:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>बोर</ion-label>\r\n        <ion-checkbox (click)=\"flag3=!flag3\"></ion-checkbox>\r\n      </ion-item>\r\n      <ion-item  *ngIf=\"flag3==true\" color=\"tertiary\">\r\n        <ion-label>एकूण  क्षेत्र:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      <ion-label>छाटणी/पेरणी दिनांक:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>केळी</ion-label>\r\n        <ion-checkbox (click)=\"flag4=!flag4\"></ion-checkbox>\r\n      </ion-item>\r\n      <ion-item  *ngIf=\"flag4==true\" color=\"tertiary\">\r\n        <ion-label>एकूण  क्षेत्र:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      <ion-label>छाटणी/पेरणी दिनांक:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>भूईमूग</ion-label>\r\n        <ion-checkbox (click)=\"flag5=!flag5\"></ion-checkbox>\r\n      </ion-item>\r\n      <ion-item  *ngIf=\"flag5==true\" color=\"tertiary\">\r\n        <ion-label>एकूण  क्षेत्र:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      <ion-label>छाटणी/पेरणी दिनांक:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>मका</ion-label>\r\n        <ion-checkbox (click)=\"flag6=!flag6\"></ion-checkbox>\r\n      </ion-item>\r\n      <ion-item  *ngIf=\"flag6==true\" color=\"tertiary\">\r\n        <ion-label>एकूण  क्षेत्र:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      <ion-label>छाटणी/पेरणी दिनांक:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>ज्वारी</ion-label>\r\n        <ion-checkbox (click)=\"flag7=!flag7\"></ion-checkbox>\r\n      </ion-item>\r\n      <ion-item  *ngIf=\"flag7==true\" color=\"tertiary\">\r\n        <ion-label>एकूण  क्षेत्र:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      <ion-label>छाटणी/पेरणी दिनांक:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>मिरची</ion-label>\r\n        <ion-checkbox (click)=\"flag8=!flag8\"></ion-checkbox>\r\n      </ion-item>\r\n      <ion-item  *ngIf=\"flag8==true\" color=\"tertiary\">\r\n        <ion-label>एकूण  क्षेत्र:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      <ion-label>छाटणी/पेरणी दिनांक:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>गहू</ion-label>\r\n        <ion-checkbox (click)=\"flag9=!flag9\"></ion-checkbox>\r\n      </ion-item>\r\n      <ion-item  *ngIf=\"flag9==true\" color=\"tertiary\">\r\n        <ion-label>एकूण  क्षेत्र:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      <ion-label>छाटणी/पेरणी दिनांक:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      </ion-item>\r\n\r\n    <ion-item (click)=\"flag10=!flag10\">\r\n      <ion-label>इतर:</ion-label><br>\r\n      <ion-input type=\"text\"></ion-input>\r\n    </ion-item>\r\n      <ion-item *ngIf=\"flag10==true\" color=\"tertiary\">\r\n      <ion-input type=\"text\"></ion-input>\r\n      <ion-label>एकूण  क्षेत्र:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      <ion-label>छाटणी/पेरणी दिनांक:</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n      </ion-item>\r\n</ion-card-content> -->\r\n\r\n\r\n      <!-- <ion-item>\r\n        <ion-label color=\"primary\">Member Count</ion-label>\r\n        <select [(ngModel)]=\"user.members_count\" (click)=\"change($event)\" name=\"count\">\r\n          <option  [ngValue]=\"0\" >Not have any Members</option>\r\n          <option  [ngValue]=\"1\" >1 Member</option>\r\n          <option  [ngValue]=\"2\" >2 Members</option>\r\n          <option  [ngValue]=\"3\" >3 Members</option>\r\n          <option  [ngValue]=\"4\" >4 Members</option>\r\n          <option  [ngValue]=\"5\" >5 Members</option>\r\n          <option  [ngValue]=\"6\" >6 Members</option>\r\n        </select>\r\n      </ion-item>\r\n\r\n    <ion-list *ngFor=\"let m of members; let i=index\">\r\n      <ion-label color=\"primary\" align=\"center\">Member {{i+1}} Details:</ion-label>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\" color=\"primary\">Name</ion-label>\r\n        <ion-input [(ngModel)]=\"m.name\" type=\"text\" name=\"mname{{i+1}}\" #mname=\"ngModel\"\r\n          [ngClass]=\"{'is-invalid':signupForm.submitted && name.invalid}\" pattern=\"[a-zA-Z\\s]+\" minlength=\"1\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-text color=\"danger\">\r\n        <p [hidden]=\"mname.valid || submitted == true\" class=\"ion-padding-start\">\r\n           member name is required\r\n        </p>\r\n      </ion-text>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\" color=\"primary\">Age</ion-label>\r\n        <ion-input [(ngModel)]=\"m.age\" type=\"number\" name=\"mage{{i+1}}\" #mage=\"ngModel\"\r\n          pattern='^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$' required>\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-text color=\"danger\">\r\n        <p [hidden]=\"mage.valid || submitted == true\" class=\"ion-padding-start\">\r\n          Age is required and between 1-99\r\n        </p>\r\n      </ion-text>\r\n      <ion-item>\r\n        <ion-label color=\"primary\">Gender</ion-label>\r\n        <ion-select placeholder=\"Select gender\" [(ngModel)]=\"m.gender\" name=\"{{i+1}}\" #mgender=\"ngModel\" required>\r\n          <ion-select-option value=\"Female\"  >Female</ion-select-option>\r\n          <ion-select-option value=\"Male\"  >Male</ion-select-option>\r\n          <ion-select-option value=\"Other\">other</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-text color=\"danger\">\r\n        <p [hidden]=\"mgender.valid || submitted == true\" class=\"ion-padding-start\">\r\n          Please select one gender\r\n        </p>\r\n      </ion-text> -->\r\n    <!-- </ion-list> -->\r\n\r\n<!--\r\n      <div class=\"ion-padding\">\r\n        <ion-button type=\"submit\" expand=\"block\">Create</ion-button>\r\n      </div>\r\n    </form> -->\r\n    <div class=\"ion-text-center\">\r\n      <a routerLink=\"/crop-list\">\r\n        <p>Already register???</p>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/signup/signup-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup */ "./src/app/pages/signup/signup.ts");




const routes = [
    {
        path: '',
        component: _signup__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignUpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModule", function() { return SignUpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup */ "./src/app/pages/signup/signup.ts");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/pages/signup/signup-routing.module.ts");







let SignUpModule = class SignUpModule {
};
SignUpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignupPageRoutingModule"]
        ],
        declarations: [
            _signup__WEBPACK_IMPORTED_MODULE_5__["SignupPage"],
        ]
    })
], SignUpModule);



/***/ }),

/***/ "./src/app/pages/signup/signup.scss":
/*!******************************************!*\
  !*** ./src/app/pages/signup/signup.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".signup-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.signup-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\n.label {\n  font-size: 1.5em;\n}\n\n.label1 {\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0M6XFxVc2Vyc1xcQWppbmt5YVxcRG9jdW1lbnRzXFxzdXJhY2hpdGEvc3JjXFxhcHBcXHBhZ2VzXFxzaWdudXBcXHNpZ251cC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtbG9nbyB7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNpZ251cC1sb2dvIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5sYWJlbHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcbi5sYWJlbDF7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4iLCIuc2lnbnVwLWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaWdudXAtbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5sYWJlbDEge1xuICBmb250LXNpemU6IDEuMmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/signup/signup.ts":
/*!****************************************!*\
  !*** ./src/app/pages/signup/signup.ts ***!
  \****************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/user-data */ "./src/providers/user-data.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let SignupPage = class SignupPage {
    constructor(router, userData, http) {
        this.router = router;
        this.userData = userData;
        this.http = http;
        this.user = { username: '', password: '', name: '', age: "", members_count: 0, gender: "", phonenumber: "", members: [] };
        this.submitted = false;
        this.password = "";
        this.members = [];
        this.message = "";
        this.flag = false;
        this.flag1 = false;
        this.flag2 = false;
        this.flag3 = false;
        this.flag4 = false;
        this.flag5 = false;
        this.flag6 = false;
        this.flag7 = false;
        this.flag8 = false;
        this.flag9 = false;
        this.flag10 = false;
        this.f = false;
        this.agree = "";
        this.i = 0;
    }
    onSignup(form) {
        this.submitted = true;
        if (form.valid) {
            this.user.members = this.members;
            this.user = { name: "", username: "", password: "", age: "", members_count: 0, gender: "", phonenumber: "", members: [] };
            this.userData.signup(this.user.username);
            this.router.navigateByUrl('/login');
        }
    }
    change(event) {
        console.log(event);
        this.members = [];
        for (this.i = 0; this.i < this.user.members_count; this.i++) {
            this.members.push({ name: "", age: "", gender: "" });
        }
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.scss */ "./src/app/pages/signup/signup.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _providers_user_data__WEBPACK_IMPORTED_MODULE_3__["UserData"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module-es2015.js.map