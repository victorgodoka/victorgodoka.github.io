import React from 'react';

export function Nav() {
  return (
    <nav className="z-10 fixed sm:px-3 lg:px-5 bottom-0 sm:top-0 sm:bottom-[unset] sm:border-t-0 sm:border-r sm:w-[89px] lg:w-[260px] sm:flex sm:flex-col sm:mt-0 sm:h-screen w-full mt-12 bg-black grid grid-cols-4 items-center h-14 border-t border-white/10">
      <i className="m-3 hidden sm:block text-2xl fa-brands fa-twitter"></i>
      <p className="lg:w-full flex items-center space-x-1 justify-center sm:justify-start"><i className="m-3 text-2xl fa-solid fa-house"></i> <span className="hidden lg:inline-block">Home</span></p>
      <i className="m-3 text-2xl text-center sm:text-start fa-solid fa-magnifying-glass lg:hidden"></i>
      <p className="lg:w-full lg:flex items-center space-x-1 hidden"><i className="m-3 text-2xl fa-solid fa-hashtag"></i> <span>Explore</span></p>
      <p className="lg:w-full flex items-center space-x-1 justify-center sm:justify-start"><i className="m-3 text-2xl fa-regular fa-bell"></i> <span className="hidden lg:inline-block">Notifications</span></p>
      <p className="lg:w-full flex items-center space-x-1  justify-center sm:justify-start"><i className="m-3 text-2xl fa-regular fa-envelope"></i> <span className="hidden lg:inline-block">Messages</span></p>
      <p className="lg:w-full items-center space-x-1 hidden sm:flex"><i className="m-3 text-2xl fa-regular fa-bookmark"></i> <span className="hidden lg:inline-block">Bookmarks</span></p>
      <p className="lg:w-full items-center space-x-1 hidden sm:flex"><i className="m-3 text-2xl fa-regular fa-user"></i> <span className="hidden lg:inline-block">Profile</span></p>
      <p className="lg:w-full flex items-center space-x-1">
        <i className="m-3 hidden sm:inline-flex items-center justify-center text-xl text-center w-8 h-8 fa-solid fa-ellipsis border-2 rounded-full"></i> 
        <span className="hidden lg:inline-block">More</span>
      </p>
      <div className="m-3 hidden sm:inline-flex sm:mx-auto items-center justify-center text-2xl w-12 h-12 lg:w-full relative bg-[#1d9bf0] rounded-full">
        <span className="lg:hidden absolute top-[-2px] left-[7px] text-[1rem]">+</span>
        <i className="lg:hidden fa-solid fa-feather text-xl"></i>
        <span className="text-white font-bold text-xl hidden lg:inline">Tweet</span>
      </div>
      <div className="hidden sm:inline-flex lg:hidden mt-auto mb-3">
        <img src={'https://pbs.twimg.com/profile_images/1625242467015577601/m1F4rwkB_400x400.png'} className="mr-2 rounded-full h-12" alt="random pic from api, twitteravatar" />
      </div>
    </nav>
  );
}

