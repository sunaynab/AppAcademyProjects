import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, action.pokemon, state);
    case RECEIVE_POKE:
    debugger;
      const newState = merge({}, state);
      const currentPoke = action.poke.pokemon;

      currentPoke.item_ids = [];
      action.poke.items.forEach ( item => {
        currentPoke.item_ids.push(item.id);
      });

      newState[currentPoke.id] = currentPoke;

      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
