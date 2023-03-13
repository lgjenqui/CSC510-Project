import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalsComponent } from './goals.component';
import { StudentsComponent } from './students.component';
import { StudentService } from './student.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    StudentsComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
       }
    ])    
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
