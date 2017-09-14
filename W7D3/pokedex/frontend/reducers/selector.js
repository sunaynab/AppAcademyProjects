import values from 'lodash/has';

export const selectAllPokemon = state => (
  Object.values(state.entities.pokemon)
);
