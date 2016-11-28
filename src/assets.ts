'use strict';

import { Utils } from './utils';

export class Assets {

  utils: any = Utils;

  constructor(public api: any) {}

  search(query: any) {
    let request = {
      path: `/assets`,
      type: 'POST',
      data: query
    };
    return this.utils.makeRequest(this.api, request);
  }

  get(id: string) {
    let request = {
      path: `/assets/${id}`,
      type: 'GET'
    };
    return this.utils.makeRequest(this.api, request);
  }

  update(asset: any) {

  }

  del(asset: any) {

  }

}
