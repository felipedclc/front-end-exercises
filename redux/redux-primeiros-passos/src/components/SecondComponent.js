import React from 'react';
import { connect } from 'react-redux';

class SecondComponent extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.myFirstState.map(element => (
            <p>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

// mapStateToProps, mapeia o estado da store para uma prop (myFirstState)
const mapStateToProps = state => ({
  myFirstState: state.myReducer.state});

            // connect(recebe, envia)(componente)
export default connect(mapStateToProps, null)(SecondComponent);
                                              // componente que deverá ser conectado.