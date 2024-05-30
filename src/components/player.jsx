import React, { useState, useRef } from 'react';

const prevIcon = "./src/assets/avant.png";
const pauseIcon = "./src/assets/pause.png";
const nextIcon = "./src/assets/apres.png";
const Repeat = "./src/assets/Repeat.png";
const playIcon = "./src/assets/play.png";
const songFiles = ["/src/songs/chargé.mp3", "/src/songs/autre.mp3"]; 

const MusicPlayerCard = ({ songTitle }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Indice de la chanson actuelle
  const audioRef = useRef(new Audio(songFiles[currentSongIndex])); // Référence à l'élément audio

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause(); 
    } else {
      audioRef.current.play(); 
    }
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    const newIndex = (currentSongIndex + 1) % songFiles.length; // Passer à la chanson suivante
    setCurrentSongIndex(newIndex);
    audioRef.current.src = songFiles[newIndex];
    if (isPlaying) {
      audioRef.current.play(); // Si la musique est en cours de lecture, jouer la nouvelle chanson
    }
  };

  const playPrevSong = () => {
    const newIndex = (currentSongIndex - 1 + songFiles.length) % songFiles.length; // Passer à la chanson précédente
    setCurrentSongIndex(newIndex);
    audioRef.current.src = songFiles[newIndex];
    if (isPlaying) {
      audioRef.current.play(); // Si la musique est en cours de lecture, jouer la nouvelle chanson
    }
  };

  return (
    <div className="flex flex-col items-center justify-center fixed top-1/4 left-1/4">
      <div className="drop-shadow-[0_0px_10px_rgba(236,60,76,1)] bg-white p-8 rounded-lg shadow-lg relative w-96">
        <div className="flex justify-between items-center mb-4">
          <button className="bg-white">
            <img src={Repeat} alt="Repeat" className="h-6 w-6" />
          </button>
        </div>
        <div className="mb-4">
          <div className="bg-gradient-to-r from-yellow-400 to-red-500 h-64 w-64 rounded-lg mx-auto"></div>
        </div>
        <h2 className="text-center font-bold text-2xl mb-2">{songTitle}</h2>
        <div className="flex justify-center items-center mb-4">
          <button className="bg-white" onClick={playPrevSong}>
            <img src={prevIcon} alt="Previous" className="h-8 w-8" />
          </button>
          <button className="bg-white mx-4" onClick={togglePlayPause}>
            <img src={isPlaying ? pauseIcon : playIcon} alt={isPlaying ? "Pause" : "Play"} className="h-8 w-8" />
          </button>
          <button className="bg-white" onClick={playNextSong}>
            <img src={nextIcon} alt="Next" className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerCard;
