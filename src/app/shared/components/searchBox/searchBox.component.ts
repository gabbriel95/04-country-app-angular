import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: `./searchBox.component.html`,
  styles: ``,
})
export class SearchBoxComponent {
  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Input()
  public placeholder: string = '';

  public emitValue(value?: string): void {
    if (!value) return;

    this.onValue.emit(value);
  }
}
