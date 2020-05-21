import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

export class Item {
  body: string;
}

@Component({
  selector: 'app-akube',
  templateUrl: './akube.component.html',
  styleUrls: ['./akube.component.scss']
})
export class AkubeComponent implements OnInit {

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

  getAkube() {
    this.afd.list(`akube`).valueChanges().subscribe(
      data => {
        // console.log(data);
        this.Items = data;

      }
    );
  }
}
