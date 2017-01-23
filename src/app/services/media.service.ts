import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaService {

  constructor(private http: Http) { }
  getRoutes (name: string) {
    const url: string = "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql";
    const headers = new Headers ({'Content-Type': 'application/graphql'});
    const options = new RequestOptions({headers: headers});
    let data = `{
    stops( name: "${name}") {
      patterns {
        name
      }
    }
    }`;
    return this.http.post(url, data, options).map
    (resp => resp.json());
  }
/*
  getMedia() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media/')
    .map((resp) => {
      return resp.json();
    });
  }
*/

  getMedia() {
    return this.http.get('http://media.mw.metropolia.fi/wbma/media/');
  }

}


