import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import TrackCard from './components/TrackCard';
import MusicPlayer from './components/MusicPlayer';
import { searchTracks } from './services/deezerService';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [error, setError] = useState(null); // State to store error messages

  const handleSearch = async (query) => {
    setError(null);  // Reset error before a new search
    try {
      const results = await searchTracks(query);
      setTracks(results);
    } catch (error) {
      setError('Failed to fetch tracks. Please try again.');
    }
  };

  const handlePlayTrack = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <SearchBar onSearch={handleSearch} />
      
      {error && (  // Conditionally render error message
        <div className="mt-4 text-red-600 text-center">
          {error}
        </div>
      )}
      
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} onPlay={handlePlayTrack} />
        ))}
      </div>

      {currentTrack && <MusicPlayer track={currentTrack} />}
    </div>
  );
};

export default App;

