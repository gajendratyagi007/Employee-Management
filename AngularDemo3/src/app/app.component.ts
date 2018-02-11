import { Component  } from "@angular/core";

@Component({
    selector: 'my-app',
    template: ` 
                <h1><span><img src= '{{imageSrc}}'/></span>{{Header}}<\h1>
                <div style ="padding:5px">
                    <ul class="nav nav-tabs">
                        <li><a routerLink="home">Home</a></li>                        
                        <li><a routerLink="employeeList">Employees</a></li>
                    </ul>
                <router-outlet></router-outlet>
                </div>
                
                `
})

export class AppComponent {
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
    Header: String = "Employee Management Portal";
    imageSrc: String = 'https://blog.navyfederal.org/wp-content/uploads/2016/01/icon-5-tips-prepare-small-business-tax-season-employees-300x239.png';
}