import { Component, Input, TemplateRef } from '@angular/core';
import { faGripLines } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-reorderable-list',
  templateUrl: './reorderable-list.component.html',
  styleUrls: ['reorderable-list.component.scss']
})
export class ReorderableListComponent {
  @Input() public items: Array<unknown> = [];
  @Input() public itemTemplate: TemplateRef<HTMLElement> | null = null;
  @Input() public labelledBy = '';
  public fa = { faGripLines };
}
