import {Injectable} from '@angular/core';
import {Config} from '../../shared/constans/config';
import {HttpClient} from '@angular/common/http';
import {CellImgComponent} from '../../container/cell-img/cell-img.component';
import {VideoItemModel} from '../../shared/models';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HeaderCheckboxComponent} from '../../container/header-checkbox/header-checkbox.component';
import {CellCheckboxComponent} from '../../container/cell-checkbox/cell-checkbox.component';
import {CellTruncatedComponent} from '../../container/cell-truncated/cell-truncated.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private getVideoItems = `${Config.apiUrl()}`;
  public columnDefs;


  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        headerName: '',
        field: 'snippet.thumbnails',
        sortable: false,
        cellRendererFramework: CellImgComponent,
        autoHeight: true,
        pinned: true,
        width: 120,
      },
      {
        headerName: 'Select All',
        field: 'snippet.select',
        headerComponentFramework: HeaderCheckboxComponent,
        cellRendererFramework: CellCheckboxComponent,
        cellStyle: {display: 'flex', 'align-items': 'center'},
      },
      {
        headerName: 'Published on',
        field: 'snippet.publishedAt',
        sortable: true,
        cellRendererFramework: CellTruncatedComponent,
        useCustomTemplate: {
          name: 'date',
        },
        cellStyle: {display: 'flex', 'align-items': 'center'},
      },
      {
        headerName: 'Video Title',
        field: '',
        cellRendererFramework: CellTruncatedComponent,
        sortable: true,
        useCustomTemplate: {
          name: 'link',
          baseUrl: 'https://www.youtube.com/watch?v=',
        },
        cellStyle: {display: 'flex', 'align-items': 'center'},
      },
      {
        headerName: 'Description',
        field: 'snippet.description',
        sortable: true,
        cellRendererFramework: CellTruncatedComponent,
        useCustomTemplate: {
          name: 'text',
        },
        cellStyle: {display: 'flex', 'align-items': 'center'},
      },
    ];
  }

  public getItems(): Observable<VideoItemModel[]> {
    return this.http.get<any>(this.getVideoItems).pipe(
      map(res => res.items)
    );
  }


}
