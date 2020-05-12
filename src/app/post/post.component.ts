import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

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
  items: any;
  name: string;
  category: string;
  description: string;

  constructor(public db: AngularFireDatabaseModule, public afd: AngularFireDatabase) {
    this.getDataFromFirebase();
   }

  ngOnInit(): void {
  }

  addPost() {
    this.afd.list(`Posts`).push({ names: this.name, category: this.category, desc: this.description });
  }

  getDataFromFirebase() {

    this.afd.list(`Posts`).valueChanges().subscribe(
      data => {
        console.log(data);
        this.items = data;

      }
    );
  }
}
