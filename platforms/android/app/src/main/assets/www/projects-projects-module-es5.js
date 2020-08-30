function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsProjectsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title><b>प्रोजेक्ट्स</b> </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"8\" >\n        <ion-card class=\"speaker-card\">\n          <ion-card-header (click)=\"f1=(!f1)\">\n            <ion-item  lines=\"none\" class=\"speaker-item\" >\n                <p style=\"text-align: center;\"><b>चारा छावणी</b></p>\n            </ion-item>\n          </ion-card-header>\n          <!-- <ion-card-header >\n            <ion-item  lines=\"none\" class=\"speaker-item\" >\n              <a style=\"font: bold 14px arial,sans-serif;\" href=\"http://pub41.bravenet.com/forum/3456733221/\">View my Forum</a><br>\n            </ion-item>\n          </ion-card-header>\n          <ion-card-header >\n            <ion-item  lines=\"none\" class=\"speaker-item\" >\n              <iframe src=\"http://pub41.bravenet.com/forum/3456733221/\" style=\"width: 100%; height: 800px;\"></iframe>\n              <!-- Bravenet Embedded Service Code -->\n              <!-- <script src=\"http://apps.bravenet.com/go.js?service=forum;id=1;usernum=3456733221\" type=\"text/javascript\" charset=\"utf-8\"></script>\n            </ion-item>\n          </ion-card-header>\n -->\n\n          <ion-card-content *ngIf=\"f1==true\" (click)=\"f1=(!f1)\">\n            <ion-list lines=\"none\">\n              <ion-item detail=\"false\" >\n                  <div>\n                    <img src=\"assets/img/chara.jpg\">\n                    <hr>\n                  <p style=\"color:black;text-align:justify;\">जिल्हाधिकार्‍यांनी पंधरा दिवसांपूर्वी चारा छावण्यांच्या अचानक केलेल्या तपासणीने छावणी चालकांचे धाबे चांगलेच दणाणले असून आठ दिवसांमध्ये जिल्ह्यातील 20 छावण्या बंद आहेत. पंधरा दिवसांपूर्वी जिल्हाधिकारी डॉ. प्रवीण गेडाम यांनी तहसीलदारांचे पथक नियुक्त करून चारा छावण्यांची तपासणी केली. त्यामध्ये काही छावण्या कागदोपत्री सुरूअसल्याचे, तर काही छावण्यांमध्ये जनावरांची संख्या कमी असल्याचे आढळले. तब्बल 325 छावण्यांमध्ये पाच हजारांपेक्षा कमी जनावरे आढळली. त्याप्रकरणी संबंधित छावणी चालकांना कारणे दाखवा नोटीस देण्यात येणार आहे. त्यामुळे काही छावण्या बंद झाल्याची चर्चा आहे. पण, पावसामुळे गवताची चांगली वाढ व खरिपाच्या मशागतीची कामे सुरू असल्याने छावण्या कमी होत असल्याचे कारण काही छावण्या बंद करण्यासाठी देण्यात येत आहे. गेल्यावर्षी पाऊस कमी झाल्याने चारा व पाण्याची भीषण टंचाई निर्माण झाली. जनावरांच्या चार्‍याची समस्या निर्माण झाल्याने ऑगस्ट महिन्यापासून जिल्ह्यात चारा डेपो सुरू झाले. चार्‍याचा प्रश्न तात्पुरता सुटल्यानंतर पाण्याची टंचाई वाढली. त्यामुळे डिसेंबर महिन्यापासून चारा छावण्या सुरू आहेत. सध्या जिल्ह्यातील 304 छावण्यांमध्ये दोन लाख 42 हजार जनावरे आहेत. जिल्ह्यात सर्वांधिक 94 छावण्या सांगोला तालुक्यात सुरू आहेत.</p>\n                  </div>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/projects/projects-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/projects/projects-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProjectsPageRoutingModule */

  /***/
  function srcAppProjectsProjectsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsPageRoutingModule", function () {
      return ProjectsPageRoutingModule;
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


    var _projects_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./projects.page */
    "./src/app/projects/projects.page.ts");

    var routes = [{
      path: '',
      component: _projects_page__WEBPACK_IMPORTED_MODULE_3__["ProjectsPage"]
    }];

    var ProjectsPageRoutingModule = function ProjectsPageRoutingModule() {
      _classCallCheck(this, ProjectsPageRoutingModule);
    };

    ProjectsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProjectsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/projects/projects.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/projects/projects.module.ts ***!
    \*********************************************/

  /*! exports provided: ProjectsPageModule */

  /***/
  function srcAppProjectsProjectsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsPageModule", function () {
      return ProjectsPageModule;
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


    var _projects_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./projects-routing.module */
    "./src/app/projects/projects-routing.module.ts");
    /* harmony import */


    var _projects_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./projects.page */
    "./src/app/projects/projects.page.ts");

    var ProjectsPageModule = function ProjectsPageModule() {
      _classCallCheck(this, ProjectsPageModule);
    };

    ProjectsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _projects_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectsPageRoutingModule"]],
      declarations: [_projects_page__WEBPACK_IMPORTED_MODULE_6__["ProjectsPage"]]
    })], ProjectsPageModule);
    /***/
  },

  /***/
  "./src/app/projects/projects.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/projects/projects.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsProjectsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/projects/projects.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/projects/projects.page.ts ***!
    \*******************************************/

  /*! exports provided: ProjectsPage */

  /***/
  function srcAppProjectsProjectsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsPage", function () {
      return ProjectsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjectsPage =
    /*#__PURE__*/
    function () {
      function ProjectsPage() {
        _classCallCheck(this, ProjectsPage);

        this.f1 = false;
      }

      _createClass(ProjectsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsPage;
    }();

    ProjectsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.page.scss */
      "./src/app/projects/projects.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ProjectsPage);
    /***/
  }
}]);
//# sourceMappingURL=projects-projects-module-es5.js.map