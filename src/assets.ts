'use strict';

import Utils from './utils';
import { Asset } from './assets.d';

export default class Assets {

  constructor(public api: any) {}

  search(query: any): Promise<any> {

    if (typeof query === 'string') {
      query = [
        {path: query}
      ];
    }

    query = Utils.toArray(query);

    query = query.map(Utils.formatQuery);

    let request = {
      path: `/search`,
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

  create(asset: Asset) {

  }

  update(asset: Asset) {

  }

  del(asset: string) {

  }

}
