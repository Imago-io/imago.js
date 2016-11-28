'use strict';

import { Assets } from './assets';

export default class Imago {

  private _DEFAULT_HOST: string = 'https://api.imago.io';
  private _DEFAULT_BASE_PATH: string = '/api/v1';
  private _API_KEY: string;
  private _API_CLIENT: string = 'public';

  _api: any = {
    host: this._DEFAULT_HOST,
    path: this._DEFAULT_BASE_PATH,
    key: this._API_KEY,
    client: this._API_CLIENT
  };

  assets: any;

  constructor(key = '') {
    if (key) {
      this.setApiKey(key);
    }

    this.assets = new Assets(this._api);
  }

  setApiKey(value: string) {
    this._api.key = value;
  }

  setApiClient(value: string) {
    this._api.client = value;
  }

}
