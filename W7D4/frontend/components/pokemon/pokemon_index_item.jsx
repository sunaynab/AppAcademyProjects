import React from 'react';
import { Link } from 'react-router-dom';

export const PokemonIndexItem = ({pokemon}) => {

    const linkName = `/pokemon/${pokemon.id}`;

    return (
      <li className='index-line'>
        {pokemon.id}
        <Link to={linkName}>
          <img height='30' src={pokemon.image_url} />
          {pokemon.name}
        </Link>
      </li>
    );
};
