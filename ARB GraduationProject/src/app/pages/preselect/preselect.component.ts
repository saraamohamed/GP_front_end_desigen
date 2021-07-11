import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { ArbProjectService } from 'src/app/shared/arb-project.service';
import { NgForm } from '@angular/forms';
import html2canvas from 'html2canvas';
import { HttpClient } from "@angular/common/http";
import {
  ExamData, Patient, Doctor, image,
  GeneralInfo, ClinicalInfo, FinalAssessment, Login, features
} from 'src/app/shared/arb-project.model';
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'preselect-icons',
  templateUrl: './preselect.component.html',
  styleUrls: ['./preselect.component.scss']
})
export class PreselectComponent implements OnInit {
  tabs = ['General Information', 'Clinical Information', 'Final Assesment'];
  selected = new FormControl(0);
  tabtitle: string = '';
  image = new image();
  createProduct: boolean;
  message: string;
  ImageURL: string = null;
  fileToUpload: File | null = null;
  file: File = null;
  THEfile: File = null;
  fileToUploads = new Array<File>();
  sanitization: any;
  urls = new Array<string>();
  Base64 = new Array<string>();
  files = new Array<File>();
  FilesToRemove = new Array<File>();
  try: File = null;
  _albums = [];
  title = 'angulartoastr';
  showModal: boolean;
  myurl:string;
  show(url)
  {
    this.showModal = true; // Show-Hide Modal Check
    this.myurl = url;

    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
  onCreateProduct() {
    this.createProduct = true;
    this.message = '';
  }

  onProductSubmit(data) {
    this.createProduct = false;
    this.message = data.message;
    console.log(this.message)
  }

  constructor(public service: ArbProjectService, private http: HttpClient, private sanitizer: DomSanitizer, private _lightbox: Lightbox) {
    
   }

  ngOnInit(): void {
    console.log(this.service.examDataId);
    this.http.get(`http://localhost:57645/api/image/${this.service.examDataId}`).subscribe(res => {
      console.log(res)
      for (var file of res as Array<string>) {
        console.log(file)
        // console.log("henaaaaakkk")
        this.getBase64ImageFromUrl(file)
          .then(result => {
            this.urls.push(result as string);
            for (var i of this.urls) {
              console.log(i)
            }
          })
          .catch(err => console.error(err));

      }


    }, err => {
      console.log(err);
    });

  }

  async getBase64ImageFromUrl(imageUrl) {
    var res = await fetch(imageUrl);
    var blob = await res.blob();

    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        resolve(reader.result);
      }, false);

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    })
  }
  handleFileInput(event) {
    this.urls = [];
    this.fileToUploads = event.target.files;
    if (this.fileToUploads) {
      for (var image of this.fileToUploads) {
        this.files.push(image);
      }
    }
    if (this.fileToUploads) {
      for (this.THEfile of this.files) {

        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
        }
        reader.readAsDataURL(this.THEfile);
      }
    }
    

  }
  fillarray(){
    for (let i = 1; i <= this.urls.length; i++) {
      // var reader = new FileReader();
      // console.log(this.ImageURL)
      // const src =  reader.readAsDataURL(this.THEfile[i]);
      const src =  this.THEfile[i];
      const caption = "None";
      const thumb =  this.THEfile[i];
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
 
      this._albums.push(album);
      console.log(album)
    }

  }


  OnSubmitImage(Image) {
    for (this.file of this.files) {
      this.postFile(this.file).subscribe(data => { console.log(data) });

    }
    // this.postFile(this.fileToUpload).subscribe(data=>{console.log(data)});
  }

  postFile(fileToUpload: File) {
    let no: number = this.service.examDataId;
    const endpoint = 'http://localhost:57645/api/image';
    const formData: FormData = new FormData();
    var array = fileToUpload.name.split(".", 2)
    console.log(array)
    formData.append('Image', fileToUpload, array[0] + `_${no}.` + array[1]);
    // formData.append('id', no as string);
    this.image.patientId = no;
    this.image.imageName = fileToUpload.name;
    // this.image.imageFile = fileToUpload;
    console.log(fileToUpload.name);
    return this.http
      .post(endpoint, formData);
  }



  private deleteImage(url: any, i: number, event): void {
    console.log(i)
    if (url.length > 10000) {
      this.urls = this.urls.filter((a) => a !== url);
      this.files = this.files.filter((a) => a !== this.files[i]);
    }
    else {
      var array = url.split("\\", 8)
      console.log(array[7])
      this.http.delete("http://localhost:57645/api/deleteImage/" + url).subscribe(res => {
        console.log(res)
      })
    }

  }




  OnSubmit(form: NgForm, data: string) {

    this.service.Post(data).subscribe(
      res => {
        this.resetForm(form, data);
      },
      err => {
        console.log(err);
      }
    )
  }
  resetForm(form: NgForm, data: string) {
    form.form.reset();
    this.service.GeneralInfo = new GeneralInfo();
    this.service.FinalAssessment = new FinalAssessment();
    this.service.ClinicalInfo = new ClinicalInfo();

  }
  open(index: number): void {
    // open lightbox
    this.fillarray();
    this._lightbox.open(this._albums, index);
  }
  
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}





  // addTab(selectAfterAdding: boolean) {

  //   if(this.tabtitle != ''){
  //       this.tabs.push(this.tabtitle);
  //   }else{
  //       this.tabs.push('New');
  //   }

  //   this.tabtitle = '';

  //   if (selectAfterAdding) {
  //     this.selected.setValue(this.tabs.length - 1);
  //   }
  // }

  // removeTab(index: number) {
  //   this.tabs.splice(index, 1);
  // }