import {SnippetModel} from './snippet.model';

export class VideoItemIdModel {
  kind?: string;
  etag?: string;
  id?: VideoItemIdModel;
  snippet: SnippetModel;
}
