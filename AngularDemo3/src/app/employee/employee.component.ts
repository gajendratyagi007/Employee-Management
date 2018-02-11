import { Component, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { IEmployee } from './employeeInterface';
import { employeeService } from './employee.Service';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css'],
    providers: [employeeService]   
})


export class EmployeeComponent implements OnInit, OnChanges{
    columnSpan: number = 6;
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';

    statusMessage: string = 'Loading Data. Please wait...';
    constructor(private _employeeService: employeeService) {
       
    }
    ngOnInit(){
         this._employeeService.getEmployees()
             .subscribe((employeeData) => this.employees = employeeData,
             error => {
                 this.statusMessage = 'Some error. Please try again after some time.';
                 console.error(error);
             });
    }

    /*getEmployees(): void {
        this.employees = [
            { code: 1, firstName: 'Gajendra', lastName: 'Tyagi', age: 25, gender: 'Male', DOB: '6/25/1991' },
            { code: 2, firstName: 'Arpan', lastName: 'Tyagi', age: 26, gender: 'Male', DOB: '6/25/1991' },
            { code: 3, firstName: 'Kiran', lastName: 'Tyagi', age: 27, gender: 'Female', DOB: '6/25/1991' },
            { code: 4, firstName: 'SArini', lastName: 'Tyagi', age: 28, gender: 'Male', DOB: '6/25/1991' },
            { code: 5, firstName: 'Mandeep', lastName: 'Tyagi', age: 29, gender: 'Male', DOB: '25/6/1991' },
        ];

    }*/

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    getTotalEmployeeCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }


    getTotalFemaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }

    trackByEmployeeId(index: number, employees: any): string {
        return employees.code;
    }
    
    showDetails: boolean = false;
    toggleDetails(): void {
        this.showDetails = !this.showDetails;

    }
    @Input() name: String = 'Tyagi';
    classesToApply: String = 'boldClass ';
    applyBoldClass: boolean = true;
    applyItalicClass: boolean = true;

    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertyName + ': currentValue = ' + current + ', previousValue = ' + previous);
        }


    }

    applyClasses() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicClass
        };

        return classes;
    }

    onClick(): void {
        console.log('Clicked');
    }

    
}