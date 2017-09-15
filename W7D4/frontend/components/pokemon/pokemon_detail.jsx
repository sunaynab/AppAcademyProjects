import React from 'react';
import ItemDetailContainer from './item_detail_container';
import { Route } from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log('mounted');
    
    this.props.requestPoke(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newprops) {
    if (this.props.match.params.pokemonId !== newprops.match.params.pokemonId)
    this.props.requestPoke(newprops.match.params.pokemonId);
  }

  render() {
    const poke = this.props.poke;

    if (this.props.poke === undefined) {

      return null;
    } else {

        return (
            <div>
              <img src={poke.image_url} />
              <h2>{poke.name}</h2>
              <h3>Type: {poke.type}</h3>
              <h3>Attack: {poke.attack}</h3>
              <h3>Defense: {poke.defense}</h3>
              <h3>Moves: {poke.moves.join(', ')}</h3>

              <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />

            </div>
        );
    }}

}

export default PokemonDetail;
