import { Component } from '@angular/core';

import { Employee } from './shared/components/reorderable-list/reorderable-list.component';

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
