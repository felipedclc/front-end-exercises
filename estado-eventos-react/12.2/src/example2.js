/* Faça todos os seus elementos componentes do formulário ficarem 100% controlados.
Faça um event handler genérico para lidar com eles. */

import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      age: '',
      anecdote: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Nome:
            <input
              name="name"
              type="text"
              onChange={ this.handleChange }
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              type="email"
              onChange={ this.handleChange }
            />
          </label>
          <label>
            Idade:
            <select
              name="age"
              defaultValue=""
              onChange={ this.handleChange }
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>
          <label>
            Anedota:
            <textarea
              name="anecdote"
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;