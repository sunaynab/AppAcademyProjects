import { RECEIVE_POKE } from '../actions/pokemon_actions';
import merge from 'lodash/merge';


const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POKE:
      const ui = {};
      ui.pokeDisplay = action.poke.pokemon.id;
      ui.errors = {};
      ui.loading = {};

      return merge({}, state, ui);


    default:
      return state;
  }


};



export default uiReducer;
