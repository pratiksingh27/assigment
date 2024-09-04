import React from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <div></div> {/* Left side empty */}
      <div>
        <Tabs />
        <hr></hr>
        <Gallery />
        <hr />
      </div>
    </div>
  );
}

export default App;