import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { ImageService } from './image.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  // tslint:disable-next-line:variable-name
  private data: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  akubeImageLists: {}[];

  constructor(
    public db: AngularFireDatabaseModule,
    public afd: AngularFireDatabase,
    private service: ImageService,
  ) { }
  getData(): Observable<any> {
    return this.data.asObservable();
  }

  setData(data: any) {
    this.data.next(data);
  }

  getAkube() {
    this.afd.list('/akubeImageDetails', ref => ref.orderByChild('category').equalTo('akube')).valueChanges().subscribe(
      data => {
        // console.log(data);
        this.akubeImageLists = data;
      }
    );
  }
}
