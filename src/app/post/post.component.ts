import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';


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
  fabrics: Observable<any[]>;
  Posts: Observable<any[]>;
  sales: Observable<any[]>;
  elects: Observable<any[]>;
  agric: Observable<any[]>;
  auto: Observable<any[]>;
  Items: any;
  name: string;
  location: string;
  description: string;
  details: string;
  pic: any;
  show = false;

  constructor(
    public db: AngularFireDatabaseModule,
    public afd: AngularFireDatabase,
    private storage: AngularFireStorage) {
    this.getDataFromFirebase();


    }

  ngOnInit(): void {
  }
  fabricShow() {
    this.show = !this.show;
  }
  autoShow() {
    this.show = !this.show;
  }
  electShow() {
    this.show = !this.show;
  }
  agricShow() {
    this.show = !this.show;
  }
  saleShow() {
    this.show = !this.show;
  }

  addFabric() {
    this.afd.list(`fabrics`).push({
      fabricnames: this.name, fabriclocation: this.location, fabricdesc: this.description, fabricdetails: this.details,
       });
  }

  getDataFromFirebase() {

    this.afd.list(`fabrics`).valueChanges().subscribe(
      data => {
        console.log(data);
        this.Items = data;

      }
    );
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'Posts';
    const task = this.storage.upload(filePath, file);
  }

}
