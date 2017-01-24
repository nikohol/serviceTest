import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor() { }
/*
  postLogin() {
    const url: string = "http://media.mw.metropolia.fi/wbma/login";
    const headers = new Headers ({'Content-Type': "application/json"});

    return this.http.post(url).map
    (resp => resp.json());
  }
*/
}
