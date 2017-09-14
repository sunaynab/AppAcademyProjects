import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestAllPokemon();
  }

  render() {
    // const { pokemon } = this.props;
    const pokees = this.props.pokemon.map((poke, idx) => (
      <li key={`poke${idx}`} className='index-line'>
        Name: {poke.name}
        <br/>
        <img height='150' src={poke.image_url} />
      </li>
    ));


    return (
    <ul>
      {pokees}
    </ul>
    );
  }

}

export default PokemonIndex;
