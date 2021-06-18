import { EventEmitter, Output } from '@angular/core';
import { ContentChildren, Directive, HostListener, OnInit, QueryList } from '@angular/core';
import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';

@Directive({
  selector: '[appKeyboardManager]'
})
export class KeyboardManagerDirective implements OnInit {

  @Output() public appDropped: EventEmitter<ReorderableListEvent> = new EventEmitter();
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
      if (this.isMovingItem()) {
        event.preventDefault();
      }
    });

    this.keyHandlers.set('ArrowUp', event => {
      console.log(this.managedItems.toArray());
      console.log('ArrowUp');
      if (this.isMovingItem()) {
        this.selectElement(Direction.PREVIOUS).focus();
      }
    });

    this.keyHandlers.set('ArrowDown', event => {
      console.log('ArrowDown');
      if (this.isMovingItem()) {
        this.selectElement(Direction.NEXT).focus();
      }
    });

    this.keyHandlers.set(' ', event => {
      console.log('Space');
      if (this.isMovingItem()) {
        const managedItemsAsArray = this.managedItems.toArray();
        const focusedElement = this.getFocusedElement();
        const currentIndex = managedItemsAsArray
          .findIndex(item => item === focusedElement);
        const previousIndex = managedItemsAsArray.findIndex(item => item === this.movableItem);
        this.appDropped.emit({ previousIndex, currentIndex });
        setTimeout(() => {
          this.movableItem?.focus();
          this.stopMovingItem();
        });
      } else {
        this.startMovingItem();
      }
    });

    this.keyHandlers.set('Escape', event => {
      console.log('Escape');
      this.stopMovingItem();
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

  public stopMovingItem(): void {
    console.log('parou de mover o item');
    this.movableItem = null;
  }

  public startMovingItem(): void {
    console.log('começou a mover o item');
    this.movableItem = this.getFocusedElement();
    console.log(this.movableItem);
  }

  private getFocusedElement(): KeyboardManagedItemDirective | null {
    const managedItem = this.managedItems
      .toArray()
      .find(item => item.isFocused());
    return managedItem ? managedItem : null;
  }

  private selectElement(direction: Direction): KeyboardManagedItemDirective {
    const managedItemsAsArray = this.managedItems.toArray();
    const currentSelectedIndex = managedItemsAsArray
      .findIndex(item => item.isFocused());
    const targetElementFocus = managedItemsAsArray[currentSelectedIndex + direction];
    if (targetElementFocus) {
      return targetElementFocus;
    } else {
      return direction === Direction.PREVIOUS
        ? managedItemsAsArray[managedItemsAsArray.length - 1]
        : managedItemsAsArray[0];
    }
  }
}

enum Direction {
  PREVIOUS = -1,
  NEXT = 1
}

export interface ReorderableListEvent {
  currentIndex: number;
  previousIndex: number;
}
