import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InterviewRatingComponent } from './components/interview-rating/interview-rating.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponent,
  pathMatch:"full"
},
{
  path:'interviewHelper',
  component:InterviewRatingComponent,
  pathMatch:"full"
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
