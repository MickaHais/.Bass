import React, { useState } from 'react';

const Aside = ({ onSelectSong }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAside = () => {
    setIsOpen(!isOpen);
  };

  const songs = [
    'Bad Bunny - DAKITI',
    'PLK - Un peu de haine',
    'Ninho - Mamacita',
    'Migos - Narcos',
    'Dalida - Paroles paroles',
    'Migos - Narcos',
    'Rema - Charm',
    'Ozuna - Se Preparó',
    'Green Montana - bissap',
    'Hamza - Murder',
  ];

  return (
    <div className={`drop-shadow-[0_0px_10px_rgba(236,60,76,1)] rounded-b-lg fixed right-0 top-0 h-full ${isOpen ? 'w-80' : 'w-10'} bg-white p-10 shadow-lg transition-width duration-300`}>
      <div className="text-right mb-4">
        <button onClick={toggleAside} className="text-orange-500 font-bold text-2xl">
          {isOpen ? '→' : '←'}
        </button>
      </div>
      {isOpen && (
        <>
          <h2 className="text-orange-500 font-bold text-lg mb-4">Musiques</h2>
          <ul className="space-y-2 flex flex-col space-y-4">
            {songs.map((song, index) => (
              <li 
                key={index} 
                className="text-black font-semibold hover:text-orange-500 transition duration-200 cursor-pointer"
                onClick={() => onSelectSong(song)}
              >
                {song}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Aside;