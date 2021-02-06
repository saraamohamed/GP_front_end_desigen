import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import { GalleryComponent } from 'app/gallery/gallery.component';


@Component({
  selector: 'app-typography',
  templateUrl: './pre-select.component.html',
  styleUrls: ['./pre-select.component.css']
})
export class PreselectComponent implements OnInit {
  tabs = ['General Information', 'Clinical Information', 'Final Assesment'];
  selected = new FormControl(0);
  tabtitle:string = '';

  addTab(selectAfterAdding: boolean) {

    if(this.tabtitle != ''){
       this.tabs.push(this.tabtitle);
    }else{
       this.tabs.push('New');
    }
   
    this.tabtitle = '';

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
    
  

  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
  constructor() {
   }

  ngOnInit(): void {
  }

}
