import { addTodoRequested, addTodoSucceeded, addTodoFailed } from './todos';
import {
  ADD_TODO_REQUESTED,
  ADD_TODO_SUCCEEDED,
  ADD_TODO_FAILED,
} from '../constants/actionTypes';

describe('todos actions', () => {
  it('should create an ADD_TODO_REQUESTED action', () => {
    expect(addTodoRequested()).toEqual({ type: ADD_TODO_REQUESTED });
  });

  it('should create an ADD_TODO_SUCCEEDED action', () => {
    expect(addTodoSucceeded({ id: 'foo' })).toEqual({
      type: ADD_TODO_SUCCEEDED,
      payload: {
        id: 'foo',
      },
    });
  });

  it('should create an ADD_TODO_FAILED action', () => {
    let error = new Error();
    expect(addTodoFailed(error)).toEqual({
      type: ADD_TODO_FAILED,
      payload: error,
      error: true,
    });
  });
});
