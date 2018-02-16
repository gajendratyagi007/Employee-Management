"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var employeeDetails_component_1 = require("./employee/employeeDetails.component");
var employeeTitle_1 = require("./employee/employeeTitle");
var emloyeeCount_1 = require("./employee/emloyeeCount");
var home_component_1 = require("./home/home.component");
var pageNotFound_1 = require("./others/pageNotFound");
var employee_Service_1 = require("./employee/employee.Service");
var appRoutes = [
    { path: 'home', component: home_component_1.homeComponent },
    { path: 'employeeList', component: employee_component_1.EmployeeComponent },
    { path: 'employeeList/:code', component: employeeDetails_component_1.employeeDetail },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFound_1.pageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, employeeDetails_component_1.employeeDetail, employeeTitle_1.EmployeeTitlePipe, emloyeeCount_1.EmployeeCount,
            home_component_1.homeComponent, pageNotFound_1.pageNotFoundComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [employee_Service_1.employeeService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map