import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Glider: any;
  constructor() {
    // tslint:disable-next-line:no-unused-expression
    new this.Glider(document.querySelector('.glider'));
   }

  ngOnInit(): void {
  }


}



