import React from 'react';
import { createRoot } from 'react-dom/client';

import { TwitterBody } from './body';
import { Nav } from './nav';

function App () {
  return (
    <main className="min-h-screen text-neutral-200 relative w-full mx-auto flex items-start container">
      <TwitterBody />
      <Nav />
    </main>
  );
}

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);