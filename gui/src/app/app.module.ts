import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { MovieService } from './services/movie.service';
import { MovieUpdateComponent } from './components/movie-update/movie-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RecommendationComponent,
    MovieUpdateComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule  
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
