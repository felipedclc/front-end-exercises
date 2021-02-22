import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;
        // destruturando o array de objetos pokemon e colocando pokemon como props(nome/parametro)
        return (
            <div className="pokemon">
                <div>
                <p>{name}</p>
                <p>{type}</p>
                <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
            </div>
                <img src={image} alt={`image ${image}`}></img>
            </div>
        );
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image: PropTypes.string
    }).isRequired,
};

export default Pokemon;
