'use strict';

import * as http from 'superagent';

export namespace Utils {

  export function makeRequest(api: any, request: any): any {

    let headers: any = {};
    if (api.key) {
      headers.Authorization = `Basic ${api.key}:`;
    }

    let query = http(request.type, `${api.host}${api.path}${request.path}`);

    if (Object.keys(headers).length) {
      query.set(headers);
    }

    if (request.data) {
      query.send(request.data);
    }

    return query.then((response) => {
      return response.body;
    });
  }

}
