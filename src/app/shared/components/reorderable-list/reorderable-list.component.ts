import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reorderable-list',
  templateUrl: './reorderable-list.component.html',
  styleUrls: ['reorderable-list.component.scss']
})
export class ReorderableListComponent {
  @Input() public items: Array<Employee> = [];
}

export interface Employee {
  firstName: string;
  lastName: string;
}
