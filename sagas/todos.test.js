import { call, put } from 'redux-saga/effects';
import { addTodoSucceeded, addTodoFailed } from '../actions/todos';
import { addTodo } from './todos';
import api from '../services/api';

describe('todos sagas', () => {
  it('should call the addTodo API function succesfully', () => {
    const gen = addTodo();
    expect(gen.next().value).toEqual(call([api, api.addTodo]));
    expect(gen.next('mockId').value).toEqual(
      put(addTodoSucceeded({ id: 'mockId' }))
    );
    expect(gen.next().done).toBe(true);
  });

  it('should call the addTodo API function and handle failure', () => {
    const gen = addTodo();
    expect(gen.next().value).toEqual(call([api, api.addTodo]));
    expect(gen.throw('mock error').value).toEqual(
      put(addTodoFailed('mock error'))
    );
    expect(gen.next().done).toBe(true);
  });
});
