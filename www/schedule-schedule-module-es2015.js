(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schedule-schedule-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Schedule\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Schedule</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-input type=\"text\" [(ngModel)]=\"Tt\"></ion-input>\n\n  <app-explore-container name=\"Schedule page\"></app-explore-container>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/schedule/schedule-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/schedule/schedule-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: NotepadPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotepadPageRoutingModule", function() { return NotepadPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule.page */ "./src/app/schedule/schedule.page.ts");




const routes = [
    {
        path: '',
        component: _schedule_page__WEBPACK_IMPORTED_MODULE_3__["NotepadPage"],
    }
];
let NotepadPageRoutingModule = class NotepadPageRoutingModule {
};
NotepadPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NotepadPageRoutingModule);



/***/ }),

/***/ "./src/app/schedule/schedule.module.ts":
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.module.ts ***!
  \*********************************************/
/*! exports provided: NotepadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotepadPageModule", function() { return NotepadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _schedule_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule.page */ "./src/app/schedule/schedule.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schedule-routing.module */ "./src/app/schedule/schedule-routing.module.ts");









let NotepadPageModule = class NotepadPageModule {
};
NotepadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _schedule_page__WEBPACK_IMPORTED_MODULE_6__["NotepadPage"] }]),
            _schedule_routing_module__WEBPACK_IMPORTED_MODULE_8__["NotepadPageRoutingModule"],
        ],
        declarations: [_schedule_page__WEBPACK_IMPORTED_MODULE_6__["NotepadPage"]]
    })
], NotepadPageModule);



/***/ }),

/***/ "./src/app/schedule/schedule.page.scss":
/*!*********************************************!*\
  !*** ./src/app/schedule/schedule.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlL3NjaGVkdWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/schedule/schedule.page.ts":
/*!*******************************************!*\
  !*** ./src/app/schedule/schedule.page.ts ***!
  \*******************************************/
/*! exports provided: NotepadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotepadPage", function() { return NotepadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NotepadPage = class NotepadPage {
    constructor() { }
    openWebpage(url) {
        const options = {
            zoom: 'no'
        };
        // Opening a URL and returning an InAppBrowserObject
        const browser = this.inAppBrowser.create(url, '_self', options);
        // Inject scripts, css and more with browser.X
    }
};
NotepadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notepad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./schedule.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./schedule.page.scss */ "./src/app/schedule/schedule.page.scss")).default]
    })
], NotepadPage);



/***/ })

}]);
//# sourceMappingURL=schedule-schedule-module-es2015.js.map