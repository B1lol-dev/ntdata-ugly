import { useState, useEffect, ReactElement } from "react";
import axios from "axios";

import { IAlbum } from "../constants/interfaces";
import { API_URL } from "../constants/constants";

export const Albums = (): ReactElement => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(`${API_URL}/albums`);
        setAlbums(response.data);
      } catch (err) {
        setError("Error fetching albums!");
        console.error(err);
      }
    };

    fetchAlbums();
  }, []);

  if (error) {
    return (
      <div className="text-center p-10 text-3xl text-red-600">{error}</div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-6 text-center text-green-700 underline decoration-wavy decoration-pink-500 underline-offset-8">
        🖼️ ALBUMS LIST 🖼️
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {albums.map((album) => (
          <div
            key={album.id}
            className="p-4 bg-gradient-to-r from-purple-200 to-blue-200 rounded-lg shadow-lg border-4 border-orange-400 transform hover:scale-105 transition-transform"
          >
            <h3 className="text-md font-bold text-purple-700 mb-2 bg-green-100 p-2 rounded-md text-center truncate">
              {album.title.toUpperCase()}
            </h3>
            <div className="mt-2 flex justify-between items-center">
              <span className="inline-block bg-red-200 text-blue-800 p-1 rounded-full text-sm font-bold">
                Album ID: {album.id}
              </span>
              <span className="inline-block bg-blue-200 text-red-800 p-1 rounded-full text-sm font-bold">
                User ID: {album.userId}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
