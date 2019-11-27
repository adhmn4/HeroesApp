import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RatingModule } from 'ng-starrating';

import {AppComponent} from './app.component';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from './common/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    RatingModule,
    FormsModule,
    SharedModule,
    RouterModule.forRoot([{ path: '', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule) }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
