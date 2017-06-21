import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import {
  ADD_TODO_REQUESTED,
  EDIT_TODO_REQUESTED,
  DELETE_TODO_REQUESTED,
} from '../constants/actionTypes';

function getIndex(state, action) {
  return state.findIndex(item => item.id === action.payload.id);
}

export default handleActions(
  {
    ADD_TODO_SUCCEEDED: (state, action) => {
      return update(state, {
        $push: [
          {
            id: action.payload.id,
            value: '',
            completed: false,
          },
        ],
      });
    },

    EDIT_TODO_REQUESTED: (state, action) => {
      return update(state, {
        [getIndex(state, action)]: {
          $set: action.payload,
        },
      });
    },

    DELETE_TODO_REQUESTED: (state, action) => {
      return update(state, {
        $splice: [[getIndex(state, action), 1]],
      });
    },

    FETCH_TODOS_SUCCEEDED: (state, action) => {
      return Object.keys(action.payload || {}).map(key => ({
        id: key,
        ...action.payload[key],
      }));
    },
  },
  []
);
