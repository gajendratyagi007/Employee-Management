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
var employee_Service_1 = require("./employee.Service");
var EmployeeComponent = (function () {
    function EmployeeComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.columnSpan = 10;
        this.selectedEmployeeCountRadioButton = 'All';
        this.statusMessage = 'Loading Data. Please wait...';
        this.showDetails = false;
        this.name = 'Tyagi';
        this.classesToApply = 'boldClass ';
        this.applyBoldClass = true;
        this.applyItalicClass = true;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) {
            _this.statusMessage = 'Some error. Please try again after some time.';
            console.error(error);
        });
    };
    /*getEmployees(): void {
        this.employees = [
            { code: 1, firstName: 'Gajendra', lastName: 'Tyagi', age: 25, gender: 'Male', DOB: '6/25/1991' },
            { code: 2, firstName: 'Arpan', lastName: 'Tyagi', age: 26, gender: 'Male', DOB: '6/25/1991' },
            { code: 3, firstName: 'Kiran', lastName: 'Tyagi', age: 27, gender: 'Female', DOB: '6/25/1991' },
            { code: 4, firstName: 'SArini', lastName: 'Tyagi', age: 28, gender: 'Male', DOB: '6/25/1991' },
            { code: 5, firstName: 'Mandeep', lastName: 'Tyagi', age: 29, gender: 'Male', DOB: '25/6/1991' },
        ];

    }*/
    EmployeeComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    EmployeeComponent.prototype.getTotalEmployeeCount = function () {
        return this.employees.length;
    };
    EmployeeComponent.prototype.getTotalMaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Male"; }).length;
    };
    EmployeeComponent.prototype.getTotalFemaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Female"; }).length;
    };
    EmployeeComponent.prototype.trackByEmployeeId = function (index, employees) {
        return employees.code;
    };
    EmployeeComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    EmployeeComponent.prototype.ngOnChanges = function (changes) {
        for (var propertyName in changes) {
            var change = changes[propertyName];
            var current = JSON.stringify(change.currentValue);
            var previous = JSON.stringify(change.previousValue);
            console.log(propertyName + ': currentValue = ' + current + ', previousValue = ' + previous);
        }
    };
    EmployeeComponent.prototype.applyClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicClass
        };
        return classes;
    };
    EmployeeComponent.prototype.onClick = function () {
        console.log('Clicked');
    };
    return EmployeeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], EmployeeComponent.prototype, "name", void 0);
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'my-employee',
        templateUrl: 'app/employee/employee.component.html',
        styleUrls: ['app/employee/employee.component.css'],
    }),
    __metadata("design:paramtypes", [employee_Service_1.employeeService])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map