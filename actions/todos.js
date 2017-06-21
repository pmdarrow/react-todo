import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from '../constants/actionTypes';
import { createAction } from 'redux-actions';

let nextId = 1;

export const addTodo = createAction(ADD_TODO, () => ({id: nextId++}));
export const editTodo = createAction(EDIT_TODO);
export const deleteTodo = createAction(DELETE_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
