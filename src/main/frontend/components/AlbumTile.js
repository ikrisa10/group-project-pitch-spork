import React from "react"
import { Link } from "react-router-dom"

const AlbumTile = props => {
    const id = props.id
    const altext = `a photo of ${props.name}`

    const altText = `a photo of ${props.title}, an album by ${props.artist}`
    return (
        <div className="inner-content cell small-3 spaceddown" className="album-tile">
            <h3 className="namebox">{props.name}</h3>
            <Link to={`/albums/${id}`}>
                <img className="indexImage" src={props.coverUrl} alt={altText} />
            </Link>
            <div className="description">
                <ul>
                <li><h4 className="album-title">{props.title} </h4></li>
                <li><h4 className="album-d">By: {props.artist} </h4></li>
                <li><h6 className="album-d">Genre: {props.genre} </h6></li>
                </ul>
            </div>
        </div>
    )
}

export default AlbumTile