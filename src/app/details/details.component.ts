
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { ImageService } from './../image.service';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {AkubeComponent} from '../akube/akube.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public details: string;
  imageList;
  akubeImageList: any;
  akubeImageLists: {}[];
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
  rowIndexArray: any[];
  akubeImageDetails$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  category$: BehaviorSubject<string | null>;
  category: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService,
    private router: Router,
    private afd: AngularFireDatabase,
    private ak: AkubeComponent

  ) {}

  ngOnInit()
   {

    console.log(this.imageService.currentimageDetails);
    this.akubeImageList = this.ak.getAkube;

  }


  goToCategoryPage() {

    this.router.navigate(['/categories']);
  }

}
