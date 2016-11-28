'use strict';

import * as http from 'superagent';

export default class Utils {

  constructor() {}

  makeRequest(api: any, request: any): void {

    let headers: any = {};
    if (api.key) {
      headers.Authorization = `Basic ${api.key}`;
    }

    let path = `${api.host}${api.path}${request.path}`;
    let query = http(request.type, path);
    console.log('query', query);

    if (Object.keys(headers).length) {
      query.set(headers);
    }

    if (request.data) {
      query.send(request.data);
    }

    console.log('query 2', query);


  }

}
