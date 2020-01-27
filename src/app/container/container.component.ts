import {Component} from '@angular/core';
import {DataService} from '../core/services/data.service';
import {Observable} from 'rxjs';
import {VideoItemModel} from '../shared/models';
import {Module, AllModules } from '@ag-grid-enterprise/all-modules';
import {CustomStatsToolPanelComponent} from './custom-stats-tool-panel/custom-stats-tool-panel.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  public columnDefs: any [];
  public rowData: Observable<VideoItemModel[]>;
  public modules: Module[] = AllModules;
  public defaultColDef;
  public sideBar;
  public frameworkComponents;
  private rowSelection;

  constructor(private dataService: DataService) {
    this.columnDefs = dataService.columnDefs;
    this.rowSelection = 'multiple';
    this.frameworkComponents = { customStatsToolPanelComponent: CustomStatsToolPanelComponent };
    this.sideBar = {
      toolPanels: [
        {
          id: 'customStats',
          labelDefault: 'Custom Stats',
          labelKey: 'customStats',
          iconKey: 'custom-stats',
          toolPanel: 'customStatsToolPanelComponent'
        }
      ],
      defaultToolPanel: 'customStats'
    };
  }

  public onGridReady(params) {
    this.rowData = this.dataService.getItems();
  }

  getContextMenuItems(params) {
    return [
      {
        name: 'Open in new tab ',
        action: () => {
          window.open('https://www.youtube.com/watch?v=' + params.node.data.id.videoId, '_blank');
        }
      }
    ];
  }

}
