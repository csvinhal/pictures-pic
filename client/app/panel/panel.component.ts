/**
 * Created by crist on 11/05/2017.
 */
import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'panel',
  templateUrl: './panel.component.html'
})
export class PanelComponent {
  @Input() title: string;
}