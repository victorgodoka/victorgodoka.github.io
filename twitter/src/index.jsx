import React from 'react';
import { createRoot } from 'react-dom/client';

import { TwitterBody } from './body';
import { Nav } from './nav';

function App () {
  return (
    <main className="min-h-screen bg-black text-neutral-200 relative">
      <TwitterBody />
      <Nav />
    </main>
  );
}

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);