import React, { useState } from 'react';

export function Deck () {
  const [tab, setTab] = useState(0)
  return (
    <div className="w-full">
      <ul className="flex flex-wrap justify-end text-sm font-medium text-center border-b border-white/20 text-neutral-400">
        <li className="mr-2 border-white/20 border border-b-0"> 
          <button aria-current="page" className={"inline-block py-4 px-8" + (tab === 0 ? ' active text-blue-500' : ' text-neutral-300')}>Main</button>
        </li>
        <li className="mr-2 border-white/20 border border-b-0">
          <button className={"inline-block py-4 px-8" + (tab === 1 ? ' active text-blue-500' : ' text-neutral-300')}>Extra</button>
        </li>
        <li className="mr-2 border-white/20 border border-b-0">
          <button className={"inline-block py-4 px-8" + (tab === 2 ? ' active text-blue-500' : ' text-neutral-300')}>Side</button>
        </li>
      </ul>

    </div>
  );
}
