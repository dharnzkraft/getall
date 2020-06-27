import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageDetailList: AngularFireList<any>;
  akubeImageDetailList: AngularFireList<any>;
  homepage1: AngularFireList<any>;
  currentImageList: any;
  currentimageDetails: any;
  akubeImageLists: any;

  constructor(private afd: AngularFireDatabase) { }

  insertImageDetails(imageDetails) {
    this.afd.list('imageDetails').push(imageDetails);
  }

  // akube db
  insertAkubeImageDetails(akubeImageDetails) {
    this.afd.list('akubeImageDetails').push(akubeImageDetails);
  }

  getAkubeImageDetails() {
    this.akubeImageDetailList = this.afd.list('akubeImageDetails');
  }

  // homepage input
  insertVerified(homepageVerify) {
    this.afd.list('homepage1').push(homepageVerify);
  }

  getVerified() {
    this.homepage1 = this.afd.list('homepage1Details');
  }

  // homepage input2

}
