import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';


export class Item {
  body: string;
}

@Component({
  selector: 'app-akubepost',
  templateUrl: './akubepost.component.html',
  styleUrls: ['./akubepost.component.scss']
})
export class AkubepostComponent implements OnInit {

  Items: any;
  akubename: '';
  akubesize: '';
  akubeprice: '';
  akubelocation: '';
  akube: Observable<any[]>;
  show = false;
  showAuto = false;
  showElect = false;
  showAgric = false;
  showSale = false;
  name: string;
  location: string;
  description: string;
  details: string;
  verified: string;
  buttonDisabled: true;

  constructor(
    public db: AngularFireDatabaseModule,
    public afd: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {
    this.getAkube();
  }

  ngOnInit(): void {
  }

  addAkube() {
    this.afd.list(`akube`).push({
      akubename: this.akubename, akubesize: this.akubesize, akubeprice: this.akubeprice, akubelocation: this.akubelocation,
    });
  }

  getAkube() {
    this.afd.list(`akube`).valueChanges().subscribe(
      data => {
        // console.log(data);
        this.Items = data;

      }
    );
  }

  fabricShow() {
    this.show = !this.show;
    document.getElementById('fill').style.display = 'block';
    document.getElementById('select').style.display = 'none';
  }
  autoShow() {
    this.showAuto = !this.showAuto;
    document.getElementById('fill').style.display = 'block';
    document.getElementById('select').style.display = 'none';
  }
  electShow() {
    this.showElect = !this.showElect;
    document.getElementById('fill').style.display = 'block';
    document.getElementById('select').style.display = 'none';
  }
  agricShow() {
    this.showAgric = !this.showAgric;
    document.getElementById('fill').style.display = 'block';
    document.getElementById('select').style.display = 'none';
  }
  saleShow() {
    this.showSale = !this.showSale;
    document.getElementById('fill').style.display = 'block';
    document.getElementById('select').style.display = 'none';
  }

  addFabric() {
    this.afd.list(`fabrics`).push({
      fabricnames: this.name, fabriclocation: this.location, fabricdesc: this.description, fabricdetails: this.details
    });
  }
  addAuto() {
    this.afd.list(`auto`).push({
      autonames: this.name, autolocation: this.location, autodesc: this.description, autodetails: this.details,
    });
  }

  addAgric() {
    this.afd.list(`agric`).push({
      agricnames: this.name, agriclocation: this.location, agricdesc: this.description, agricdetails: this.details,
    });
  }

  addSale() {
    this.afd.list(`sales`).push({
      salesnames: this.name, saleslocation: this.location, salesdesc: this.description, salesdetails: this.details,
    });
  }

  addElect() {
    this.afd.list(`elects`).push({
      electnames: this.name, electlocation: this.location, electdesc: this.description, electdetails: this.details,
    });
  }
}
