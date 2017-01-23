import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediaService {

  constructor(private http: Http) { }
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


