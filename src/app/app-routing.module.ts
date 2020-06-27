import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';
import { AkubeComponent } from './akube/akube.component';
import { AkubepostComponent } from './akubepost/akubepost.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'post', component: PostComponent },
  { path: 'about', component: AboutComponent},
  { path: 'shop', component: AkubeComponent},
  { path: 'akubepost', component: AkubepostComponent },
  { path: 'verifiedForm', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
