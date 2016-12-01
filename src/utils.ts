'use strict';

import * as http from 'superagent';
import { isPlainObject } from 'lodash';

export default class Utils {

  static makeRequest(api: any, request: any): any {

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

  static formatQuery(query: any) {
    let elem: any;
    let i: any;
    let j: any;
    let key: any;
    let len: any;
    let len1: any;
    let ref: any;
    let value: any;
    let querydict = {};
    if (Array.isArray(query)) {
      for (i = 0, len = query.length; i < len; i++) {
        elem = query[i];
        for (key in elem) {
          value = elem[key];
          if (!Array.isArray(querydict[key])) {
            querydict[key] = [];
          }
          querydict[key].push(value);
        }
      }
    } else if (isPlainObject(query)) {
      for (key in query) {
        value = query[key];
        querydict[key] = Array.isArray(value) ? value : [value];
      }
    } else if (typeof query === 'string') {
      querydict['path'] = [query];
    }
    ref = ['page', 'pagesize'];
    for (j = 0, len1 = ref.length; j < len1; j++) {
      key = ref[j];
      if (querydict.hasOwnProperty(key)) {
        querydict[key] = querydict[key][0];
      }
    }
    return querydict;
  }

  static toArray(elem: any): any[] {
    if (Array.isArray(elem)) {
      return elem;
    } else {
      return [elem];
    }
  }

}
