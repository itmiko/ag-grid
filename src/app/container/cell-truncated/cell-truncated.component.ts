import {Component} from '@angular/core';
import {IToolPanelParams} from 'ag-grid-community';

@Component({
  selector: 'app-cell-text',
  templateUrl: './cell-truncated.component.html',
  styleUrls: ['./cell-truncated.component.scss']
})
export class CellTruncatedComponent {
  params: any;

  public agInit(params: IToolPanelParams): void {
    this.params = params;
  }

}
