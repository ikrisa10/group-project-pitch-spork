import React from "react"
import { Link } from "react-router-dom"

const AlbumTile = props => {
    const id = props.id
    const altext = `a photo of ${props.name}`

    const altText = `a photo of ${props.title}, an album by ${props.artist}`
    return (
        <div>
            <h3 className="namebox">{props.name}</h3>
            <Link to={`/albums/${id}`}>
                <img className="indexImage" src={props.coverUrl} alt={altText} />
            </Link>
                <ul>
                <li><h5 className="album-title">{props.title} </h5></li>
                <li><h5 className="album-d">Artist: {props.artist} </h5></li>
                <li><h6 className="album-d">Genre: {props.genre} </h6></li>
                </ul>
        </div>
    )
}

export default AlbumTile