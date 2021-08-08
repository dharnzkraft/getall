import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { ImageService } from './../image.service';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DetailsService } from './../details.service';


export class Item {
  body: string;
}

@Component({
  selector: 'app-akube',
  templateUrl: './akube.component.html',
  styleUrls: ['./akube.component.scss']
})
export class AkubeComponent implements OnInit {
  @Output() dataLoaded: EventEmitter<any> = new EventEmitter<any>();
  Posts: Observable<any[]>;

  name: string;
  Fabrics: any;
  location: string;
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
    private service: ImageService,
    private router: Router,
    private detailService: DetailsService
  ) {
    this.getAkube();
  }

  ngOnInit() {
    this.detailService.getData().subscribe(
      (data: any) => {
        this.dataLoaded.emit(data);

        this.detailService.setData(data);
      }
    );
  }

  getAkube() {
    this.afd.list('/akubeImageDetails', ref => ref.orderByChild('category').equalTo('akube')).valueChanges().subscribe(
      data => {
        // console.log(data);
        this.akubeImageLists = data;
      }
    );
  }

  moredetails() {
    this.service.getAkubeImageDetails();
    this.router.navigateByUrl('/details/:id');
  }

  // onGoToDetailsPage(akubeImageLists) {
  //   this.service.getAkubeImageDetails = akubeImageLists;
  //   this.router.navigate(['/details']);
  // }
}
