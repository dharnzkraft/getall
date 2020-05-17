import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

export class Item {
  body: string;
}



@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  Posts: Observable<any[]>;
  Items: any;
  name: string;
  category: string;
  description: string;
  details: string;
  Item: string;

  constructor(public db: AngularFireDatabaseModule, public afd: AngularFireDatabase) {
    this.getDataFromFirebase();
   }

  ngOnInit(): void {
  }

  getDataFromFirebase() {

    this.afd.list(`Posts`).valueChanges().subscribe(
      data => {
        console.log(data);
        this.Items = data;

      }
    );
  }
}
