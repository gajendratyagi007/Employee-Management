"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employeeService = (function () {
    function employeeService() {
    }
    employeeService.prototype.getEmployees = function () {
        return [
            { code: 1, firstName: 'Gajendra', lastName: 'Tyagi', age: 25, gender: 'Male', DOB: '6/25/1991' },
            { code: 2, firstName: 'Arpan', lastName: 'Tyagi', age: 26, gender: 'Male', DOB: '6/25/1991' },
            { code: 3, firstName: 'Kiran', lastName: 'Tyagi', age: 27, gender: 'Female', DOB: '6/25/1991' },
            { code: 4, firstName: 'SArini', lastName: 'Tyagi', age: 28, gender: 'Male', DOB: '6/25/1991' },
        ];
    };
    return employeeService;
}());
employeeService = __decorate([
    core_1.Injectable()
], employeeService);
exports.employeeService = employeeService;
//# sourceMappingURL=employeeService.js.map