import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        return (
            <div className="pokedex">
                {this.props.xablau.map(pokemon => < Pokemon key={pokemon.id} pokemon={pokemon} />)}
            </div>
        );
    }
}

export default Pokedex;