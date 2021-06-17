import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cdk-a11y';
  public items: Array<Employee> = [
    {
      firstName: 'John',
      lastName: 'Constantine'
    },
    {
      firstName: 'Rebeka',
      lastName: 'Laser'
    },
    {
      firstName: 'George',
      lastName: 'Hamsey'
    }
  ];
}

export interface Employee {
  firstName: string;
  lastName: string;
}
