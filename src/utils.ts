'use strict';

import * as request from 'superagent';

export class Utils {

  makeRequest(api: any, request: any) {

    let headers = {
      Authorization: `Basic ${api.key}`
    };

    let path = `${api.host}${api.path}${request.path}`;

  }

}
