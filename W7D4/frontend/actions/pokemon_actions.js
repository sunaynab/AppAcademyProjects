import {fetchAllPokemon, fetchPoke} from '../util/api_util';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKE = 'RECEIVE_POKE';


//thunk action creator
export const requestAllPokemon = () => dispatch => (
  fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestPoke = (id) => dispatch => (
  fetchPoke(id)
    .then(poke => dispatch(receivePoke(poke)))
);


//action creator
export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const receivePoke = (poke) => {
  return {
    type: RECEIVE_POKE,
    poke
  };
};
