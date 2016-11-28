'use strict';

import { Utils } from './utils';

export class Assets {

  utils: Utils;

  constructor(public api: any) {}

  search(query: any) {

  }

  get(id: string) {
    let request = {
      path: `/assets/${id}`,
      type: 'GET'
    }
    return this.utils.makeRequest(this.api, request)
  }

  update(asset: any) {

  }

  del(asset: any) {

  }

}
