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
  constructor(public db: AngularFireDatabaseModule, public afd: AngularFireDatabase) {
    this.getDataFromFirebase();
    this.getData2();
    this.getData3();
    this.getData4();
    this.getData5();
   }

  ngOnInit(): void {
  }

  getDataFromFirebase() {

    this.afd.list(`fabrics`).valueChanges().subscribe(
      data => {
        console.log(data);
        this.Fabrics = data;

      }
    );
  }
  getData2() {
    this.afd.list(`auto`).valueChanges().subscribe(
      data => {
        console.log(data);
        this.Autos = data;

      }
    );

  }

  getData3() {
    this.afd.list(`agric`).valueChanges().subscribe(
      data => {
        console.log(data);
        this.Agrics = data;

      }
    );
  }

  getData4() {
    this.afd.list(`sales`).valueChanges().subscribe(
      data => {
        console.log(data);
        this.Items = data;

      }
    );
  }

  getData5() {
    this.afd.list(`elects`).valueChanges().subscribe(
      data => {
        console.log(data);
        this.Elects = data;

      }
    );
  }

  showAuto() {
    document.getElementById('auto').style.display = 'block';
    document.getElementById('agric').style.display = 'none';
    document.getElementById('sale').style.display = 'none';
    document.getElementById('elect').style.display = 'none';
    document.getElementById('fabric').style.display = 'none';
  }
  showFarm() {
    document.getElementById('agric').style.display = 'block';
    document.getElementById('auto').style.display = 'none';
    document.getElementById('sale').style.display = 'none';
    document.getElementById('elect').style.display = 'none';
    document.getElementById('fabric').style.display = 'none';
  }
  showSale() {
    document.getElementById('sale').style.display = 'block';
    document.getElementById('agric').style.display = 'none';
    document.getElementById('auto').style.display = 'none';
    document.getElementById('elect').style.display = 'none';
    document.getElementById('fabric').style.display = 'none';
  }
  showElect() {
    document.getElementById('elect').style.display = 'block';
    document.getElementById('agric').style.display = 'none';
    document.getElementById('sale').style.display = 'none';
    document.getElementById('auto').style.display = 'none';
    document.getElementById('fabric').style.display = 'none';
  }
  showFabric() {
    document.getElementById('fabric').style.display = 'block';
    document.getElementById('agric').style.display = 'none';
    document.getElementById('sale').style.display = 'none';
    document.getElementById('elect').style.display = 'none';
    document.getElementById('auto').style.display = 'none';
  }
}
