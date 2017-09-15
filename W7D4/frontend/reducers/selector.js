import values from 'lodash/has';

export const selectAllPokemon = state => (
  Object.values(state.entities.pokemon)
);

export const selectPoke = state => (
  state.entities.pokemon[state.ui.pokeDisplay]
);

export const selectItems = state => (
  Object.values(state.entities.items)
);

export const selectItem = (state, ownProps) => (
  state.entities.items[ownProps.match.params.itemId]
);
