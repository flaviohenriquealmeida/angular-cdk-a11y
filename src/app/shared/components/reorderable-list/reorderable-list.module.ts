import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ReorderableListComponent } from './reorderable-list.component';
import { KeyboardManagerModule } from './directives/keyboard-manager.module';

@NgModule({
  declarations: [ReorderableListComponent],
  exports: [ReorderableListComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DragDropModule,
    KeyboardManagerModule
  ]
})
export class ReorderableListModule {}
