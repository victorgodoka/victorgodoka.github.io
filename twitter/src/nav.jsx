import React from 'react';

export function Nav () {
  return (
    <nav className="z-10 fixed bottom-0 w-full mt-12 bg-black grid grid-cols-4 items-center h-14 border-t sm:hidden">
      <i className="text-2xl text-center fa-solid fa-house"></i>
      <i className="text-2xl text-center fa-solid fa-magnifying-glass"></i>
      <i className="text-2xl text-center fa-regular fa-bell"></i>
      <i className="text-2xl text-center fa-regular fa-envelope"></i>
    </nav>
  );
}

