import * as types from '../constants/actionTypes';
import { createAction } from 'redux-actions';

export const addTodoRequested = createAction(types.ADD_TODO_REQUESTED);
export const addTodoSucceeded = createAction(types.ADD_TODO_SUCCEEDED);
export const addTodoFailed = createAction(types.ADD_TODO_FAILED);

export const editTodoRequested = createAction(types.EDIT_TODO_REQUESTED);
export const editTodoSucceeded = createAction(types.EDIT_TODO_SUCCEEDED);
export const editTodoFailed = createAction(types.EDIT_TODO_FAILED);

export const deleteTodoRequested = createAction(types.DELETE_TODO_REQUESTED);
export const deleteTodoSucceeded = createAction(types.DELETE_TODO_SUCCEEDED);
export const deleteTodoFailed = createAction(types.DELETE_TODO_FAILED);

export const fetchTodosRequested = createAction(types.FETCH_TODOS_REQUESTED);
export const fetchTodosSucceeded = createAction(types.FETCH_TODOS_SUCCEEDED);
export const fetchTodosFailed = createAction(types.FETCH_TODOS_FAILED);
