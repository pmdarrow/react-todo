import reducer from './todos';
import {
  addTodoRequested,
  addTodoSucceeded,
  addTodoFailed,
} from '../actions/todos';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_TODO_REQUESTED', () => {
    let initialState = [];
    let newState = reducer(initialState, addTodoRequested());
    expect(newState).toEqual([]);
  });

  it('should handle ADD_TODO_SUCCEEDED', () => {
    let initialState = [];
    let newState = reducer(initialState, addTodoSucceeded({ id: 'foo' }));
    expect(newState).toEqual([
      {
        id: 'foo',
        value: '',
        completed: false,
      },
    ]);

    initialState = [{ id: 'foo', value: 'fizz', completed: true }];
    newState = reducer(initialState, addTodoSucceeded({ id: 'bar' }));
    expect(newState).toEqual([
      {
        id: 'foo',
        value: 'fizz',
        completed: true,
      },
      {
        id: 'bar',
        value: '',
        completed: false,
      },
    ]);
  });

  it('should handle ADD_TODO_FAILED', () => {
    let initialState = [];
    let newState = reducer(initialState, addTodoFailed());
    expect(newState).toEqual([]);
  });
});
