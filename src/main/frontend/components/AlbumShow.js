import React, {useState, useEffect} from "react";
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

    return (
        <div className="centered" id="albumshowpage">
            <div className="showcontainer">
            <img className="showalbumcover" src={album.coverUrl} alt={altText}/>
            <h5 className="showalbumtext">{album.title} by {album.artist}</h5>
                <br/>
            <h5 className="showalbumtext">{album.genre}, released {album.releaseYear}</h5>
            </div>

            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <ul className="grid-x grid-margin-x">
                        <li className="inner-content cell medium-6">

                            {MyComponent()}
                        </li>

                        <li className="inner-content cell medium-6">
                            <div>
                                {reviewFormDisplay}
                                <button className="button hollow" onClick={toggleFormShow}>
                                    Add review
                                </button>
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
