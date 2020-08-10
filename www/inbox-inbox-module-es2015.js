(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inbox-inbox-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/inbox.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/inbox.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Inbox\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Schedule</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-explore-container name=\"Inbox Page\"></app-explore-container>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/inbox/inbox-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/inbox/inbox-routing.module.ts ***!
  \***********************************************/
/*! exports provided: InboxPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPageRoutingModule", function() { return InboxPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _inbox_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox.page */ "./src/app/inbox/inbox.page.ts");




const routes = [
    {
        path: '',
        component: _inbox_page__WEBPACK_IMPORTED_MODULE_3__["InboxPage"],
    }
];
let InboxPageRoutingModule = class InboxPageRoutingModule {
};
InboxPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], InboxPageRoutingModule);



/***/ }),

/***/ "./src/app/inbox/inbox.module.ts":
/*!***************************************!*\
  !*** ./src/app/inbox/inbox.module.ts ***!
  \***************************************/
/*! exports provided: InboxPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPageModule", function() { return InboxPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _inbox_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inbox.page */ "./src/app/inbox/inbox.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inbox-routing.module */ "./src/app/inbox/inbox-routing.module.ts");








let InboxPageModule = class InboxPageModule {
};
InboxPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _inbox_routing_module__WEBPACK_IMPORTED_MODULE_7__["InboxPageRoutingModule"]
        ],
        declarations: [_inbox_page__WEBPACK_IMPORTED_MODULE_5__["InboxPage"]]
    })
], InboxPageModule);



/***/ }),

/***/ "./src/app/inbox/inbox.page.scss":
/*!***************************************!*\
  !*** ./src/app/inbox/inbox.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm94L2luYm94LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/inbox/inbox.page.ts":
/*!*************************************!*\
  !*** ./src/app/inbox/inbox.page.ts ***!
  \*************************************/
/*! exports provided: InboxPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPage", function() { return InboxPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let InboxPage = 
/*
export class CalendarComponent {

  myVal1: string = "";
  myVal2: any;
  myVal3: any;
  myT: any;
  EndTime: any;
  StartTime: any;
  isPressed: any;

  constructor(
    private other: CalendarComponent,
  ) { }
}*/
class InboxPage {
    constructor() { }
};
InboxPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inbox',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inbox.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/inbox/inbox.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inbox.page.scss */ "./src/app/inbox/inbox.page.scss")).default]
    })
    /*
    export class CalendarComponent {
    
      myVal1: string = "";
      myVal2: any;
      myVal3: any;
      myT: any;
      EndTime: any;
      StartTime: any;
      isPressed: any;
    
      constructor(
        private other: CalendarComponent,
      ) { }
    }*/
], InboxPage);



/***/ })

}]);
//# sourceMappingURL=inbox-inbox-module-es2015.js.map