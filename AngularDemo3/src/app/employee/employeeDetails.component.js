"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employee_Service_1 = require("./employee.Service");
var employeeDetail = (function () {
    function employeeDetail(_employeeService, _activatedRoute, _router) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
    }
    employeeDetail.prototype.ngOnInit = function () {
        var _this = this;
        var empCode = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode).subscribe(function (employeData) {
            if (employeData == null) {
                _this.statusMessage = "This Employee doesn't exist.";
            }
            else {
                _this.employee = employeData;
            }
        }, function (error) {
            _this.statusMessage = "Problem with the service. Please try after sometime";
            console.log(error);
        });
    };
    employeeDetail.prototype.onBackButtonClick = function () {
        this._router.navigate(['/employeeList']);
    };
    return employeeDetail;
}());
employeeDetail = __decorate([
    core_1.Component({
        selector: 'employee-detail',
        templateUrl: 'app/employee/employeeDetails.html',
    }),
    __metadata("design:paramtypes", [employee_Service_1.employeeService,
        router_1.ActivatedRoute,
        router_1.Router])
], employeeDetail);
exports.employeeDetail = employeeDetail;
//# sourceMappingURL=employeeDetails.component.js.map