import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ReorderableListComponent } from './reorderable-list.component';

@NgModule({
  declarations: [ReorderableListComponent],
  exports: [ReorderableListComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class ReorderableListModule {}
