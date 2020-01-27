import {Component} from '@angular/core';
import {IToolPanelParams} from 'ag-grid-community';

@Component({
  selector: 'app-cell-checkbox',
  templateUrl: './cell-checkbox.component.html',
  styleUrls: ['./cell-checkbox.component.scss']
})
export class CellCheckboxComponent {
  public params: any;

  constructor() {
  }

  public agInit(params: IToolPanelParams): void {
    this.params = params;
  }

  onChange(event) {
    this.params.node.setSelected(event.checked);
  }
}
