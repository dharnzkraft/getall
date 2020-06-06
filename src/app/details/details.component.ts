import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ImageService } from './../image.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public details: string;
  imageList;
  constructor(
    private activatedRoute: ActivatedRoute,
    private imageService: ImageService,
    private router: Router

  ) { }

  ngOnInit()
   {
    console.log(this.imageService.currentImageList);
    this.imageList = this.imageService.currentImageList;
  }

  goToCategoryPage() {
    this.router.navigate(['/categories']);
  }

}
