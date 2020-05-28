import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { ImageService } from './../image.service';


export class Item {
  body: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
  akubeImageLists: any;
  rowIndexArray: any[];
  akubeImageDetails$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  category$: BehaviorSubject<string | null>;
  category: any;

  constructor(
    public db: AngularFireDatabaseModule,
    public afd: AngularFireDatabase,
    private service: ImageService
  ) {
    this.getAkube();
  }

  homeSlider = {items: 1, dots: true, nav: true};

  ngOnInit(): void {
  }


  getAkube() {
    this.afd.list('/akubeImageDetails', ref => ref.orderByChild('category').limitToLast(5).equalTo('akube')).valueChanges().subscribe(
      data => {
        console.log(data);
        this.akubeImageLists = data;
      }
    );
  }
}



