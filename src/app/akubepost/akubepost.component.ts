import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ImageService } from './../image.service';
import { AkubeformComponent } from '../akubeform/akubeform.component';


export class Item {
  body: string;
}

@Component({
  selector: 'app-akubepost',
  templateUrl: './akubepost.component.html',
  styleUrls: ['./akubepost.component.scss']
})
export class AkubepostComponent implements OnInit {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    name: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    verify: new FormControl('', Validators.required)
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

  constructor(
    public db: AngularFireDatabaseModule,
    public afd: AngularFireDatabase,
    private storage: AngularFireStorage,
    private service: ImageService
  ) {
    // this.getAkube();
  }

  ngOnInit(): void {
    this.resetForm();
  }

  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
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
      verify: ''
    });
    this.imgSrc = '../../ assets / img / download.png';
    this.isSubmitted = false;
    this.selectedImage = null;
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
  // addAkube() {
  //   this.afd.list(`akube`).push({
  //     akubename: this.akubename, akubesize: this.akubesize, akubeprice: this.akubeprice, akubelocation: this.akubelocation,
  //   });
  // }

  // getAkube() {
  //   this.afd.list(`akube`).valueChanges().subscribe(
  //     data => {
  //       // console.log(data);
  //       this.Items = data;

  //     }
  //   );
  // }

}
