import {ThumbnailsModel} from './thumbnails.model';


export class SnippetModel {
  publishedAt?: string;
  channelId?: string;
  title?: string;
  description?: string;
  thumbnails?: ThumbnailsModel;
  channelTitle?: string;
  liveBroadcastContent?: string;
}
