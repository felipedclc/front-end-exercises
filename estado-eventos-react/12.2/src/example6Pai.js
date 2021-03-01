/* Faça dois de seus campos serem componentes filhos do seu componente de formulário. 
Garanta que seu estado ainda pertence ao componente pai. */

import React, { Component } from 'react'
import PersonalFieldset from './PersonalFieldset';
import DataFieldset from './DataFieldset';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
      terms: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <PersonalFieldset handleChange={ this.handleChange } />
          <DataFieldset handleChange={ this.handleChange } />
          <label>
            <input
              type="checkbox"
              name="terms"
              onChange={ this.handleChange }
            />
            Concordo com termos e acordos
          </label>
        </form>
      </div>
    );
  }
}

export default Form;