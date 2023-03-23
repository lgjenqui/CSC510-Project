import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsComponent } from './goals.component';
import { StudentsComponent } from './students.component';
import { StudentService } from './student.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    StudentsComponent,
    HomepageComponent,
    RecommendationComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
       {
         path: 'goals',
         component: GoalsComponent
       },
       {
         path: 'students',
         component: StudentsComponent
       },
       {
        path: 'homepage',
        component: HomepageComponent
       }
    ])    
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
