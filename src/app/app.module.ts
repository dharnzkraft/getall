import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostComponent } from './post/post.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { OwlModule } from 'ngx-owl-carousel';
// import { MatOptionModule } from '@angular/material/option';
// import { NgxMatFileInputModule } from '@angular-material-components/file-input';
// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage/angular-fire-storage';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { AkubeComponent } from './akube/akube.component';
import { AkubepostComponent } from './akubepost/akubepost.component';
import { AkubeformComponent } from './akubeform/akubeform.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
// import { ImageService } from './image.service';
// import { MatFileUploadModule } from 'angular-material-fileupload';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DetailsComponent } from './details/details.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ProductdetailComponent } from './productdetail/productdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    PostComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    AkubeComponent,
    AkubepostComponent,
    AkubeformComponent,
    DetailsComponent,
    ProductdetailComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    AngularFireDatabaseModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatListModule,
    MatDividerModule,
    AngularFireStorageModule,
    MatChipsModule,
    MatExpansionModule,
    HttpClientModule,
    OwlModule,
    ReactiveFormsModule,
    ScrollingModule,
    InfiniteScrollModule,
    NgxScrollTopModule

  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
    // { provide: BUCKET, useValue: 'images' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
