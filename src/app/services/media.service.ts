import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Injectable()
export class MediaService {

  private mod: any = {};

  constructor(private http: Http) { }

  getJson() {
    this.http.get('tsconfig.json')
    .subscribe((res: Response) => {
      const json = res.json();
      this.mod = json.compilerOptions;
      console.log(this.mod);
    });
  }
  getAllMedia() {
    return null;
  }

}


