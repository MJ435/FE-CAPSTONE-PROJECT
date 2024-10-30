import React, { useRef, useState } from 'react';

const MusicPlayer = ({ track }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded shadow-md">
      <div className="flex items-center space-x-4">
        <img src={track.album.cover} alt={track.album.title} className="w-20 h-20 rounded" />
        <div>
          <h3 className="text-xl font-semibold">{track.title}</h3>
          <p className="text-sm text-gray-400">{track.artist.name}</p>
        </div>
        <button onClick={togglePlayPause} className="bg-blue-500 px-4 py-2 rounded">
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
      <audio ref={audioRef} src={track.preview} />
    </div>
  );
};

export default MusicPlayer;
