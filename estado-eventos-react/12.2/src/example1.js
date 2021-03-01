/* Crie um formulário com um campo select , dois inputs de tipo diferente, 
uma textarea e faça de um deles um componente controlado, ou seja, 
elementos do formulário controlados pelo Estado
 */
import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
    };
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
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
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>
          <label>
            Anedota:
            <textarea name="anecdote" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;