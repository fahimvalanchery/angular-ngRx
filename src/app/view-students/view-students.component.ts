import { Component, OnInit } from "@angular/core";

// import these

import { Store } from "@ngrx/store";
import { AppState } from "../store/app.state";
import { Student } from "../store/models/student.model";
import { Observable } from "rxjs";

// for remove action

import * as StudentActions from "../store/actions/student.action";
@Component({
  selector: "app-view-students",
  templateUrl: "./view-students.component.html",
  styleUrls: ["./view-students.component.css"]
})
export class ViewStudentsComponent implements OnInit {
  //Defineing an Observable

  students: Observable<Student[]>;

  constructor(private store: Store<AppState>) {
    this.students = store.select("student");
  }
  delStudent(i) {
    this.store.dispatch(new StudentActions.RemoveStudent(i));
  }

  ngOnInit() {}
}
