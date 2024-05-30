import React, { useState } from 'react';
import Header from './components/header';
import Aside from './components/aside';
import MusicPlayerCard from './components/player';

const songs = [
  { title: 'Bad Bunny - DAKITI', file: "/src/songs/bad.mp3" },
  { title: 'PLK - Un peu de haine', file: "/src/songs/plk.mp3" },
  { title: 'Ninho - Mamacita', file: "/src/songs/ni.mp3" },
  { title: 'Kaaris - Chargé', file: "/src/songs/chargé.mp3" },
];

function App() {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSelectSong = (song) => {
    setSelectedSong(song);
  };

  const playNextSong = () => {
    const currentIndex = songs.findIndex(s => s.title === selectedSong.title);
    const nextIndex = (currentIndex + 1) % songs.length;
    setSelectedSong(songs[nextIndex]);
  };

  const playPrevSong = () => {
    const currentIndex = songs.findIndex(s => s.title === selectedSong.title);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setSelectedSong(songs[prevIndex]);
  };

  return (
    <div className="App flex">
      <Header />
      <Aside onSelectSong={handleSelectSong} songs={songs} />
      <MusicPlayerCard songs={songs} song={selectedSong} onNext={playNextSong} onPrev={playPrevSong} />
    </div>
  );
}

export default App;
