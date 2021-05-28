import React, {useState, useEffect} from "react";
import {Route, Switch, Link} from "react-router-dom";
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
        <div>
            <video src="https://pitch-spork.s3.us-east-2.amazonaws.com/Main.mp4" autoPlay loop
                   playsInline muted></video>

            <div className="featuredalbum" id="featureddiv">
                <img src="https://pitch-spork.s3.us-east-2.amazonaws.com/featured-text.png" alt="text reads featured" />
                <br/>
                <h3>Title: {randomAlbum.title}</h3>
                <img src={randomAlbum.coverUrl} className="featuredSize"/>
                <h3>Artist: {randomAlbum.artist}</h3>
                <h4>Genre: {randomAlbum.genre}</h4>
                <h4>what people are saying:</h4>
                <ul>{reviewsList}</ul>
            </div>

        </div>
    );
};

export default Landing;
