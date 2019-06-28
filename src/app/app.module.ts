import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

// import @ngrx/store and our reduce
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducers/student.reducer";
import { ViewStudentsComponent } from './view-students/view-students.component';

@NgModule({
  declarations: [AppComponent, ViewStudentsComponent],
  imports: [
    BrowserModule,
    //add store module
    StoreModule.forRoot({
      student: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
