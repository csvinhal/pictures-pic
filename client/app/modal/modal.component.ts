/**
 * Created by crist on 13/05/2017.
 */
import {Component, ElementRef, Output, Input, EventEmitter, AfterViewInit} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements AfterViewInit {

  @Input() private title: string = 'Confirm?';
  @Input() private phrase: string;
  @Output() confirm = new EventEmitter();
  _element: ElementRef;

  constructor(private element: ElementRef) {
    this._element = element;
  }

  ngAfterViewInit() {

    $(this._element.nativeElement).dialog({
      title: this.title,
      autoOpen: false,
      resizable: false,
      modal: true,
      buttons: {
        Cancelar: () => {
          $(this._element.nativeElement).dialog("close");
        },
        Confirmar: () => {
          $(this._element.nativeElement).dialog("close");
        }
      }
    });
  }

  show() {
    $(this._element.nativeElement).dialog('open');
  }
}