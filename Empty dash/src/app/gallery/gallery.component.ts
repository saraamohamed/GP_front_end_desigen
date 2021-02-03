import { Component, OnInit } from '@angular/core';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'https://i.ibb.co/Xsfs9Jx/mammo4.jpg',
        medium: 'https://i.ibb.co/Xsfs9Jx/mammo4.jpg',
        big: 'https://i.ibb.co/Xsfs9Jx/mammo4.jpg'
      },
      {
        small: 'https://i.ibb.co/GcXgp86/mammo3.jpg',
        medium: 'https://i.ibb.co/GcXgp86/mammo3.jpg',
        big: 'https://i.ibb.co/GcXgp86/mammo3.jpg'
      },
      {
        small: 'https://i.ibb.co/THCcw3N/mammo1.png',
        medium: 'https://i.ibb.co/THCcw3N/mammo1.png',
        big: 'https://i.ibb.co/THCcw3N/mammo1.png'
      },{
        small: 'https://i.ibb.co/zhvT21s/mammo2.jpg',
        medium: 'https://i.ibb.co/zhvT21s/mammo2.jpg',
        big: 'https://i.ibb.co/zhvT21s/mammo2.jpg'
      },      
    ];
  }

}
