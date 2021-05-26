import React, { useState, useEffect } from "react"
import ReviewForm from "./ReviewForm"
import ReviewTile from "./ReviewTile";

const AlbumShow = props => {
    const [album, setAlbum] = useState({})
    const [form, setForm] = useState(false)
    const [reviews, setReviews] = useState([])

    const getAlbum = async () => {
        try {
            const id = props.match.params.id
            const response = await fetch(`/api/v1/album/${id}`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const responseBody = await response.json()
            setAlbum(responseBody)
            setReviews(responseBody.reviews)
        } catch (err) {
            console.error(`Album not found: ${err.message}`)
        }
    }

    const toggleFormShow = () => {
        if (!form) {
            setForm(true)
        } else {
            setForm(false)
        }
    }

    let reviewFormDisplay
    if (form == true) {
        reviewFormDisplay = <ReviewForm id={album.id} />
    }

    const reviewsList = reviews.map(review => {
        return (
            <li key={review.id}><ReviewTile
                id={review.id}
                rating={review.rating}
                name={review.name}
                reviewBody={review.reviewBody}
                createdAt={review.createdAt}
            /></li>
        )
    })

    // let handleClick = event => {
    //     event.preventDefault()
    //     toggleFormShow()
    // }

    useEffect(() => {
        getAlbum()
    }, [])

    // const embeddedPlayer = `<iframe src="{album.embedUrl}" width="300" height="380"  allowtransparency="true" allow="encrypted-media"></iframe>`

    const altText = `a photo of ${album.title}, an album by ${album.artist}`

    return (
        <div>
            <div className="showpage">
                <img className="showimage" src={album.coverUrl} alt={altText} />
                <h1>{album.title}</h1>
                <h3>{album.artist}</h3>
                <h3>Genre: {album.artist}, released in {album.releaseYear}</h3>
                {album.embedUrl}
                <div>
                  <div>
                    {reviewFormDisplay}
                    <button className="button hollow" onClick={toggleFormShow}></button>
                  </div>
                </div>
                <ul className="no-bullet">
                  {reviewsList}   
                </ul>
            </div>
        </div>
    )
}

export default AlbumShow