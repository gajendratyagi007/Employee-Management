import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { employeeDetail } from './employee/employeeDetails.component'
import { EmployeeTitlePipe } from './employee/employeeTitle';
import { EmployeeCount } from './employee/emloyeeCount';
import { homeComponent } from './home/home.component';
import { pageNotFoundComponent } from './others/pageNotFound';
import { employeeService } from './employee/employee.Service';

const appRoutes: Routes = [
    { path: 'home', component: homeComponent },
    { path: 'employeeList', component: EmployeeComponent },
    { path: 'employeeList/:code', component: employeeDetail },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: pageNotFoundComponent }
]

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, EmployeeComponent, employeeDetail ,EmployeeTitlePipe, EmployeeCount,
        homeComponent, pageNotFoundComponent

    ],
    bootstrap: [AppComponent],
  providers: [employeeService]
})
export class AppModule { }
