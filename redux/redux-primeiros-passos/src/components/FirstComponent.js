import React from 'react';
import { connect } from 'react-redux';
import { newAction } from './actions';

class FirstComponent extends React.Component {
  constructor(props) {
    super(props);
    // caso haja algum estado o qual não necessite navegar entre outros componentes,
    // podemos declará-lo internamente.
    this.state = { anyState: '' };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={event => this.setState({ anyState: event.target.value })}
        />
        <button onClick={() => this.props.myFirstDispatch(this.state.anyState)}>
          Executar qualquer tarefa
        </button>
      </div>
    );
  }
}

// mapeando o dispatch(disparo) para o store com a prop(myFirstDispatch)
const mapDispatchToProps = dispatch => ({ 
  myFirstDispatch: state => dispatch(newAction(state))} // dispara uma action
  );

// conectando a função com o componente
export default connect(null, mapDispatchToProps)(FirstComponent); 
// se for usar apenas 1 parâmetro, o outro deve ser null

// export default connect(mapStateToProps, mapDispatchToProps)(Component)
