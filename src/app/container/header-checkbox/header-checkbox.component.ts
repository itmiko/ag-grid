import {Component} from '@angular/core';
import {ICellRendererParams} from 'ag-grid-community';

@Component({
  selector: 'app-header-checkbox',
  templateUrl: './header-checkbox.component.html',
  styleUrls: ['./header-checkbox.component.scss']
})
export class HeaderCheckboxComponent {
  private isChecked = false;
  private params: any;

  constructor() {

  }


  public agInit(params: ICellRendererParams): void {
    this.params = params;
    this.params.api.addEventListener('selectionChanged', this.selectionChanged.bind(this));
  }

  public changeAll(): void {
    if (!this.isChecked) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
  }

  public selectionChanged(): void {
    this.isChecked = this.params.api.getDisplayedRowCount() === this.params.api.getSelectedRows().length;
  }
}
