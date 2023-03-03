import React, { useState, useEffect } from 'react';
import moment from '../../js/moment';

const mock = [{
  pic: "https://picsum.photos/48",
  name: ""
}]

export function TwitterBody() {
  const [twitts, setTwitts] = useState([]);

  useEffect(() => {
    fetch('https://6164cc1b09a29d0017c88e7a.mockapi.io/twitter')
      .then(res => res.json())
      .then(data => setTwitts(data))
  }, [])

  return (<>
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px justify-center">
        <li className="mr-2">
          <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">For You</a>
        </li>
        <li className="mr-2">
          <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Following</a>
        </li>
      </ul>
    </div>
    <div id="twitt-body" className="mb-14">
      {twitts.map(({ date, name, avatar, handle, twitt, likes, retwitts, impression, replies, id }) => <div key={id} className="flex items-start space-x-2 border-b border-white/50 p-4">
        <img src={avatar} className="mr-2 rounded-full h-12" alt="random pic from api, twitteravatar" />
        <div className="flex flex-col">
          <div>
            <span className="font-bold mr-1">{name}</span>
            <span className="text-neutral-500">@{handle} • {moment(date).format('LL')}</span>
          </div>
          <p className="mb-2">{twitt.slice(0, 288)}</p>
          <div className="grid grid-cols-5 items-center">
            <div><i className="fa-solid fa-reply"></i> <span>{replies}</span></div>
            <div><i className="fa-solid fa-repeat"></i> <span>{retwitts}</span></div>
            <div><i className="fa-regular fa-heart"></i> <span>{likes}</span></div>
            <div><i className="fa-solid fa-chart-column"></i> <span>{impression}</span></div>
            <div><i className="fa-solid fa-arrow-up-from-bracket"></i></div>
          </div>
        </div>
      </div>)}
    </div>
  </>
  );
}

