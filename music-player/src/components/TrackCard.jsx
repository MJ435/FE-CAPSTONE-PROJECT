import React from 'react';

const TrackCard = ({ track, onPlay }) => (
  <div className="flex items-center space-x-4 p-4 border-b">
    <img src={track.album.cover} alt={track.album.title} className="w-16 h-16 rounded" />
    <div>
      <h3 className="text-lg font-semibold">{track.title}</h3>
      <p className="text-sm text-gray-500">{track.artist.name}</p>
      <button onClick={() => onPlay(track)} className="text-blue-500 hover:underline">
        Play Preview
      </button>
    </div>
  </div>
);

export default TrackCard;
