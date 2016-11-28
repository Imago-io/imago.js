'use strict';

import Utils from './utils';

export default class Assets {

  constructor(public api: any) {}

  search(query: any) {
    let request = {
      path: `/assets`,
      type: 'POST',
      data: query
    };
    return Utils.makeRequest(this.api, request);
  }

  get(id: string) {
    let request = {
      path: `/assets/${id}`,
      type: 'GET'
    };
    console.log('this.utils.makeRequest', Utils.makeRequest);
    return Utils.makeRequest(this.api, request);
  }

  update(asset: any) {

  }

  del(asset: any) {

  }

}
