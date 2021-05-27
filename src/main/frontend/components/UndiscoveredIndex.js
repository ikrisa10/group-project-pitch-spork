import React, { useState, useEffect } from "react"
import AlbumTile from "./AlbumTile.js"

const undiscoveredIndexPage = props => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        getAlbums()
    }, [])

    const getAlbums = async () => {
        try {
            const response = await fetch(`/api/v1/albums/undiscovered`)
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const responseBody = await response.json()
            setAlbums(responseBody)
        } catch (err) {
            console.error(`Error in Fetch: ${err.message}`)
        }
    }

    const albumList = albums.map(album => {
        return (
            <AlbumTile
                key={album.id}
                id={album.id}
                title={album.title}
                artist={album.artist}
                genre={album.genre}
                coverUrl={album.coverUrl}
            />
        )
    })

    return (
        <div className="centered">
            <div className="grid-container">
            <h1 id="head1">Undiscovered Artists - Be the First to Review</h1>
            <ul className="grid-x grid-margin-x">{albumList}</ul>
            </div>
        </div>
    )
}

export default undiscoveredIndexPage