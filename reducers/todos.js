import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from '../constants/actionTypes';

let initialState = [
  {
    id: 0,
    value: '',
    completed: false,
  },
];

function getIndex(state, action) {
  return state.findIndex(item => item.id === action.payload.id);
}

export default handleActions(
  {
    ADD_TODO: (state, action) => {
      // Only add a todo if there are none or the last one isn't empty
      if (state.length === 0 || state[state.length - 1].value !== '') {
        return update(state, {
          $push: [
            {
              id: action.payload.id,
              value: '',
              completed: false,
            },
          ],
        });
      }
      return state;
    },

    EDIT_TODO: (state, action) => {
      return update(state, {
        [getIndex(state, action)]: {
          $set: action.payload
        }
      });
    },

    DELETE_TODO: (state, action) => {
      // Ensure there's always at least one todo
      if (state.length > 1) {
        return update(state, {
          $splice: [[getIndex(state, action), 1]],
        });
      }
      return state;
    },

    },
  },
  initialState
);
