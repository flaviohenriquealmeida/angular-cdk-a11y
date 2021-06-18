import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appKeyboardManagerItem]'
})
export class KeyboardManagedItemDirective implements OnInit {

  private keyHandlers: Map<string, (event: KeyboardEvent) => void> = new Map();

  public ngOnInit(): void {
    this.initializeKeyHandlers();
  }

  private initializeKeyHandlers(): void {
    this.keyHandlers.set('Tab', event => {
      console.log('Tab');
    });

    this.keyHandlers.set('ArrowUp', event => {
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
}
