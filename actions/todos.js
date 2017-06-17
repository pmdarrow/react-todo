import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from '../constants/actionTypes';

let nextId = 1;

export function addTodo() {
  return {
    type: ADD_TODO,
    id: nextId++,
  };
}

export function editTodo(id, value) {
  return {
    type: EDIT_TODO,
    id,
    value,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}
