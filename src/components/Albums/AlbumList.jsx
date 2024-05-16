import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import albumData from "../../assets/data/Albums.json";

const AlbumList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [expandedAlbum, setExpandedAlbum] = useState({});

  const handleReadMore = (e, title) => {
    e.preventDefault();
    setExpandedAlbum({ ...expandedAlbum, [title]: true });
  };

  const handleReadLess = (e, title) => {
    e.preventDefault();
    setExpandedAlbum({ ...expandedAlbum, [title]: false });
  };

  const albums = albumData;

  return (
    <section className="bg-white dark:bg-gray-900 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-10 mb-10 text-center">Album List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((artist) => (
            <>
              {artist.albums.map((album) => (
                <div key={album.title} className="album-card bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg" data-aos="fade-up">
                  <img src={album.image} alt={album.title} className="w-full h-48 object-cover object-center" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{artist.name}: {album.title}</h3>
                    {expandedAlbum[album.title] ? (
                      <p className="text-sm text-gray-700 dark:text-gray-300">{album.description}</p>
                    ) : (
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {album.description.length > 100 ? `${album.description.slice(0, 100)}...` : album.description}
                      </p>
                    )}
                    {album.description.length > 100 && (
                      <div className="mt-2">
                        {expandedAlbum[album.title] ? (
                          <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline" onClick={(e) => handleReadLess(e, album.title)}>
                            Read Less
                          </a>
                        ) : (
                          <a href="#" className="text-blue-500 dark:text-blue-400 hover:underline" onClick={(e) => handleReadMore(e, album.title)}>
                            Read More
                          </a>
                        )}
                      </div>
                    )}
                    <a href={`album/${album.id}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                      Go to Album
                    </a>
                  </div>
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlbumList;
