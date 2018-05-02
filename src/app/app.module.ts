import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HousesComponent } from './houses/houses.component';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { HttpGotService } from './http-got.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HousesComponent,
    BooksComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'about', component:AboutComponent},
      {path:'books/:id',component:BooksComponent},
      {path:'characters/:id',component:CharactersComponent},
      {path:'houses/:id',component:HousesComponent},



    ])
  ],
  providers: [HttpGotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
