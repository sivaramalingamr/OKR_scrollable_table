import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DisplayComponent } from './components/display/display.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';

const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch: 'full', },
  { path: 'home',  component: HomeComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'slider-zoom', component: SliderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
