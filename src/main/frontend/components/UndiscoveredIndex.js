import React, { useState, useEffect } from "react";
import AlbumTile from "./AlbumTile.js";

const undiscoveredIndexPage = (props) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = async () => {
    try {
      const response = await fetch(`/api/v1/albums/undiscovered`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      setAlbums(responseBody);
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`);
    }
  };

  const albumList = albums.map((album) => {
    return (
      <li key={album.id} className="inner-content cell small-3 album-tile">
        <AlbumTile
          key={album.id}
          id={album.id}
          title={album.title}
          artist={album.artist}
          genre={album.genre}
          coverUrl={album.coverUrl}
        />
      </li>
    );
  });

  return (
    <div className="centered">
      <div className="grid-container">
        <img
          className="imageheader"
          src="https://pitch-spork.s3.us-east-2.amazonaws.com/undiscovered-text.png"
          alt="text reads undiscovered"
        />
        <br />
        <ul className="grid-x grid-margin-x" id="album">
          {albumList}
        </ul>
      </div>
    </div>
  );
};

export default undiscoveredIndexPage;
