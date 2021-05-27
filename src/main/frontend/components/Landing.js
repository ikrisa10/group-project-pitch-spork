import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import AlbumTile from "./AlbumTile.js";
import ReviewTile from "./ReviewTile";

const Landing = (props) => {
  const [randomAlbum, setRandomAlbum] = useState({});
  const [reviews, setReviews] = useState([]);

  const altText = `a photo of ${randomAlbum.title}, an album by ${randomAlbum.artist}`;

  const getRandomAlbum = async () => {
    try {
      const response = await fetch(`/api/v1/albums/random`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      setRandomAlbum(responseBody);
      setReviews(responseBody.reviews);
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getRandomAlbum();
  }, []);

  const reviewsList = reviews.map((review) => {
    return (
      <li key={review.id}>
        <ReviewTile
          id={review.id}
          rating={review.rating}
          name={review.name}
          reviewBody={review.reviewBody}
          createdAt={review.createdAt}
        />
      </li>
    );
  });

  return (
    <div className="grid-y medium-grid-frame">
      <div className="cell shrink header medium-cell-block-container"></div>
      <div className="cell medium-auto medium-cell-block-container">
        <div className="grid-x grid-padding-x">
          <div className="cell medium-4 medium-cell-block-y">
            <h2>Try Something New From Our Collection!</h2>
            <h1>{randomAlbum.title}</h1>
            <img src={randomAlbum.coverUrl} />
            <h3>{randomAlbum.artist}</h3>
          </div>
          <div className="cell medium-8 medium-cell-block-y">
            <ul>{reviewsList}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
