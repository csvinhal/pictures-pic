/**
 * Created by crist on 11/05/2017.
 */
  import {Component, Input, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() titulo: string;

  ngOnInit() {
    this.titulo = this.titulo.length > 7 ? this.titulo.substr(0, 7) + '...' : this.titulo;
  }
}