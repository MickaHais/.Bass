import React, { useState } from 'react';

const Aside = ({ onSelectSong, songs }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAside = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={` aside fixed right-0 top-0 h-full  w-${isOpen ? '90' : '10'} bg-white p-10 shadow-lg transition-width duration-300 ${isOpen ? 'drop-shadow-[0_0px_10px_rgba(236,60,76,1)] rounded-b-lg' : ''}`}>
      <div className="text-right mb-4">
        <button onClick={toggleAside} className="text-orange-500 font-bold text-2xl">
          {isOpen ? '→' : '←'}
        </button>
      </div>
      {isOpen && (
        <>
          <h2 className="text-orange-500 text-center font-bold text-lg mb-4">Musiques</h2>
          <ul className="space-y-4">
            {songs.map((song, index) => (
      
              <li key={index} className="flex items-center space-x-2 text-black font-semibold " >
              <span className=' font-bold text-3xl mr-5 cursor-pointer'>+</span>
              <span className='  text-xl   hover:text-orange-500 transition duration-200 cursor-pointer' onClick={() => onSelectSong(song)}>{song.title}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Aside;
