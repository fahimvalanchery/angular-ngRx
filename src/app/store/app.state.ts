import { Student } from "../store/models/student.model";

export interface AppState {
  readonly student: Student[];
}
