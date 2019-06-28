import { Student } from "../models/student.model";
import * as StudentActions from "../actions/student.action";

// Define our initial State or default state

const initialState: Student = {
  name: "Test name"
};

//Actual reducer,  It takes in a state, which we're defining as a Student type and we've optionally bound it to initialState

export function reducer(
  state: Student[] = [initialState],
  action: StudentActions.Actions
) {
  //
}
