import { call, all } from 'redux-saga/effects';
import {
  fetchTodos,
  watchAddTodo,
  watchEditTodo,
  watchDeleteTodo,
  watchFetchTodos,
} from './todos';

export default function* rootSaga() {
  yield all([
    watchAddTodo(),
    watchEditTodo(),
    watchDeleteTodo(),
    watchFetchTodos(),
  ]);
}
