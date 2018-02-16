import { Component  } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `            
                <nav class="navbar bg-primary navbar-inverse ">
                <div class="container-fluid">
                        <div class="navbar-header" routerLinkActive="active">
                             <a class="navbar-brand" routerLink="home" >{{Header}}</a>
                        </div>
                    <ul class="nav navbar-nav">
                      <li routerLinkActive="active"><a routerLink="home">Home</a></li>
                      <li routerLinkActive="active"><a routerLink="employeeList">Employees</a></li>
                      <li routerLinkActive="active"><a routerLink="organizations">Organizations</a></li>                      
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li routerLinkActive="active"><a routerLink="signUp"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li routerLinkActive="active"><a routerLink="logIn"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
                </nav>
                <router-outlet></router-outlet>
                           
                `
})

export class AppComponent {
   
    Header: String = "Employee Management Portal";
    imageSrc: String = 'https://blog.navyfederal.org/wp-content/uploads/2016/01/icon-5-tips-prepare-small-business-tax-season-employees-300x239.png';
}