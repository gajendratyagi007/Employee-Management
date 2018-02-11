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
        //@Input() name: String = 'Tyagi';
        //classesToApply: String = 'boldClass ';
        //applyBoldClass: boolean = true;
        //applyItalicClass: boolean = true;
        //ngOnChanges(changes: SimpleChanges) {
        //    for (let propertyName in changes){
        //        let change = changes[propertyName];
        //        let current = JSON.stringify(change.currentValue);
        //        let previous = JSON.stringify(change.previousValue);
        //        console.log(propertyName + ': currentValue = ' + current + ', previousValue = ' + previous);
        //    }
        //}
        //applyClasses() {
        //    let classes = {
        //        boldClass: this.applyBoldClass,
        //        italicClass: this.applyItalicClass
        //    };
        //    return classes;
        //}
        //onClick(): void {
        //    console.log('Clicked');
        //}
        this.Header = "Employee Management Portal";
        this.imageSrc = 'https://blog.navyfederal.org/wp-content/uploads/2016/01/icon-5-tips-prepare-small-business-tax-season-employees-300x239.png';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: " \n                <h1><span><img src= '{{imageSrc}}'/></span>{{Header}}<h1>\n                <div style =\"padding:5px\">\n                    <ul class=\"nav nav-tabs\">\n                        <li><a routerLink=\"home\">Home</a></li>                        \n                        <li><a routerLink=\"employeeList\">Employees</a></li>\n                    </ul>\n                <router-outlet></router-outlet>\n                </div>\n                \n                "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map