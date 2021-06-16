import React, { useState, useEffect } from "react";
import AlbumTile from "./AlbumTile.js";

const IndexPage = (props) => {
  const [albums, setAlbums] = useState([]);

  const getAlbums = async () => {
    try {
      const response = await fetch(`/api/v1/albums`);
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

  useEffect(() => {
    getAlbums();
  }, []);

  const albumList = albums.map((album) => {
    return (
      <li key={album.id} className="inner-content cell small-3 album-tile">
        <AlbumTile
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
          src="https://pitch-spork.s3.us-east-2.amazonaws.com/all-albums-text.png"
          alt="text reads all albums"
        />
        <br />
        <div className="grid-x grid-padding-x">
          <ul className="grid-x grid-margin-x" id="album">
            {albumList}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
