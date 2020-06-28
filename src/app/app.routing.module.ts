import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  // declarations: [ 
  //  HomeComponent
  // ],
  imports: [
    RouterModule.forRoot([
      {path:'cards', component: CardsComponent},
      { path: 'home', component: HomeComponent },    
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


