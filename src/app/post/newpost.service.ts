import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { PostComponent } from './post.component';


@Injectable({
  providedIn: 'root'
})

export class Item {
  body: string;
}
export class NewpostService {

  items: any;

  constructor(private db: AngularFireDatabase) {
    this.getPostList();
  }

  createItem(item: Item) {
    this.items.push(item);
  }

  getPostList(){
    this.items = this.db.list(`thrift`);
  }
}
