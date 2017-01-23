import { MediaService } from './../services/media.service';
import { inject } from '@angular/core/testing';
import { Response, Http } from '@angular/http';
import { Component, OnInit, Injectable } from '@angular/core';


@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {

  private routes: any = [];
  private stops: any = [];
  private images: any [];

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.mediaService.getMedia().subscribe((res) {
      this.images = res.json();
      console.log(this.images);
    });
    this.mediaService.getRoutes("Gransinmäki").subscribe(
      (res) => {
        console.log(res);

      });
  }

}
