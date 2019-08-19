(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link rel=\"stylesheet\" href=\"../../assets/css/main.css\" />\n\n<ul>\n                            \n    <li>\n        <a href=\"/adoptionformreview\">Review Adoption Form</a>\n    </li>\n    <li>\n        <a href=\"/newcat\">Add New Cat Details</a>\n    </li>\n    <li>\n        <a href=\"/modifycat\">Modify Cat Details</a>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/adoption/adoption.component.css":
/*!*************************************************!*\
  !*** ./src/app/adoption/adoption.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fkb3B0aW9uL2Fkb3B0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/adoption/adoption.component.html":
/*!**************************************************!*\
  !*** ./src/app/adoption/adoption.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"../../assets/css/main.css\" />\n\n<h2>Adopt and Save a life today</h2>\n<a href=\"#\" class=\"image featured\"><img src=\"../../assets/images/About-CCS.jpg\" alt=\"\" /></a>\n<p>Before you rush into adopting a cat, do realise that having a pet is a big responsibility. Adopting a pet means you need to commit to and take care of it for the rest of its life. They cost time and money and will require medical attention when ill or injured.</p>\n<p>It is important that the pet is accepted by the entire household too. Otherwise, the family may end up in conflict and the pet may end up abandoned – as is the case for many of these cats featured here.</p>\n   <footer>\n     <ul class=\"actions\">\n       \n     </ul>\n     \n</footer> \n \n\n<!-- Menu -->\n\n<section><article class=\"post\">\n\n     <div class=\"card\">\n\n\n<div ng-repeat=\"cat in catName\">\n<div class=\"card-header\">\n<img src=\"../../assets/images/maya.jpg\" height=\"430\"/>\n</div>\n<div class=\"card-content\">\n<h3>{{ cat.name }}</h3>\n<h4>{{ cat.desc }}</h4>\n<table id=\"wobs-table2\">\n<tbody>\n<tr>\n<th>Age</th>\n<td>{{ cat.age }}</td>\n</tr>\n<tr>\n<th>Looking for</th>\n<td>Adopt</td>\n</tr>\n<tr>\n<th>Gender</th>\n<td>{{ cat.gender }}</td>\n</tr>\n<tr>\n<th>Date of Adopted</th>\n<td>{{ cat.dateOfAdoption }}</td>\n</tr>\n</tbody>\n</table>\n</div>\n<div class=\"card-footer\">\n<ul>\n<li>\n<a href=\"/registration\"><i class=\"fa fa-github\"></i><p>Adopt Me!</p></a>\n</li>\n</ul>\n</div>\n</div>\n</div>\n   </article>\n     \n     \n</section>"

/***/ }),

/***/ "./src/app/adoption/adoption.component.ts":
/*!************************************************!*\
  !*** ./src/app/adoption/adoption.component.ts ***!
  \************************************************/
/*! exports provided: AdoptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdoptionComponent", function() { return AdoptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdoptionComponent = /** @class */ (function () {
    function AdoptionComponent() {
    }
    AdoptionComponent.prototype.ngOnInit = function () {
    };
    AdoptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adoption',
            template: __webpack_require__(/*! ./adoption.component.html */ "./src/app/adoption/adoption.component.html"),
            styles: [__webpack_require__(/*! ./adoption.component.css */ "./src/app/adoption/adoption.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdoptionComponent);
    return AdoptionComponent;
}());



/***/ }),

/***/ "./src/app/adoptionform/adoptionform.component.css":
/*!*********************************************************!*\
  !*** ./src/app/adoptionform/adoptionform.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fkb3B0aW9uZm9ybS9hZG9wdGlvbmZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/adoptionform/adoptionform.component.html":
/*!**********************************************************!*\
  !*** ./src/app/adoptionform/adoptionform.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"../../assets/css/main.css\" />\n\nNRIC: <input type=\"text\" name=\"nric\" ng-model=\"formObj.nric\" placeholder=\"Type your NRIC here...\">\n<br />\nName: <input type=\"text\" name=\"name\" ng-model=\"formObj.name\" placeholder=\"Type your name here...\">\n<br />\nAddress: <input type=\"text\" name=\"address\" ng-model=\"formObj.address\" placeholder=\"Type your address here...\">\n<br />\nEmail: <input type=\"email\" name=\"email\" ng-model=\"formObj.email\" placeholder=\"Type your email here...\">\n<br />\nContact: <input type=\"tel\" name=\"contact\" ng-model=\"formObj.contact\" placeholder=\"Type your contact here...\">\n<br />\nNumber of Pets: <input type=\"number\" name=\"petsnumber\" ng-model=\"formObj.noOfPets\" placeholder=\"Enter the number of pets you currently have...\">\n<br />\n<br/>\nHousehold Type: <input type=\"text\" name=\"household\" ng-model=\"formObj.householdType\" placeholder=\"Type your household type here...\">\n<br />\nWhich cat would you like to adopt? \n<select ng-model=\"formObj.catSelect\">\n        <option \n          value=\"{{cat.name}}\" \n          ng-repeat=\"cat in catName\">\n          {{cat.name}}\n        </option>\n      </select> \n<br/>\n\n<input type=\"submit\" name=\"btn_submit\" value=\"Submit\" ng-click=\"sendForm()\" >\n\n<input type=\"reset\" name=\"btn_reset\" value=\"Reset\" ng-click=\"reset()\">\n"

/***/ }),

/***/ "./src/app/adoptionform/adoptionform.component.ts":
/*!********************************************************!*\
  !*** ./src/app/adoptionform/adoptionform.component.ts ***!
  \********************************************************/
/*! exports provided: AdoptionformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdoptionformComponent", function() { return AdoptionformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdoptionformComponent = /** @class */ (function () {
    function AdoptionformComponent() {
    }
    AdoptionformComponent.prototype.ngOnInit = function () {
    };
    AdoptionformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adoptionform',
            template: __webpack_require__(/*! ./adoptionform.component.html */ "./src/app/adoptionform/adoptionform.component.html"),
            styles: [__webpack_require__(/*! ./adoptionform.component.css */ "./src/app/adoptionform/adoptionform.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdoptionformComponent);
    return AdoptionformComponent;
}());



/***/ }),

/***/ "./src/app/adoptionformreview/adoptionformreview.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/adoptionformreview/adoptionformreview.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fkb3B0aW9uZm9ybXJldmlldy9hZG9wdGlvbmZvcm1yZXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/adoptionformreview/adoptionformreview.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/adoptionformreview/adoptionformreview.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"../../assets/css/main.css\" />\n\n<div id=\"main\" ng-hide=\"showForm\">\n    <table>\n        <tr ng-repeat=\"cat in catName\">\n            <td>\n                {{ cat.nric  }}   |   {{cat.name}}\n            </td>\n            <td>\n                <button ng-click=\"reviewForm(cat)\">Review</button>\n            </td>\n        </tr>\n    </table>\n</div>\n    <div id=\"main\" ng-hide=\"!showForm\">\n\n            NRIC: <input type=\"text\" name=\"nric\"  ng-model=\"formObj.nric\" disabled>\n            <br />\n            Name: <input type=\"text\" name=\"name\"  ng-model=\"formObj.name\" disabled>\n            <br />\n            Address: <input type=\"text\" name=\"address\"  ng-model=\"formObj.address\" disabled>\n            <br />\n            Email: <input type=\"email\" name=\"email\"  ng-model=\"formObj.email\" disabled>\n            <br />\n            Contact: <input type=\"tel\" name=\"contact\"  ng-model=\"formObj.contact\" disabled>\n            <br />\n           Number of Pets: <input type=\"number\" name=\"petsnumber\"  ng-model=\"formObj.noOfPets\" disabled>\n            <br />\n            <br/>\n            Household Type: <input type=\"text\" name=\"household\"  ng-model=\"formObj.householdType\" disabled>\n            <br />\n            Which cat would you like to adopt? \n            <select ng-model=\"formObj.catSelect\" disabled>\n                    <option \n                      value=\"{{cat.name}}\" \n                      ng-repeat=\"cat in realCatName\">\n                      {{cat.name}}\n                    </option>\n                  </select> \n            <br/>\n            \n            <input type=\"button\" name=\"btn_back\" value=\"Back\" ng-click=\"goBack()\">\n\n        </div>"

/***/ }),

/***/ "./src/app/adoptionformreview/adoptionformreview.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/adoptionformreview/adoptionformreview.component.ts ***!
  \********************************************************************/
/*! exports provided: AdoptionformreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdoptionformreviewComponent", function() { return AdoptionformreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdoptionformreviewComponent = /** @class */ (function () {
    function AdoptionformreviewComponent() {
    }
    AdoptionformreviewComponent.prototype.ngOnInit = function () {
    };
    AdoptionformreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adoptionformreview',
            template: __webpack_require__(/*! ./adoptionformreview.component.html */ "./src/app/adoptionformreview/adoptionformreview.component.html"),
            styles: [__webpack_require__(/*! ./adoptionformreview.component.css */ "./src/app/adoptionformreview/adoptionformreview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdoptionformreviewComponent);
    return AdoptionformreviewComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-sm bg-light navbar-light\">\n<div class=\"container-fluid\">\n\t<div class=\"navbar-header\">\n\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse1\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li><a class=\"nav-link\" routerLink=\"/login\">Login</a></li>\n\t\t\t\t<li><a class=\"nav-link\" routerLink=\"/logout\">Logout</a></li>\n\t\t\t\t<li><a class=\"nav-link\" routerLink=\"/admin\">Admin</a></li>\n\t\t\t\t<li><a class=\"nav-link\" routerLink=\"/user\">User</a></li>\n\t\t\t\t<li><a class=\"nav-link\" routerLink=\"/user2\">User2</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n</nav>\n\n<div class=\"container\">\n\t<div class=\"row\"> -->\n\n\t\t\t<!DOCTYPE HTML>\n\t\t\t<!--\n\t\t\t\tFuture Imperfect by HTML5 UP\n\t\t\t\thtml5up.net | @ajlkn\n\t\t\t\tFree for personal and commercial use under the CCA 3.0 license (html5up.net/license)\n\t\t\t-->\n\t\t\t<html>\n\t\t\t\t<head>\n\t\t\t\t\t<title>Little Tails Cat Cafe</title>\n\t\t\t\t\t<meta charset=\"utf-8\" />\n\t\t\t\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t\t\t\t<!--[if lte IE 8]><script src=\"assets/js/ie/html5shiv.js\"></script><![endif]-->\n\t\t\t\t\t<link rel=\"stylesheet\" href=\"../assets/css/main.css\" />\n\t\t\t\t\t<!--[if lte IE 9]><link rel=\"stylesheet\" href=\"assets/css/ie9.css\" /><![endif]-->\n\t\t\t\t\t<!--[if lte IE 8]><link rel=\"stylesheet\" href=\"assets/css/ie8.css\" /><![endif]-->\n\t\t\t\t</head>\n\t\t\t\t<body>\n\t\t\t\n\t\t\t\t\t<!-- Wrapper -->\n\t\t\t\t\t\t<div id=\"wrapper\">\n\t\t\t\n\t\t\t\t\t\t\t<!-- Header -->\n\t\t\t\t\t\t\t\t<header id=\"header\">\n\t\t\t\t\t\t\t\t\t<h1><a href=\"/index\">Little Tails Cat Cafe</a></h1>\n\t\t\t\t\t\t\t\t\t<nav class=\"links\">\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"/gallery\">Our Cats</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"/rules\">Rules & Regulations</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"/contact\">Contact Us</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t\t\t<nav class=\"main\">\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<li class=\"menu\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"fa-bars\" href=\"#menu\">Menu</a>\n\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t\t</header>\n\t\t\t\n\t\t\t\t\t\t\t<!-- Menu -->\n\t\t\t\t\t\t\t\t<section id=\"menu\">\n\t\t\t\n\t\t\t\n\t\t\t\t\t\t\t\t\t<!-- Links -->\n\t\t\t\t\t\t\t\t\t\t<section>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"links\">\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/adoption\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Available Cats for Adoption</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"/registration\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h2>Register to Adopt</h2>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\n\t\t\t\t\t\t\t\t\t<!-- Actions -->\n\t\t\t\t\t\t\t\t\t\t<section>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"actions vertical\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"/login\" class=\"button big fit\">Log In</a></li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\n\t\t\t\t\t\t\t\t</section>\n\t\t\t\n\t\t\t\t\t\t\t<!-- Main -->\n\t\t\t\t\t\t\t\t<div id=\"main\">\n\t\t<router-outlet></router-outlet>\n<!-- \t</div>\n</div> -->\n\n</div>\n\n<!-- Sidebar -->\n\t<section id=\"sidebar\">\n\n\t\t<!-- Intro -->\n\t\t\t<section id=\"intro\">\n\t\t\t\t<a href=\"/index\" class=\"logo\"></a>\n\t\t\t\t<header>\n\t\t\t\t\t<h3>Welcome to Singapore's first adoptable cat cafe!</h3>\n\t\t\t\t\t<p>Meet our furry friends!</p>\n\t\t\t\t</header>\n\t\t\t</section>\n\n\t\t\n\n\t\t<!-- Posts List -->\n\t\t<section>\n\t\t\t\t<ul class=\"posts\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<header>\n\t\t\t\t\t\t\t\t<h3><a href=\"/gallery\">Kai Kai</a></h3>\n\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2015-10-20\">\n\t\t\t\t\t\t\t\tBreed: Ginger Tabby (Male)\n\t\t\t\t\t\t\t\tBirthday: October 20\n\t\t\t\t\t\t\t\t </time>\n\t\t\t\t\t\t\t</header>\n\t\t\t\t\t\t\t<a href=\"/gallery\" class=\"image\"><img src=\"../assets/images/pic08.jpg\" alt=\"Kai Kai\" /></a>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<header>\n\t\t\t\t\t\t\t\t<h3><a href=\"/gallery\">Jia Jia</a></h3>\n\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2015-10-10\">Breed: Tortoise Shell (Female)\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\tBirthday: October 20</time>\n\t\t\t\t\t\t\t</header>\n\t\t\t\t\t\t\t<a href=\"/gallery\" class=\"image\"><img src=\"../assets/images/pic09.jpg\" alt=\"Jia Jia\" /></a>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<header>\n\t\t\t\t\t\t\t\t<h3><a href=\"/gallery\">Snow</a></h3>\n\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2015-10-10\">Breed: Pure White (Female)\n\t\t\t\t\t\t\t\tBirthday: April 30</time>\n\t\t\t\t\t\t\t</header>\n\t\t\t\t\t\t\t<a href=\"/gallery\" class=\"image\"><img src=\"../assets/images/pic10.jpg\" alt=\"Snow\" /></a>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<header>\n\t\t\t\t\t\t\t\t<h3><a href=\"/gallery\">Dewey</a></h3>\n\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2015-10-08\">Breed: Grey Tabby (Female)\n\t\t\t\t\t\t\t\tBirthday: May 30</time>\n\t\t\t\t\t\t\t</header> \n\t\t\t\t\t\t\t<a href=\"/gallery\" class=\"image\"><img src=\"../assets/images/pic11.jpg\" alt=\"Dewey\" /></a>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<article>\n\t\t\t\t\t\t\t<header>\n\t\t\t\t\t\t\t\t<h3><a href=\"/gallery\">Chawy</a></h3>\n\t\t\t\t\t\t\t\t<time class=\"published\" datetime=\"2015-10-06\">Breed: Brown Tabby (Male)\n\t\t\t\t\t\t\t\tBirthday: May 30</time>\n\t\t\t\t\t\t\t</header>\n\t\t\t\t\t\t\t<a href=\"/gallery\" class=\"image\"><img src=\"../assets/images/pic12.jpg\" alt=\"Chawy\" /></a>\n\t\t\t\t\t\t</article>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</section>\n\n\t\t<!-- About -->\n\t\t\t<section class=\"blurb\">\n\t\t\t\t<h2>Opening Hours</h2>\n\t\t\t\t<p>Weekdays: 11am - 7pm</p>\n\t\t\t\t<p>Weekends: 12pm - 9pm</p>\n\t\t\t\t<p>Closed on Public Holidays</p>\n\t\t\t\t\n\t\t\t\t<h2>Admission Fee</h2>\n\t\t\t\t<p>Children (Age 5 and above) : $10/ per hour</p>\n\t\t\t\t<p>Adult : $15/ per Hour</p>\n\t\t\t</section>\n\n\t\t<!-- Footer -->\n\t\t\t<section id=\"footer\">\n\t\t\t\t<ul class=\"icons\">\n\t\t\t\t\t<li><a href=\"https://www.facebook.com/\" class=\"fa-facebook\"><span class=\"label\">Facebook</span></a></li>\n\t\t\t\t\t<li><a href=\"https://www.instagram.com/?hl=en\" class=\"fa-instagram\"><span class=\"label\">Instagram</span></a></li>\n\t\t\t\t</ul>\n\t\t\t\t<p class=\"copyright\">&copy; Untitled. Design: <a href=\"http://html5up.net\">Little Tails Cat Cafe</a></p>\n\t\t\t</section>\n\n\t</section>\n\n</div>\n\n<div class=\"sitemap-page-wrapper\">\n<ul class=\"sitemap-column\">\n<li class=\"sitemap-column-head sitemap-positions\">Services</li>\n<li class=\"sitemap-column-data\"><a href=\"/adoption\">Adoption Services</a></li>\n\n</ul>\n<ul class=\"sitemap-column\">\n<li class=\"sitemap-column-head sitemap-employers\">Admissions</li>\n<li class=\"sitemap-column-data\"><a href=\"/contact\">Cat Cafe Admissions</a></li>\n\n\n</ul>\n<ul class=\"sitemap-column sitemap-students\">\n<li class=\"sitemap-column-head\">Cafe Rules</li>\n<li class=\"sitemap-column-data\"><a href=\"/rules\">Rules and Regulations</a></li>\n\n</ul>\n<ul class=\"sitemap-column sitemap-universities\">\n<li class=\"sitemap-column-head\">Industry Partners</li>\n<li class=\"sitemap-column-data\"><a href=\"http://petloverscentre.com/Forms/Index.aspx\">Pet Lover's Centre</a></li>\n<li class=\"sitemap-column-data\"><a href=\"http://catwelfare.org/\">Cat Welfare Society</a></li>\n<li class=\"sitemap-column-data\"><a href=\"https://www.friskies.com/\">Purina Friskies</a></li>\n\n</ul>\n<ul class=\"sitemap-column sitemap-about\">\n<li class=\"sitemap-column-head\">Get in Touch</li>\n<li class=\"sitemap-column-data\"><a href=\"/index\">Home</a></li>\n<li class=\"sitemap-column-data\"><a href=\"/contact\">Contact Us</a></li>\n\n</ul>\n<ul class=\"sitemap-column sitemap-home\">\n<li class=\"sitemap-column-head\">Social Media</li>\n<li class=\"sitemap-column-data\"><a href=\"/gallery\">Gallery</a></li>\n</ul>\n</div>\n<!-- Scripts -->\n<script src=\"../assets/js/jquery.min.js\"></script>\n<script src=\"../assets/js/skel.min.js\"></script>\n<script src=\"../assets/js/util.js\"></script>\n<!--[if lte IE 8]><script src=\"assets/js/ie/respond.min.js\"></script><![endif]-->\n<script src=\"../assets/js/main.js\"></script>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'authApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _adoption_adoption_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./adoption/adoption.component */ "./src/app/adoption/adoption.component.ts");
/* harmony import */ var _adoptionform_adoptionform_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./adoptionform/adoptionform.component */ "./src/app/adoptionform/adoptionform.component.ts");
/* harmony import */ var _adoptionformreview_adoptionformreview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./adoptionformreview/adoptionformreview.component */ "./src/app/adoptionformreview/adoptionformreview.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/editprofile/editprofile.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _modifycat_modifycat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modifycat/modifycat.component */ "./src/app/modifycat/modifycat.component.ts");
/* harmony import */ var _newcat_newcat_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./newcat/newcat.component */ "./src/app/newcat/newcat.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _rules_rules_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rules/rules.component */ "./src/app/rules/rules.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"],
                _adoption_adoption_component__WEBPACK_IMPORTED_MODULE_11__["AdoptionComponent"],
                _adoptionform_adoptionform_component__WEBPACK_IMPORTED_MODULE_12__["AdoptionformComponent"],
                _adoptionformreview_adoptionformreview_component__WEBPACK_IMPORTED_MODULE_13__["AdoptionformreviewComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_15__["CustomerComponent"],
                _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_16__["EditprofileComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_17__["GalleryComponent"],
                _modifycat_modifycat_component__WEBPACK_IMPORTED_MODULE_18__["ModifycatComponent"],
                _newcat_newcat_component__WEBPACK_IMPORTED_MODULE_19__["NewcatComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_20__["RegistrationComponent"],
                _rules_rules_component__WEBPACK_IMPORTED_MODULE_21__["RulesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _adoption_adoption_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adoption/adoption.component */ "./src/app/adoption/adoption.component.ts");
/* harmony import */ var _adoptionform_adoptionform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adoptionform/adoptionform.component */ "./src/app/adoptionform/adoptionform.component.ts");
/* harmony import */ var _adoptionformreview_adoptionformreview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adoptionformreview/adoptionformreview.component */ "./src/app/adoptionformreview/adoptionformreview.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editprofile/editprofile.component */ "./src/app/editprofile/editprofile.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _modifycat_modifycat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modifycat/modifycat.component */ "./src/app/modifycat/modifycat.component.ts");
/* harmony import */ var _newcat_newcat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./newcat/newcat.component */ "./src/app/newcat/newcat.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _rules_rules_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rules/rules.component */ "./src/app/rules/rules.component.ts");















var appRoutes = [
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"] },
    { path: 'adoption', component: _adoption_adoption_component__WEBPACK_IMPORTED_MODULE_2__["AdoptionComponent"] },
    { path: 'adoptionform', component: _adoptionform_adoptionform_component__WEBPACK_IMPORTED_MODULE_3__["AdoptionformComponent"] },
    { path: 'adoptionformreview', component: _adoptionformreview_adoptionformreview_component__WEBPACK_IMPORTED_MODULE_4__["AdoptionformreviewComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'customer', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_6__["CustomerComponent"] },
    { path: 'editprofile', component: _editprofile_editprofile_component__WEBPACK_IMPORTED_MODULE_7__["EditprofileComponent"] },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"] },
    { path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_9__["IndexComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'modifycat', component: _modifycat_modifycat_component__WEBPACK_IMPORTED_MODULE_11__["ModifycatComponent"] },
    { path: 'newcat', component: _newcat_newcat_component__WEBPACK_IMPORTED_MODULE_12__["NewcatComponent"] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_13__["RegistrationComponent"] },
    { path: 'rules', component: _rules_rules_component__WEBPACK_IMPORTED_MODULE_14__["RulesComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.regUser = function (username, pw, role) {
        return this.http.post('./api/reguser/', { 'username': username,
            'password': pw, 'role': role });
    };
    AuthService.prototype.authUser = function (username, pw) {
        return this.http.post('./api/authuser/', { 'username': username, 'password': pw });
    };
    AuthService.prototype.setSecureToken = function (secure_token) {
        sessionStorage.setItem("LoggedIn", secure_token);
    };
    AuthService.prototype.getSecureToken = function () {
        return sessionStorage.getItem("LoggedIn");
    };
    AuthService.prototype.setUserRole = function (role) {
        sessionStorage.setItem("UserRole", role);
    };
    AuthService.prototype.getUserRole = function () {
        return sessionStorage.getItem("UserRole");
    };
    AuthService.prototype.logout = function () {
        sessionStorage.removeItem("LoggedIn");
        sessionStorage.removeItem("UserRole");
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.getSecureToken() !== null;
    };
    AuthService.prototype.isAdmin = function () {
        return (this.getUserRole() == "admin");
    };
    AuthService.prototype.isUser = function () {
        return (this.getUserRole() == "user" || this.getUserRole() == "admin");
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"../../assets/css/main.css\" />\n\n<!-- Post-->\n<article>\n    <section>\n\n      <h2>Where Are We</h2>\n      <p>Bugis 123 #01-123 S(123456)</p>\n\n      <h3>How to Get Here</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a rutrum leo. Vivamus mattis vel.</p>\n      <br/>\n      <h2>Opening Hours</h2>\n      <p>Weekdays: 11am - 7pm\n        <br/>\n\n        Weekends: 12pm - 9pm\n        <br/>\n          \n        Closed on Public Holidays</p>\n\n        <h2>Admission Fees</h2>\n        <p>Children (Age 5 and above) : $10/ per hour\n          <br/>\n\n          Adult : $15/ per Hour</p>\n          \n        </section>\n</article>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"../../assets/css/main.css\" />\n\n<ul>\n    <li>\n       <a href=\"/editprofile\">Edit Profile</a>\n    </li>\n    <li>\n        <a href=\"/adoptionform\">Adoption Form</a>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/editprofile/editprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/editprofile/editprofile.component.html":
/*!********************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"../../assets/css/main.css\" />\n\nFirst Name: <input type=\"text\" name=\"fname\" ng-model=\"formObj.fName\" placeholder=\"Type your first name here...\">\n<!--enter validation-->\n<br />\nLast Name: <input type=\"text\" name=\"lname\" ng-model=\"formObj.lName\" placeholder=\"Type your last name here...\">\n<!--enter validation-->\n<br />\nEmail: <input type=\"email\" name=\"email\" ng-model=\"formObj.email\" placeholder=\"Type your email here...\">\n<br />\nContact: <input type=\"tel\" name=\"contact\" ng-model=\"formObj.contact\" placeholder=\"Type your contact here...\">\n<br />\nDate of Birth: \n<br/>\n<input type=\"date\" name=\"dob\" ng-model=\"formObj.dob\">\n<br />\n<br />\nUsername: <input type=\"text\" name=\"username\" ng-model=\"formObj.username\" disabled=\"true\" placeholder=\"Type your username here...\">\n<br />\nPassword: <input type=\"password\" name=\"password\" ng-model=\"formObj.password\" placeholder=\"Type your password here...\">\n<br />\n\n<input type=\"submit\" name=\"btn_submit\" value=\"Submit\" ng-click=\"editUserProfile()\">\n"

/***/ }),

/***/ "./src/app/editprofile/editprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/editprofile/editprofile.component.ts ***!
  \******************************************************/
/*! exports provided: EditprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofileComponent", function() { return EditprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditprofileComponent = /** @class */ (function () {
    function EditprofileComponent() {
    }
    EditprofileComponent.prototype.ngOnInit = function () {
    };
    EditprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editprofile',
            template: __webpack_require__(/*! ./editprofile.component.html */ "./src/app/editprofile/editprofile.component.html"),
            styles: [__webpack_require__(/*! ./editprofile.component.css */ "./src/app/editprofile/editprofile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditprofileComponent);
    return EditprofileComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"../../assets/css/main.css\" />\n \n <section>\n    <h2>Our Furry Friends</h2>\n    <div class=\"box alt\">\n      <div class=\"row uniform\">\n        <div class=\"12u$\"><span class=\"image fit\"><img src=\"../../assets/images/150708_CaTherapy_039.jpg\" alt=\"\" /></span></div>\n        <div class=\"4u\"><span class=\"image fit\"><img src=\"../../assets/images/141219_NNW_032.jpg\" alt=\"\" /></span></div>\n        <div class=\"4u\"><span class=\"image fit\"><img src=\"../../assets/images/131204_NekoNoNiwa_064.jpg\" alt=\"\" /></span></div>\n        <div class=\"4u$\"><span class=\"image fit\"><img src=\"../../assets/images/131204_NekoNoNiwa_074.jpg\" alt=\"\" /></span></div>\n        <div class=\"4u\"><span class=\"image fit\"><img src=\"../../assets/images/pic02.jpg\" alt=\"\" /></span></div>\n        <div class=\"4u\"><span class=\"image fit\"><img src=\"../../assets/images/pic04.jpg\" alt=\"\" /></span></div>\n        <div class=\"4u$\"><span class=\"image fit\"><img src=\"../../assets/images/pic06.jpg\" alt=\"\" /></span></div>\n                              \n                              <div class=\"4u\"><span class=\"image fit\"><img src=\"../../assets/images/cat1.jpeg\" alt=\"\" /></span></div>\n        <div class=\"4u\"><span class=\"image fit\"><img src=\"../../assets/images/cat2.jpg\" alt=\"\" /></span></div>\n        <div class=\"4u$\"><span class=\"image fit\"><img src=\"../../assets/images/cat12.jpg\" alt=\"\" /></span></div>\n        <div class=\"4u\"><span class=\"image fit\"><img src=\"../../assets/images/christmascat1.jpg\" alt=\"\" /></span></div>\n        <div class=\"4u\"><span class=\"image fit\"><img src=\"../../assets/images/christmascat2.jpg\" alt=\"\" /></span></div>\n        <div class=\"4u$\"><span class=\"image fit\"><img src=\"../../assets/images/christmascat3.jpg\" alt=\"\" /></span></div>\n                              <div class=\"4u\"><span class=\"image fit\"><img src=\"../../assets/images/christmascat4.jpg\" alt=\"\" /></span></div>\n        <div class=\"4u\"><span class=\"image fit\"><img src=\"../../assets/images/christmascat5.jpg\" alt=\"\" /></span></div>\n        <div class=\"4u$\"><span class=\"image fit\"><img src=\"../../assets/images/christmascat6.jpg\" alt=\"\" /></span></div>\n                              \n                              <div class=\"4u\"><span class=\"image fit\"><img src=\"../../assets/images/cat11.jpg\" alt=\"\" /></span></div>\n        <div class=\"4u\"><span class=\"image fit\"><img src=\"../../assets/images/cat14.jpg\" alt=\"\" /></span></div>\n        <div class=\"4u$\"><span class=\"image fit\"><img src=\"../../assets/images/cat13.jpg\" alt=\"\" /></span></div>\n                              \n        <div class=\"4u\"><span class=\"image fit\"><img src=\"../../assets/images/pic09.jpg\" alt=\"\" /></span></div>\n        <div class=\"4u\"><span class=\"image fit\"><img src=\"../../assets/images/pic11.jpg\" alt=\"\" /></span></div>\n        <div class=\"4u$\"><span class=\"image fit\"><img src=\"../../assets/images/pic10.jpg\" alt=\"\" /></span></div>\n      </div>\n    </div>\n    \n    \n</section>"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"../../assets/css/main.css\" />\n\n<!-- Post -->\n<article class=\"post\">\n    <iframe width=\"740\" height=\"480\" src=\"https://www.youtube.com/embed/tblT_SKHfPk\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\n      <p>Check out Zoe's vlog on her visit to Little Tails!</p>\n    </article>\n\n  <!-- Post -->\n    <article class=\"post\"> <a href=\"#\" class=\"image featured\"><img src=\"../../assets/images/pic01.jpg\" alt=\"\" /></a>\n      <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>\n    </article>\n\n  <!-- Post -->\n    <article class=\"post\"> <a href=\"#\" class=\"image featured\"><img src=\"../../assets/images/pic02.jpg\" alt=\"\" /></a>\n      <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.</p>\n    </article>\n\n  <!-- Post -->\n    <article class=\"post\"> <a href=\"#\" class=\"image featured\"><img src=\"../../assets/images/pic03.jpg\" alt=\"\" /></a>\n      <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis suscipit. Quisque vestibulum rhoncus ligula.</p>\n    </article>"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<link rel=\"stylesheet\" href=\"../../assets/css/main.css\" />\n<div ng-app=\"myApp\" ng-controller=\"catCtrl\" class=\"container\">\nUsername: <input type=\"text\" ng-controller=\"catCtrl\" name=\"login_username\" ng-model=\"formObj.username\" placeholder=\"Type your username here...\">\nPassword: <input type=\"password\" name=\"login_password\" ng-model=\"formObj.password\" placeholder=\"Type your password here...\">\n<br/>\n<p>No Account? <a href=\"/registration\">Register Here!</a></p>\n\n<input type=\"button\" name=\"btn_login\" value=\"Login\" ng-click=\"login()\" > \n\n<input type=\"reset\" name=\"btn_reset\" value=\"Reset\" ng-click=\"reset()\"> \n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router, formGroup) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.formGroup = formGroup;
        this.results = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            name: '',
            password: ''
        });
    };
    LoginComponent.prototype.login10 = function () {
        console.log("TCL: formObj");
        //doAJAX("read" , JSON.stringify($scope.formObj) , "User", callback);
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.authUser(this.myForm.value.name, this.myForm.value.password).subscribe(function (data) {
            _this.results = data;
            if (_this.results[0].auth) {
                _this.authService.setSecureToken(_this.myForm.value.name);
                _this.authService.setUserRole(_this.results[0].role);
                _this.router.navigateByUrl('/user');
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modifycat/modifycat.component.css":
/*!***************************************************!*\
  !*** ./src/app/modifycat/modifycat.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGlmeWNhdC9tb2RpZnljYXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modifycat/modifycat.component.html":
/*!****************************************************!*\
  !*** ./src/app/modifycat/modifycat.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"../../assets/css/main.css\" />\n<script type=\"text/javascript\" src=\"scripts/lib/angular.min.js\"></script>\n<script type=\"text/javascript\" src=\"scripts/lib/common.js\"></script>\n<script type=\"text/javascript\" src=\"scripts/login.js\"></script>\n<div id=\"main\" ng-hide=\"showForm\">\n    <table>\n        <tr ng-repeat=\"cat in catsss\">\n            <td>\n                {{cat.name}}\n            </td>\n            <td>\n                <button ng-click=\"reviewForm(cat)\">Review</button>\n            </td>\n        </tr>\n    </table>\n</div>\n<!-- Main -->\n<div id=\"main\" ng-hide=\"!showForm\">\n\n        Cat Name: <input type=\"text\" name=\"catname\" value=\"Cat 1\"  ng-model=\"formObj.name\" placeholder=\"Type cat name here...\">\n        <br />\n        Cat Description: <textarea name=\"catdesc\"  ng-model=\"formObj.desc\" placeholder=\"Type cat description here...\">Blah blah blah descriptions here</textarea>\n        <br />\n        Cat Gender: \n        <select name=\"gender\">\n                <option value=\"Female\">Female</option>\n                <option value=\"Male\">Male</option>\n                </select>\n        <br />\n        Cat Age: <input type=\"text\" name=\"catage\" value=\"4 months\" ng-model=\"formObj.age\" placeholder=\"Type cat age here...\">\n\n        <br />\n        Date of Adoption: \n        <br/>\n        <input type=\"date\" name=\"adoptdate\" ng-model=\"formObj.dateOfAdoption\">\n        <br />\n        <br/>\n    \n        <input type=\"submit\" name=\"btn_submit\" value=\"Submit\" ng-click=\"editCatProfile()\">\n\n        <br/>\n        \n\n    </div>\n"

/***/ }),

/***/ "./src/app/modifycat/modifycat.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modifycat/modifycat.component.ts ***!
  \**************************************************/
/*! exports provided: ModifycatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifycatComponent", function() { return ModifycatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModifycatComponent = /** @class */ (function () {
    function ModifycatComponent() {
    }
    ModifycatComponent.prototype.ngOnInit = function () {
    };
    ModifycatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modifycat',
            template: __webpack_require__(/*! ./modifycat.component.html */ "./src/app/modifycat/modifycat.component.html"),
            styles: [__webpack_require__(/*! ./modifycat.component.css */ "./src/app/modifycat/modifycat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModifycatComponent);
    return ModifycatComponent;
}());



/***/ }),

/***/ "./src/app/newcat/newcat.component.css":
/*!*********************************************!*\
  !*** ./src/app/newcat/newcat.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld2NhdC9uZXdjYXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/newcat/newcat.component.html":
/*!**********************************************!*\
  !*** ./src/app/newcat/newcat.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"../../assets/css/main.css\" />\n\nCat Name: <input type=\"text\" name=\"catname\" ng-model=\"formObj.name\" placeholder=\"Type cat name here...\">\n<br />\nCat Description: <textarea name=\"catdesc\" ng-model=\"formObj.desc\" placeholder=\"Type cat description here...\"></textarea>\n<br />\nCat Gender: \n<select name=\"gender\" ng-model=\"formObj.gender\">\n<option value=\"Female\">Female</option>\n<option value=\"Male\">Male</option>\n</select>\n<br />\nCat Age: <input type=\"text\" name=\"catage\" ng-model=\"formObj.age\"  placeholder=\"Type cat age here...\">\n\n<br/>\n\n<input type=\"submit\" name=\"btn_submit\" value=\"Submit\" ng-click=\"sendForm()\" >\n\n"

/***/ }),

/***/ "./src/app/newcat/newcat.component.ts":
/*!********************************************!*\
  !*** ./src/app/newcat/newcat.component.ts ***!
  \********************************************/
/*! exports provided: NewcatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcatComponent", function() { return NewcatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewcatComponent = /** @class */ (function () {
    function NewcatComponent() {
    }
    NewcatComponent.prototype.ngOnInit = function () {
    };
    NewcatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newcat',
            template: __webpack_require__(/*! ./newcat.component.html */ "./src/app/newcat/newcat.component.html"),
            styles: [__webpack_require__(/*! ./newcat.component.css */ "./src/app/newcat/newcat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewcatComponent);
    return NewcatComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"../../assets/css/main.css\" />\n\nFirst Name: <input type=\"text\" name=\"fname\" ng-model=\"formObj.fName\" placeholder=\"Type your first name here...\">\n<!--enter validation-->\n<br />\nLast Name: <input type=\"text\" name=\"lname\" ng-model=\"formObj.lName\" placeholder=\"Type your last name here...\">\n<!--enter validation-->\n<br />\nEmail: <input type=\"text\" name=\"email\" ng-model=\"formObj.email\" placeholder=\"Type your email here...\">\n<br />\nContact: <input type=\"tel\" name=\"contact\" ng-model=\"formObj.contact\" placeholder=\"Type your contact here...\">\n<br />\nDate of Birth: \n<br/>\n<input type=\"date\" name=\"dob\" ng-model=\"formObj.dob\">\n<br />\n<br />\nUsername: <input type=\"text\" name=\"username\" ng-model=\"formObj.username\" placeholder=\"Type your username here...\">\n<br />\nPassword: <input type=\"password\" name=\"password\"ng-model=\"formObj.password\" placeholder=\"Type your password here...\">\n<br />\n\n<input type=\"submit\" name=\"btn_submit\" value=\"Submit\" ng-click=\"register()\" >\n\n<input type=\"reset\" name=\"btn_reset\" value=\"Reset\" ng-click=\"reset()\">\n\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/rules/rules.component.css":
/*!*******************************************!*\
  !*** ./src/app/rules/rules.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3J1bGVzL3J1bGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/rules/rules.component.html":
/*!********************************************!*\
  !*** ./src/app/rules/rules.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"../../assets/css/main.css\" />\n\n<!-- Post -->\n<article class=\"post\"> <a href=\"#\" class=\"image featured\"><img src=\"../../assets/images/cafe-rules.png\" alt=\"\" /></a>\n<p>When you enter the cafe, you will be asked to take off your shoes and wash your hands. This is for the benefit of our cats who live, eat and sleep in the cafe – so we want to keep this space as clean and hygienic as possible for them.</p>\n<footer>\n<ul class=\"actions\">\n\n</ul>\n\n</footer>\n</article>\n\n<!-- Post -->\n\n\n\n<p><strong><em>1. No other Animals:</em></strong> </p>\n<p>You are not allowed to bring any other animals into The Cafe.</p>\n\n\n<p><strong><em>2. Age Requirements:</em></strong> </p>          \n\n<p>2.1     No child(ren) below the age of 7 are allowed into the space (the “Cat Space”) where the resident cat(s) (the “Cats”) are housed within The Cafe. Child(ren) over the age of 7 but under the age of 14 may enter the Cat Space on the strict condition that they shall be supervised by an adult at all times due to safety reasons. For clarity, the supervising adult is required to pay for his/her admission ticket. </p>\n\n<p>2.2     Youths over the age of 14 years old may enter The Cafe without adult supervision but this shall be at the sole risk and responsibility of their parent and/or guardian.</p>\n\n\n\n\n\n<p><strong><em>3. Variations to booking capacity:</em></strong> </p>\n<p>The Cafe reserves the right to vary or cancel any prices, booking capacity, events, programmes and any terms relating to the participation in The Cafe at any time without prior notice to you.</p>\n\n\n<p><strong><em>4. Conditions of entry:</em></strong></p>\n<p>Admission to The Cafe is subject to compliance with the Terms at all times. The Cafe shall be entitled at its sole discretion to deny entry to you and/or remove you from The Cafe at any time if in the sole opinion of the staff and management at The Cafe that you have breached any of the Cafe Rules or the Terms, or adversely affecting the enjoyment of The Cafe by others or the safety of the Cats. Cat abusers will be reported to the police pursuant to Section 42 of the Animal and Birds Act (Chapter 7) as amended by the Animal and Birds Act (Amendment) Act 2014.</p>\n\n\n<p><strong><em>5. Release, Waiver and Indemnity:</em></strong></p>\n\n<p>5.1.     When interacting with the Cats at The Cafe, you agree and acknowledge there are inherent risks and hazards, potential or otherwise involved including risks of bites, scratches or otherwise which cause losses (including indirect or consequential losses), death, personal injury, disease, allergies, illness, discomfort, pain or suffering, property damage and/or any other damage of whatsoever nature and howsoever caused, to you, your child(ren), your other invitee(s), your property and/or the property of others whether caused by any intentional or negligent act, fault and/or omission by (i) the Cats, The Cafe and/or its directors, shareholders, agents, owners, employees,  independent contractors, insurers, successors, assigns, legal representatives (collectively the “Cafe Indemnitees”) and (ii) any other customer or person at The Cafe (collectively the “Losses”) while participating in any activities within The Cafe.</p>\n\n\n\n\n<p><strong><em>6. Errors:</em></strong></p>\n<p> While The Cafe takes all reasonable care to ensure that all prices and information on this website are correct, sometimes errors may occur and The Cafe has the right in its sole discretion to cancel any bookings made as a result of any error.</p>\n\n"

/***/ }),

/***/ "./src/app/rules/rules.component.ts":
/*!******************************************!*\
  !*** ./src/app/rules/rules.component.ts ***!
  \******************************************/
/*! exports provided: RulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesComponent", function() { return RulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RulesComponent = /** @class */ (function () {
    function RulesComponent() {
    }
    RulesComponent.prototype.ngOnInit = function () {
    };
    RulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rules',
            template: __webpack_require__(/*! ./rules.component.html */ "./src/app/rules/rules.component.html"),
            styles: [__webpack_require__(/*! ./rules.component.css */ "./src/app/rules/rules.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RulesComponent);
    return RulesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\New folder\CatA6-master (2)\CatA6-master (1)\CatA6-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map