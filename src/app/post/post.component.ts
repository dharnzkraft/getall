import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ImageService } from './../image.service';

export class Item {
  body: string;
}
declare var $;
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;
  value: any;

  formTemplate = new FormGroup({
    name: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    verify: new FormControl()

  });

  Items: any;
  name: string;
  location: string;
  description: string;
  details: string;
  pic: any;
  buttonDisabled: true;
  imageURL: string;
  selectedFile = null;
  verified: string;
  uploadPercent: any;
  isLoading: boolean;
  isNotLoading: boolean;

  constructor(
    public db: AngularFireDatabaseModule,
    public afd: AngularFireDatabase,
    private storage: AngularFireStorage,
    public http: HttpClient,
    private service: ImageService
  ) {
  }

  ngOnInit(): void {
    this.resetForm();
  }

  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.invalid) {
      this.isNotLoading = true;
      this.isLoading = false;
    } else {
      this.isLoading = true;
    }
    if (this.formTemplate.valid) {
      this.isLoading = true;
      const filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            // tslint:disable-next-line:no-string-literal
            formValue['imageUrl'] = url;
            this.service.insertImageDetails(formValue);
            this.resetForm();
          });
        })
      ).subscribe();
    }

  }


  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      name: '',
      imageUrl: '',
      category: '',
      description: '',
      address: '',
      number: '',
      verify: ('')
    });
    this.imgSrc = '../../assets/img/download.png';
    this.isSubmitted = false;
    this.selectedImage = null;
    this.isLoading = false;
    this.isNotLoading = false;
  }

  get formControls() {
      // tslint:disable-next-line:no-string-literal
    return this.formTemplate['controls'];
  }



  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '../../assets/img/download.png';
      this.selectedImage = null;
    }
  }

}
