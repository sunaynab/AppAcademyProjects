import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route, Link } from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () {
    this.props.requestAllPokemon();
  }

  render() {
    // const { pokemon } = this.props;
    const pokees = this.props.pokemon.map((poke) => (
        <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));


    return (
      <div>
        <section className="pokedex">
          <ul>
            {pokees}
          </ul>
        </section>
        <section className="pokeview">

        </section>
      </div>
    );
  }

}

export default PokemonIndex;
