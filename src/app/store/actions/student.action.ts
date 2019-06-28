// importing our model and Action from @ngrx/store

import { Action } from "@ngrx/store";
import { Student } from "../models/student.model";

// Define Type of action, which is in the form of a string constant
export const ADD_STUDENT = "[STUDENT] Add";
export const REMOVE_STUDENT = "[STUDENT] Remove";
