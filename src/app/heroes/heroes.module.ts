import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeroesListComponent} from './heroes-list/heroes-list.component';
import {HeroesComponent} from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {RatingModule} from 'ng-starrating';
import {HeroProfileComponent} from './hero-profile/hero-profile.component';
import {SharedModule} from '../common/shared.module';


const routes: Routes = [
  {path: '', component: HeroesComponent},
  {path: 'heroes', component: HeroesListComponent},
  {path: 'hero/:id', component: HeroProfileComponent}
];

@NgModule({
  declarations: [HeroesListComponent, HeroesComponent, HeroProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RatingModule,
    SharedModule
  ]
})
export class HeroesModule {
}
