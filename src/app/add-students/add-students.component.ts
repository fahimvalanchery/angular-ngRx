import { Component, OnInit } from "@angular/core";

// import
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.state";
import { Student } from "../store/models/student.model";
import { Observable } from "rxjs";
import * as StudentActions from "../store/actions/student.action";

@Component({
  selector: "app-add-students",
  templateUrl: "./add-students.component.html",
  styleUrls: ["./add-students.component.css"]
})
export class AddStudentsComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  addStudent(name) {
    this.store.dispatch(new StudentActions.AddStudent({ name: name }));
  }

  ngOnInit() {}
}
