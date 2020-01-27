import {SnippetModel} from './snippet.model';
import {VideoItemIdModel} from './videoItemId.model';

export class VideoItemModel {
  kind: string;
  etag: string;
  id: VideoItemIdModel;
  snippet: SnippetModel;
}
