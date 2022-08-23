import React, { useState } from 'react';
import { Datasets } from './Types';
import DatasetSelector from './DatasetSelector';
import DatasetDisplayer from './DatasetDisplayer';
import logo from './logo.svg';
import './App.css';

function App() {
  const [dataset, setDataset] = useState<Datasets>('Cars');
  const foo = () => 'foozzzle'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          {foo()}
        </div>
        <DatasetSelector dataset={dataset} onChange={setDataset}/>
        <DatasetDisplayer dataset={dataset} />
      </header>
    </div>
  );
}

export default App;
