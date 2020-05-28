import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { ImageService } from './../image.service';
import { switchMap } from 'rxjs/operators';

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
  Item: string;
  Auto: string;
  Agric: string;
  Fabric: string;
  Elect: string;
  sales: Observable<any[]>;
  elects: Observable<any[]>;
  agric: Observable<any[]>;
  auto: Observable<any[]>;
  Items: any;
  Autos: any;
  Agrics: any;
  name: string;
  Fabrics: any;
  location: string;
  Elects: any;
  description: string;
  details: string;
  imageList: any[];
  imageLists: any;
  rowIndexArray: any[];
  imageDetails$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  category$: BehaviorSubject<string|null>;
  category: any;




  constructor(
    public db: AngularFireDatabaseModule,
    public afd: AngularFireDatabase,
    private service: ImageService

  ) {
    this.getDataFromFirebase();
    // this.category$ = new BehaviorSubject(null);
    // this.imageDetails$ = this.category$.pipe(switchMap(category =>
    //   afd.list('/imageDetails', ref =>
    //     category ? ref.orderByChild('category').equalTo(category) : ref
    //   ).snapshotChanges()
    // ));

   }

  ngOnInit() {

  }

  getDataFromFirebase() {

    this.afd.list(`imageDetails`).valueChanges().subscribe(
      data => {
        console.log(data);
        this.imageLists = data;

      }
    );
  }




  showAuto() {
    this.afd.list('/imageDetails', ref => ref.orderByChild('category').equalTo('auto')).valueChanges().subscribe(
      data => {
        console.log(data);
        this.imageLists = data;
      }
    );
  }
  showVerify() {
    this.afd.list('/imageDetails', ref => ref.orderByChild('verify').equalTo('verified')).valueChanges().subscribe(
      data => {
        console.log(data);
        this.imageLists = data;
      }
    );
  }
  showPlum() {
    this.afd.list('/imageDetails', ref => ref.orderByChild('category').equalTo('plumb')).valueChanges().subscribe(
      data => {
        console.log(data);
        this.imageLists = data;
      }
    );
  }
  showSale() {
    this.afd.list('/imageDetails', ref => ref.orderByChild('category').equalTo('sales')).valueChanges().subscribe(
      data => {
        console.log(data);
        this.imageLists = data;
      }
    );
  }
  showElect() {
    this.afd.list('/imageDetails', ref => ref.orderByChild('category').equalTo('elect')).valueChanges().subscribe(
      data => {
        console.log(data);
        this.imageLists = data;
      }
    );
  }
  showOther() {
    this.afd.list('/imageDetails', ref => ref.orderByChild('category').equalTo('other')).valueChanges().subscribe(
      data => {
        console.log(data);
        this.imageLists = data;
      }
    );
  }
}
