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
            <div className="bgvideo">
                <video loop muted autoPlay poster="img/videoframe.jpg" className="bgvideo">
                    <source src="https://pitch-spork.s3.us-east-2.amazonaws.com/Main.mp4" type="video/mp4"/>
                </video>
            </div>

            <div>
                <h2>Try Something New From Our Collection!</h2>
                <h1>{randomAlbum.title}</h1>
                <img src={randomAlbum.coverUrl}/>
                <h3>{randomAlbum.artist}</h3>
            </div>

            <div>
                <ul>{reviewsList}</ul>
            </div>

        </div>
    );
};

export default Landing;
