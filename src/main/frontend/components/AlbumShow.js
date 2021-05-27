import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";
import ReviewTile from "./ReviewTile";

const AlbumShow = (props) => {
  const [album, setAlbum] = useState({});
  const [form, setForm] = useState(false);
  const [reviews, setReviews] = useState([]);

  const getAlbum = async () => {
    try {
      const id = props.match.params.id;
      const response = await fetch(`/api/v1/album/${id}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      setAlbum(responseBody);
      setReviews(responseBody.reviews);
    } catch (err) {
      console.error(`Album not found: ${err.message}`);
    }
  };

  const toggleFormShow = () => {
    if (!form) {
      setForm(true);
    } else {
      setForm(false);
    }
  };

  const updateReviews = (newReview) => {
    setReviews([...reviews, newReview])
  };

  let reviewFormDisplay;
  if (form == true) {
    reviewFormDisplay = (
      <ReviewForm id={album.id} toggleFormShow={toggleFormShow} updateReviews={updateReviews} />
    );
  }

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

  useEffect(() => {
    getAlbum();
  }, []);

  const altText = `a photo of ${album.title}, an album by ${album.artist}`;

  let innerHTML = `${album.embedUrl}`;

  function createMarkup() {
    return { __html: innerHTML };
  }

  function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }

  return (
    <div>
      <div className="showpage">
        <img className="showimage" src={album.coverUrl} alt={altText} />
        <h1>{album.title}</h1>
        <h3>{album.artist}</h3>
        <h3>
          Genre: {album.artist}, released in {album.releaseYear}
        </h3>

        {MyComponent()}

        <div>
          <div>
            {reviewFormDisplay}
            <button className="button hollow" onClick={toggleFormShow}>
              Add review
            </button>
          </div>
        </div>
        <ul className="no-bullet">{reviewsList}</ul>
      </div>
    </div>
  );
};

export default AlbumShow;
