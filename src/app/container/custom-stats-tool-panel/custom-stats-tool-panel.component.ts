import { Component, OnInit } from '@angular/core';
import {IToolPanel, IToolPanelParams} from 'ag-grid-community';

@Component({
  selector: 'app-custom-stats-tool-panel',
  templateUrl: './custom-stats-tool-panel.component.html',
  styleUrls: ['./custom-stats-tool-panel.component.scss']
})
export class CustomStatsToolPanelComponent {

    private params: IToolPanelParams;
    private total: number;
  private selected: number;
  private checker = true;
  private api;

    public agInit(params: IToolPanelParams): void {
      this.params = params;
      this.api = params.api;
      this.total = 0;
      this.selected = 0;
      this.params.api.addEventListener('modelUpdated', this.updateTotals.bind(this));
      this.params.api.addEventListener('selectionChanged', this.updateTotals.bind(this));
    }

    updateTotals(): void {
      this.total = this.params.api.getDisplayedRowCount();
      this.selected = this.params.api.getSelectedRows().length;
    }

    showHideSelectionColumn() {
      this.checker = !this.checker;
      this.api.columnController.setColumnVisible('snippet.select', this.checker);
    }
}
