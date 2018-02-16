"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.Header = "Employee Management Portal";
        this.imageSrc = 'https://blog.navyfederal.org/wp-content/uploads/2016/01/icon-5-tips-prepare-small-business-tax-season-employees-300x239.png';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "            \n                <nav class=\"navbar bg-primary navbar-inverse \">\n                <div class=\"container-fluid\">\n                        <div class=\"navbar-header\" routerLinkActive=\"active\">\n                             <a class=\"navbar-brand\" routerLink=\"home\" >{{Header}}</a>\n                        </div>\n                    <ul class=\"nav navbar-nav\">\n                      <li routerLinkActive=\"active\"><a routerLink=\"home\">Home</a></li>\n                      <li routerLinkActive=\"active\"><a routerLink=\"employeeList\">Employees</a></li>\n                      <li routerLinkActive=\"active\"><a routerLink=\"organizations\">Organizations</a></li>                      \n                    </ul>\n                    <ul class=\"nav navbar-nav navbar-right\">\n                        <li routerLinkActive=\"active\"><a routerLink=\"signUp\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n                        <li routerLinkActive=\"active\"><a routerLink=\"logIn\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n                    </ul>\n                </div>\n                </nav>\n                <router-outlet></router-outlet>\n                           \n                "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map