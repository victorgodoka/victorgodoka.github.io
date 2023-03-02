import React from 'react';
import ReactDOM from 'react-dom';

import { TwitterBody } from './body';
import { Nav } from './nav';

function App() {
  return (
    <>
      <TwitterBody />
      <Nav />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));