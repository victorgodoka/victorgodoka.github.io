import React, { useState, useEffect, useRef } from 'react';
import moment from '../utils/moment';
import { trendingMock, whoToFollowMock } from '../mocks'

const Verified = ({ verificated, bluetwitter }) => (verificated || bluetwitter) ? <div className="relative">
  <i className={"fa-solid fa-certificate font-md" + (verificated ? " text-[#1d9bf0]" : bluetwitter ? " text-neutral-700" : "")}></i>
  <i className="fa-solid fa-check absolute top-[8px] bottom-0 left-[3px] right-0 text-[.6rem] z-10 font-sm font-neutral-900"></i>
</div> : ""

const Trending = () => {
  return <div id="trending" className="w-full max-w-[348px] mx-4 my-1 mb-3 hidden lg:block">
    <div className="flex items-center justify-center relative rounded-full bg-neutral-800 px-4 py-1">
      <i className="w-10 text-xl fa-solid fa-magnifying-glass text-neutral-500"></i>
      <input
        placeholder="Pesquisar"
        className="bg-transparent border-none rounded-lg py-3 pr-4 w-full outline-none text-neutral-500 placeholder-neutral-500"
      />
    </div>
    <div className="flex flex-col bg-neutral-900 rounded-3xl mt-4">
      <p className="font-semibold text-xl px-5 mb-4 pt-3">What's happening</p>
      {trendingMock.map(({ location, trend, trendingWith, id }, i) => <div className="hover:bg-neutral-700 py-2 px-5" key={`trending__${id}__${i}`}>
        <p className="text-neutral-500 text-sm">Trending in {location}</p>
        <p className="text-neutral-100 text-md font-semibold">{trend}</p>
        {trendingWith ? <p className="text-neutral-500 text-sm">Trending with <span className="text-[#1d9bf0]">{trendingWith}</span></p> : ""}
      </div>)}
      <div className="hover:bg-neutral-700 px-5 rounded-b-3xl py-3">
        <span className="text-[#1d9bf0] font-semibold">Show more</span>
      </div>
    </div>

    <div className="flex flex-col bg-neutral-900 rounded-3xl mt-4">
      <p className="font-semibold text-xl px-5 mb-4 pt-3">Who to Follow</p>
      {whoToFollowMock.map(({name, handle, avatar, bluetwitter, verificated, isFollowing, id}, i) => <div className="hover:bg-neutral-700 py-2 px-5 flex items-center" key={`whotofollow__${id}__${i}`}>
        <img src={avatar} className="mr-2 rounded-full h-12" alt="random pic from api, twitteravatar" />
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center"><span className="font-bold mr-1 text-sm">{name}</span> <Verified bluetwitter={bluetwitter} verificated={verificated} /></div>
          <span className="text-neutral-500 text-sm">@{handle}</span>
        </div>
        {
          isFollowing
            ? <button className="text-white bg-transparent border-white border rounded-3xl font-bold px-5 py-2 text-sm">Following</button>
            : <button className="text-neutral-800 bg-white border-white border rounded-3xl font-bold px-5 py-2 text-sm">Follow</button>
        }
      </div>)}
      <div className="hover:bg-neutral-700 px-5 rounded-b-3xl py-3">
        <span className="text-[#1d9bf0] font-semibold">Show more</span>
      </div>
    </div>
  </div>
}

const Timeline = () => {
  const [twitts, setTwitts] = useState([]);

  useEffect(() => {
    fetch('https://6164cc1b09a29d0017c88e7a.mockapi.io/twitter')
      .then(res => res.json())
      .then(data => setTwitts(data))
  }, [])

  return twitts.map(({ date, name, avatar, handle, twitt, likes, retwitts, impression, replies, id }) => <div key={id} className="w-full flex items-start space-x-2 border-b border-white/10 p-4">
    <img src={avatar} className="mr-2 rounded-full h-12" alt="random pic from api, twitteravatar" />
    <div className="w-full flex flex-col">
      <div>
        <span className="font-bold mr-1">{name}</span>
        <span className="text-neutral-500">@{handle} • {moment(date).format('LL')}</span>
      </div>
      <p className="mb-2">{twitt.slice(0, 288)}</p>
      <div className="grid grid-cols-5 items-center text-neutral-600">
        <div><i className="fa-solid fa-reply"></i> <span>{replies}</span></div>
        <div><i className="fa-solid fa-repeat"></i> <span>{retwitts}</span></div>
        <div><i className="fa-regular fa-heart"></i> <span>{likes}</span></div>
        <div><i className="fa-solid fa-chart-column"></i> <span>{impression}</span></div>
        <div><i className="fa-solid fa-arrow-up-from-bracket"></i></div>
      </div>
    </div>
  </div>)
}

const NewTwitt = () => {
  const [focused, setFocused] = useState(false);
  const twitt = useRef(null);

  return <div id="whatshappening" className="hidden lg:flex w-full items-start border-b border-white/10 p-4">
    <img src={'https://pbs.twimg.com/profile_images/1625242467015577601/m1F4rwkB_400x400.png'} className="mr-4 rounded-full h-12" alt="random pic from api, twitteravatar" />
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full">
        <input ref={twitt} onFocus={() => setFocused(true)} type="text" placeholder="What's happening?" className={"border-0 outline-none bg-transparent whitespace-pre-wrap border-white/10 w-full py-3 relative overflow-hidden placeholder-neutral-500 text-neutral-200 text-xl"} />
        {focused && <div className="py-4 text-[#1d9bf0] border-b border-1 border-white/10 font-bold text-sm">
          <i className="fa-solid fa-earth-americas"></i> <span>Everyone can reply</span>
        </div>}
      </div>
      <div className="flex items-center space-x-4 p-3 text-[#1d9bf0]">
        <i className="fa-solid fa-image"></i>
        <i className="fa-solid fa-images"></i>
        <i className="fa-solid fa-square-poll-horizontal"></i>
        <i className="fa-regular fa-face-smile"></i>
        <i className="fa-solid fa-calendar-day"></i>
        <i className="fa-solid fa-location-dot opacity-50"></i>
      </div>
    </div>
  </div>
}

export function TwitterBody() {
  return (<div className='w-full sm:mb-0 sm:ml-[90px] lg:ml-[260px] lg:flex lg:items-start lg:justify-start'>
    <div className="w-full mb-14 lg:border-r lg:border-white/10">
      <div className="mb-14 w-full">
        <i className="py-3 mx-auto block text-center sm:hidden text-2xl fa-brands fa-twitter"></i>
        <p className="font-bold hidden sm:inline-block p-4 text-xl">Home</p>
        <div className="text-sm font-medium text-center border-b border-white/10 text-gray-400 w-full">
          <ul className="flex flex-nowrap -mb-px justify-center w-full">
            <li className="mr-2 w-full text-center">
              <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-300 hover:text-gray-300">For You</a>
            </li>
            <li className="mr-2 w-full text-center">
              <a href="#" className="inline-block p-4 border-b-2 rounded-t-lg active text-blue-500 border-blue-500" aria-current="page">Following</a>
            </li>
          </ul>
        </div>
        <NewTwitt />
        <Timeline />
      </div>
    </div>
    <Trending />
  </div>
  );
}

