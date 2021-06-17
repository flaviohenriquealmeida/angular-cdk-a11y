import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReorderableListComponent } from './reorderable-list.component';

@NgModule({
  declarations: [ReorderableListComponent],
  exports: [ReorderableListComponent],
  imports: [CommonModule]
})
export class ReorderableListModule {}
