import { takeLatest } from "redux-saga/effects";
import { GET_TODOS } from "../reducers/todos";
import { handleGetTodos } from "./handlers/todos";

export function* watcherSaga() {
  yield takeLatest(GET_TODOS, handleGetTodos);
}
