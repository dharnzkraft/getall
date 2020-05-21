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

}
