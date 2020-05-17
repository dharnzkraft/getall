import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

export class Item {
  body: string;
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  Posts: Observable<any[]>;
  Items: any;
  name: string;
  category: string;
  description: string;
  details: string;
  pic: any;

  constructor(
    public db: AngularFireDatabaseModule,
    public afd: AngularFireDatabase,
    private storage: AngularFireStorage) {
    this.getDataFromFirebase();
   }

  ngOnInit(): void {
  }

  addPost() {
    this.afd.list(`Posts`).push({ names: this.name, category: this.category, desc: this.description, details: this.details,
       });
  }

  getDataFromFirebase() {

    this.afd.list(`Posts`).valueChanges().subscribe(
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
