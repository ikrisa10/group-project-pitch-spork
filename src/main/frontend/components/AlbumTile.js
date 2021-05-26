import React from "react"

const AlbumTile = props => {

    const altext = `a photo of ${props.name}`

    const altText = `a photo of ${props.title}, an album by ${props.artist}`
    return (
        <div className="inner-content cell small-3 spaceddown">
            <a href={`/albums/${props.id}`}>
                <img className="indexImage" src={props.coverUrl} alt={alText} />
                <h3 classname="namebox">{props.name}</h3>
            </a>
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