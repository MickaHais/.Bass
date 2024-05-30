import React, { useState, useRef, useEffect } from 'react';

const prevIcon = "./src/assets/avant.png";
const pauseIcon = "./src/assets/pause.png";
const nextIcon = "./src/assets/apres.png";
const Repeat = "./src/assets/Repeat.png";
const playIcon = "./src/assets/play.png";

const MusicPlayerCard = ({ songs, song, onNext, onPrev }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(songs.findIndex(s => s.title === song?.title));
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio(song ? song.file : ''));

  useEffect(() => {
    const index = songs.findIndex(s => s.title === song?.title);
    if (index !== -1) {
      setCurrentSongIndex(index);
      audioRef.current.src = songs[index].file;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [song]);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const playNextSong = () => {
    onNext();
    const newIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(newIndex);
    audioRef.current.src = songs[newIndex].file;
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const playPrevSong = () => {
    onPrev();
    const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(newIndex);
    audioRef.current.src = songs[newIndex].file;
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center absolute bot-1/4 top-1/4 left-1/4">
      <div className="drop-shadow-[0_0px_10px_rgba(236,60,76,1)] bg-white p-8 rounded-lg shadow-lg relative w-96">
        <div className="flex justify-between items-center mb-4">
          <button className="bg-white">
            <img src={Repeat} alt="Repeat" className="h-6 w-6" />
          </button>
        </div>
        <div className="mb-4">
          <div className="bg-gradient-to-r from-yellow-400 to-red-500 h-64 w-64 rounded-lg mx-auto"></div>
        </div>
        <h2 className="text-center text-black">{song ? song.title : 'Selectionnez une chanson'}</h2>
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
        <div className="w-full mb-4">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full appearance-none bg-gradient-to-r from-yellow-400 to-red-500 rounded-full h-2 outline-none slider-thumb"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerCard;