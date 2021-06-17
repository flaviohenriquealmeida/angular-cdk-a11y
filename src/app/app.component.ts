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

  public items2: Array<{ id: string, value: string }> = [
    { id: '1', value: '1' },
    { id: '2', value: '2' },
  ];
}

export interface Employee {
  firstName: string;
  lastName: string;
}
