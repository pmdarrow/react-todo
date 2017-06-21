import { call, all } from 'redux-saga/effects';
import {
  fetchTodos,
  watchAddTodo,
  watchEditTodo,
  watchDeleteTodo,
  watchFetchTodos,
} from './todos';

export default function* rootSaga() {
  // Load initial data
  yield call(fetchTodos);
  yield all([
    watchAddTodo(),
    watchEditTodo(),
    watchDeleteTodo(),
    watchFetchTodos(),
  ]);
}
