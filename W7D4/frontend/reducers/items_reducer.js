import { RECEIVE_POKE } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POKE:

      const items = {};
      action.poke.items.forEach ( item => {
        items[item.id] = item;
      });

      // newState[items] = items;

      const newState = merge({}, state, items);
      return newState;

    default:
      return state;
  }
};



export default itemsReducer;
