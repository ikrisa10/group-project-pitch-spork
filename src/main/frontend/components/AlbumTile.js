import React from "react"
import { Link } from "react-router-dom"

const AlbumTile = props => {
    const id = props.id
    const altext = `a photo of ${props.name}`

    const altText = `a photo of ${props.title}, an album by ${props.artist}`
    return (
        <div className="inner-content cell small-3 spaceddown">
            <h3 className="namebox">{props.name}</h3>
            <Link to={`/albums/${id}`}>
                <img className="indexImage" src={props.coverUrl} alt={altText} />
            </Link>
            <div>
                <h4>{props.title}, by {props.artist}</h4>
            </div>
            <div>
                <h6>Genre: {props.genre}</h6>
            </div>
        </div>
    )
}

export default AlbumTile