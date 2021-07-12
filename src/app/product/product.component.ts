
import { Component, OnInit, Renderer2, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productForm: FormGroup;
  error: string;
  uploadError: string;

  @ViewChild('image') private image: ElementRef;
  @Output() close = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.productForm = this.fb.group({
    });
  }

  onSelectedFile(event) {
    console.log(event.target.files.length)
    if (event.target.files.length > 0) {
      const productImage = event.target.files[0];

      const formData = new FormData();
      formData.append('productImage', productImage);
      const li: HTMLLIElement = this.renderer.createElement('li');

      const img: HTMLImageElement = this.renderer.createElement('img');
      img.src = formData['imagePath'];
      this.renderer.addClass(img, 'product-image');

      const a: HTMLAnchorElement = this.renderer.createElement('a');
      a.innerText = 'Delete';
      this.renderer.addClass(a, 'delete-btn');
      a.addEventListener('click', this.deleteProductImage.bind(this, formData['filename'], a));

      this.renderer.appendChild(this.image.nativeElement, li);
      this.renderer.appendChild(li, img);
      this.renderer.appendChild(li, a);
      console.log( img.src,formData['imagePath'])

    }
  }

  deleteProductImage(filename, a) {
    const formData = new FormData();
    formData.append('filename', filename);
    this.productService.deleteImage(formData).subscribe(
      res => {
        a.parentElement.remove();
      },
      err => this.error = err
    );
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('productName', this.productForm.get('productName').value);
    formData.append('price', this.productForm.get('price').value);
    formData.append('sku', this.productForm.get('sku').value);
    this.productService.saveProduct(formData).subscribe(
      res => {
        if (res.status === 'success') {
          this.onClose(res);
        }
      },
      err => this.error = err
    );
  }

  onClose(data: any) {
    this.close.emit(data);
  }
}

