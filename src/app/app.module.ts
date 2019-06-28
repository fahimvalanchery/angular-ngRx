import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

// import @ngrx/store and our reduce
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/reducers/student.reducer";

@NgModule({
  declarations: [AppComponent],
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
