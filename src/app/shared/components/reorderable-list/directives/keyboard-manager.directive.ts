import { ContentChildren, Directive, HostListener, OnInit, QueryList } from '@angular/core';
import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';

@Directive({
  selector: '[appKeyboardManager]'
})
export class KeyboardManagerDirective implements OnInit {

  @ContentChildren(KeyboardManagedItemDirective, { descendants: true })
  public managedItems!: QueryList<KeyboardManagedItemDirective>;
  public movableItem: KeyboardManagedItemDirective | null = null;
  private keyHandlers: Map<string, (event: KeyboardEvent) => void> = new Map();

  public ngOnInit(): void {
    this.initializeKeyHandlers();
  }

  private initializeKeyHandlers(): void {
    this.keyHandlers.set('Tab', event => {
      console.log('Tab');
    });

    this.keyHandlers.set('ArrowUp', event => {
      console.log(this.managedItems.toArray());
      console.log('ArrowUp');
    });

    this.keyHandlers.set('ArrowDown', event => {
      console.log('ArrowDown');
    });

    this.keyHandlers.set(' ', event => {
      console.log('Space');
    });

    this.keyHandlers.set('Escape', event => {
      console.log('Escape');
    });
  }

  @HostListener('keydown', ['$event'])
  public manageKey(event: KeyboardEvent): void {
      const handler = this.keyHandlers.get(event.key);
      if (handler) {
        handler(event);
      }
  }

  public isMovingItem(): boolean {
    const movingItem = !!this.movableItem;
    console.log('Is moving item? ' + movingItem);
    return movingItem;
  }
}
