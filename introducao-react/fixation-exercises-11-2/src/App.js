import Image from './image';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    console.log(this);
    return (
      <div>
      < Image source={'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'} 
        alternativeText= {'Cute cat staring'}
         />
    </div>
    ); 
  }
} 

export default App;
