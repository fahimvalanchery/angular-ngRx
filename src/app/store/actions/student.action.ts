// importing our model and Action from @ngrx/store

import { Action } from "@ngrx/store";
import { Student } from "../models/student.model";

// Define Type of action, which is in the form of a string constant
export const ADD_STUDENT = "[STUDENT] Add";
export const REMOVE_STUDENT = "[STUDENT] Remove";

//  Creating class for each Action with a constructor that allo us to pass in the payload

export class AddStudent implements Action {
  readonly type = ADD_STUDENT;

  constructor(public payload: Student) {}
}

export class RemoveStudent implements Action {
  readonly type = REMOVE_STUDENT;
  constructor(public payload: number) {}
}

// Export all action classes for use within reducer

export type Actions = AddStudent | RemoveStudent;
