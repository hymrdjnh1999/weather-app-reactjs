import React from 'react';
// import logo from './logo.svg';
import './assets/scss/App.scss';
import { Weather } from './weather/Home';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

function App() {
  initializeIcons();
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
