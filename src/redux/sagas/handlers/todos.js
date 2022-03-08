import { call, put } from "redux-saga/effects";
import { requestGetTodos } from "../requests/todos";
import { setTodos } from "../../reducers/todos";

export function* handleGetTodos() {
  try {
    const response = yield call(requestGetTodos);
    const { data } = response;
    yield put(setTodos(data));
  } catch (error) {
    console.log(error);
  }
}
