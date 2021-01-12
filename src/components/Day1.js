import logo from '../logo.svg';
import React from 'react'

function Day1() {
  const [name, setName] = React.useState('');

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input
          placeholder="Name please..."
          value={ name }
          onChange={ e => setName(e.target.value) }
        />

        {
          name && name === 'Phyo' ?
          <div>Phyo Master Race =)</div> :
          <div>welp no name guy</div>
        }
      </header>
    </div>
  );
}

export default Day1;
