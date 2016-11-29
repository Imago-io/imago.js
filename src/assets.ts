'use strict';

import { Utils } from './utils';

export default class Assets {

  constructor(public api: any) {}

  search(query: any): Promise<any> {
    let request = {
      path: `/assets`,
      type: 'POST',
      data: query
    };
    return Utils.makeRequest(this.api, request);
  }

  get(id: string): Promise<any> {
    let request = {
      path: `/assets/${id}`,
      type: 'GET'
    };
    return Utils.makeRequest(this.api, request);
  }

  create(asset: any){

  }

  update(asset: any) {

  }

  del(asset: any) {

  }

}
