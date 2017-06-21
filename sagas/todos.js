import { call, put, takeEvery } from 'redux-saga/effects';
import {
  ADD_TODO_REQUESTED,
  EDIT_TODO_REQUESTED,
  DELETE_TODO_REQUESTED,
  FETCH_TODOS_REQUESTED,
} from '../constants/actionTypes';
import {
  addTodoSucceeded,
  addTodoFailed,
  editTodoSucceeded,
  editTodoFailed,
  deleteTodoSucceeded,
  deleteTodoFailed,
  fetchTodosSucceeded,
  fetchTodosFailed,
} from '../actions/todos';
import api from '../services/api';

export function* addTodo(action) {
  try {
    let data = yield call([api, api.addTodo]);
    yield put(addTodoSucceeded({ id: data.key }));
  } catch (error) {
    yield put(addTodoFailed(error));
  }
}

export function* editTodo(action) {
  try {
    var data = yield call(
      [api, api.editTodo],
      action.payload.id,
      action.payload.value,
      action.payload.completed
    );
    yield put(editTodoSucceeded());
  } catch (error) {
    yield put(editTodoFailed(error));
  }
}

export function* deleteTodo(action) {
  try {
    yield call([api, api.deleteTodo], action.payload.id);
    yield put(deleteTodoSucceeded());
  } catch (error) {
    yield put(deleteTodoFailed(error));
  }
}

export function* fetchTodos(action) {
  try {
    const data = yield call([api, api.fetchTodos]);
    yield put(fetchTodosSucceeded(data.val()));
  } catch (error) {
    yield put(fetchTodosFailed(error));
  }
}

export function* watchAddTodo() {
  yield takeEvery(ADD_TODO_REQUESTED, addTodo);
}

export function* watchEditTodo() {
  yield takeEvery(EDIT_TODO_REQUESTED, editTodo);
}

export function* watchDeleteTodo() {
  yield takeEvery(DELETE_TODO_REQUESTED, deleteTodo);
}

export function* watchFetchTodos() {
  yield takeEvery(FETCH_TODOS_REQUESTED, fetchTodos);
}
