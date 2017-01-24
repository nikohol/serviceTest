import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  postLogin() {
    const url: string = "http://media.mw.metropolia.fi/wbma/login";
  }

}
