import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';

export class Item {
  body: string;
}
declare var $;
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  fabrics: Observable<any[]>;
  Posts: Observable<any[]>;
  sales: Observable<any[]>;
  elects: Observable<any[]>;
  agric: Observable<any[]>;
  auto: Observable<any[]>;
  Items: any;
  name: string;
  location: string;
  description: string;
  details: string;
  pic: any;
  show = false;
  showAuto = false;
  showElect = false;
  showAgric = false;
  showSale = false;
  buttonDisabled: true;
  imageURL: string;
  selectedFile = null;

  constructor(
    public db: AngularFireDatabaseModule,
    public afd: AngularFireDatabase,
    private storage: AngularFireStorage,
    public http: HttpClient
  ) {
    this.getDataFromFirebase();

    }

  ngOnInit(): void {
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
      fabricnames: this.name, fabriclocation: this.location, fabricdesc: this.description, fabricdetails: this.details, image: this.imageURL
       });

  }

  // async uploadFile(id, file): Promise<any> {
  //   if (file && file.length) {
  //     try {
  //       const task = this.storage.ref('images').child('id').put(file[0]);
  //       return this.storage.ref(`images/${id}`).getDownloadURL().toPromise();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }
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

  getDataFromFirebase() {

    this.afd.list(`fabrics`).valueChanges().subscribe(
      data => {
        // console.log(data);
        this.Items = data;

      }
    );
    this.afd.list(`auto`).valueChanges().subscribe(
      data => {
        // console.log(data);
        this.Items = data;

      }
    );
    this.afd.list(`agric`).valueChanges().subscribe(
      data => {
        // console.log(data);
        this.Items = data;

      }
    );
    this.afd.list(`elects`).valueChanges().subscribe(
      data => {
        // console.log(data);
        this.Items = data;

      }
    );
    this.afd.list(`sales`).valueChanges().subscribe(
      data => {
        // console.log(data);
        this.Items = data;

      }
    );
  }


  fileChanged(event) {
    const files = event.target.files;

    const data = new FormData();
    data.append('file', files[0]);
    data.append('UPLOADCARE_STORE', '1');
    data.append('UPLOADCARE_PUB_KEY', '6dc31454427afbc2e9c5');

    // tslint:disable-next-line:no-shadowed-variable
    this.http.post('https://upload.uploadcare.com/base/', data).subscribe(event => {
      console.log(event);
      this.imageURL = event.file;
    });
  }

}
