import {Component} from '@angular/core';
import {IToolPanelParams} from 'ag-grid-community';

@Component({
  selector: 'app-cell-img',
  templateUrl: './cell-img.component.html',
  styleUrls: ['./cell-img.component.scss']
})
export class CellImgComponent {
  params: any;

  public agInit(params: IToolPanelParams): void {
    this.params = params;
  }

}
