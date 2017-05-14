/**
 * Created by crist on 13/05/2017.
 */
import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'buttonCmp',
  templateUrl: './button.component.html'
})
export class ButtonComponent {

  @Input() name: string = 'Ok';
  @Input() btnStyle: string = 'btn-default';
  @Input() btnType: string = 'button';
  @Input() btnEnabled: boolean = false;
  @Input() confirm: boolean = false;
  @Output() action = new EventEmitter();

  executeAction() {
    if(!this.confirm) return this.action.emit(null);
    else if(confirm('Are you sure you want to remove?')) this.action.emit(null);
  }
}