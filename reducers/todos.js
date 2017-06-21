import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from '../constants/actionTypes';
import update from 'immutability-helper';

let initialState = [{
  id: 0,
  value: '',
  completed: false,
}];

function getIndex(state, action) {
  return state.findIndex(item => item.id === action.payload.id);
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
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

    case EDIT_TODO:
      return update(state, {
        // TODO: May be simpler to use map() instead of immutability-helper
        [getIndex(state, action)]: {
          value: {
            $set: action.payload.value,
          },
        },
      });

    case DELETE_TODO:
      // Ensure there's always at least one todo
      if (state.length > 1) {
        return update(state, {
          $splice: [[getIndex(state, action), 1]],
        });
      }
      return state;

    case TOGGLE_TODO:
      let todoIndex = getIndex(state, action);
      return update(state, {
        [todoIndex]: {
          completed: {
            $set: !state[todoIndex].completed,
          },
        },
      });

    default:
      return state;
  }
}
