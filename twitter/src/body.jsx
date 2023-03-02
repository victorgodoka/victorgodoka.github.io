import React from 'react';

export function TwitterBody () {
  return (
    <div id="twitt-body">
      <div className="flex">
        <img src="https://picsum.photos/48" className="rounded" alt="random pic from api, twitteravatar" />
        <div className="flex">
          <div>
            <span className="font-bold mx-1">lorem ipsum</span>
            <span className="text-neutral-500">@loremipsum • 16min</span>
          </div>
        </div>
      </div>
    </div>
  );
}

