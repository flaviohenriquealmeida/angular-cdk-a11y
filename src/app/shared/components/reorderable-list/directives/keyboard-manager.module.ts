import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';
import { KeyboardManagerDirective } from './keyboard-manager.directive';

@NgModule({
  declarations: [
    KeyboardManagerDirective,
    KeyboardManagedItemDirective
  ],
  exports: [
    KeyboardManagerDirective,
    KeyboardManagedItemDirective
  ],
  imports: [CommonModule]
})
export class KeyboardManagerModule {

}
