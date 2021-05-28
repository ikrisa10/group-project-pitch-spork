import React, {useState, useEffect} from "react";
import { Redirect } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import ReviewTile from "./ReviewTile";

const AlbumShow = (props) => {
    const [album, setAlbum] = useState({});
    const [form, setForm] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [redirect, setRedirect] = useState(false)

    const getAlbum = async () => {
        try {
            const id = props.match.params.id;
            const response = await fetch(`/api/v1/album/${id}`);
            if (!response.ok && response.status != 404) {
                const errorMessage = `${response.status} (${response.statusText})`;
                const error = new Error(errorMessage);
                throw error;
            } else if (response.status == 404) {
              setRedirect(true);
            } else {
              const responseBody = await response.json();
              setAlbum(responseBody);
              if (responseBody.reviews.length == 0) {
                setReviews([{"id":0,"rating":1,"name":"Your Name Could Be Here","email":"","reviewBody":"Your review could be here my fiend, we miss it","createdAt":"Whenever your are ready"}])  
              } else {
                setReviews(responseBody.reviews);
              }
            }
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
        if (reviews[0].id == 0) {
          setReviews([newReview])  
        } else {
          setReviews([...reviews, newReview])
        }
    };

    let reviewFormDisplay;
    if (form == true) {
        reviewFormDisplay = (
            <ReviewForm id={album.id} toggleFormShow={toggleFormShow} updateReviews={updateReviews}/>
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
        return {__html: innerHTML};
    }

    function MyComponent() {
        return <div dangerouslySetInnerHTML={createMarkup()}/>;
    }

    if (redirect) {
      return <Redirect to="/404" />
    }

    return (
        <div className="centered" id="albumshowpage">
            <div className="showcontainer">
                <img className="showalbumcover" src={album.coverUrl} alt={altText}/>
                <h5 className="showalbumtext">{album.title} by {album.artist}<br/>{album.genre}, released {album.releaseYear}</h5>
            </div>

            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <ul className="grid-x grid-margin-x">
                        <li className="inner-content cell medium-6">

                            {MyComponent()}
                            <button className="button hollow" onClick={toggleFormShow}>
                                Add review
                            </button>
                        </li>

                        <li className="inner-content cell medium-6">
                            <div>
                                {reviewFormDisplay}
                            </div>
                            <ul className="no-bullet">{reviewsList}</ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AlbumShow;
