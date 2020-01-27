import {environment} from '../../../environments/environment';


export class Config {
  public static apiUrl(): string {
    return environment.apiLink;
  }
}
