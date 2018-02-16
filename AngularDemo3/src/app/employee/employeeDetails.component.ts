import { Component, OnInit } from "@angular/core";
import { IEmployee } from "./employeeInterface";
import { ActivatedRoute, Router } from "@angular/router";
import { employeeService } from "./employee.Service";

@Component({
    selector: 'employee-detail',
    templateUrl: 'app/employee/employeeDetails.html',    
    })

export class employeeDetail implements OnInit  {
    employee: IEmployee;
    statusMessage: string;

    constructor(private _employeeService: employeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router)
    {

    }

    ngOnInit() {
        let empCode: number = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode).subscribe(
            (employeData) => {
                if (employeData == null) {
                    this.statusMessage = "This Employee doesn't exist.";
                }
                else {
                    this.employee = employeData;
                }
            },
            (error) => {
                this.statusMessage = "Problem with the service. Please try after sometime";
                console.log(error);
            }
        )

    }

    onBackButtonClick() {
        this._router.navigate(['/employeeList']);
    }
}