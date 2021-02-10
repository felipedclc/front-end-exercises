import './App.css';
import React from 'react';

const element = ( <h1 className="helloWorld">Hello World!</h1> )

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {element}
        <p>This is my first app React!</p>
      </div>
    );
  }
}

/*function App() {
  return (
    <div className="App">
      {element}
      {/* <h1>Hello World!</h1> */
      /*<p>This is my first app React!</p>
    </div>
  );
}*/

export default App;
