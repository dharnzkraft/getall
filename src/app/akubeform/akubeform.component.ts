import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ImageService } from './../image.service';

export class Item {
  body: string;
}

@Component({
  selector: 'app-akubeform',
  templateUrl: './akubeform.component.html',
  styleUrls: ['./akubeform.component.scss']
})
export class AkubeformComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    akubename: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    imageUrl1: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    // imageUrl2: new FormControl('', Validators.required),
    // imageUrl3: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
  });


  Items: any;
  akubename: '';
  akubesize: '';
  akubeprice: '';
  akubelocation: '';
  akube: Observable<any[]>;
  name: string;
  location: string;
  description: string;
  details: string;
  verified: string;
  buttonDisabled: true;
  imageURL: string;
  selectedFile = null;
  isLoading: boolean;
  isNotLoading: boolean;

  constructor(
    public db: AngularFireDatabaseModule,
    public afd: AngularFireDatabase,
    private storage: AngularFireStorage,
    private service: ImageService
  ) { }

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
            this.service.insertAkubeImageDetails(formValue);
            this.resetForm();
          });
        })
      ).subscribe();
    }

  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      akubename: '',
      location: '',
      imageUrl1: '',
      category: '',
      number: '',
      // imageUrl2: '',
      // imageUrl3: '',
      price: ''
    });
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
