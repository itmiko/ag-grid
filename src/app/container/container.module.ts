import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainerComponent} from './container.component';
import {RouterModule, Routes} from '@angular/router';
import {AgGridModule} from 'ag-grid-angular';
import {CellImgComponent} from './cell-img/cell-img.component';
import {FormsModule} from '@angular/forms';
import {HeaderCheckboxComponent} from './header-checkbox/header-checkbox.component';
import {MatCheckboxModule} from '@angular/material';
import {CellCheckboxComponent} from './cell-checkbox/cell-checkbox.component';
import {CellTruncatedComponent} from './cell-truncated/cell-truncated.component';
import { CustomStatsToolPanelComponent } from './custom-stats-tool-panel/custom-stats-tool-panel.component';

const routes: Routes = [
  {path: '', redirectTo: 'grid', pathMatch: 'full'},
  {path: 'grid', component: ContainerComponent}
];


@NgModule({
  declarations: [
    ContainerComponent,
    CellImgComponent,
    HeaderCheckboxComponent,
    CellCheckboxComponent,
    CellTruncatedComponent,
    CustomStatsToolPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([
      CellImgComponent,
      HeaderCheckboxComponent,
      CellCheckboxComponent,
      CellTruncatedComponent,
      CustomStatsToolPanelComponent
    ]),
    MatCheckboxModule
  ]
})
export class ContainerModule {
}
