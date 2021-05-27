import React, { useState, useEffect } from "react"
import AlbumTile from "./AlbumTile.js"

const IndexPage = props => {
    const [albums, setAlbums] = useState([])

    
    const getAlbums = async () => {
        try {
            const response = await fetch(`/api/v1/albums`)
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
    
    useEffect(() => {
        getAlbums()
    }, [])

    const albumList = albums.map(album => {
        return (
            <li key={album.id}><AlbumTile
                id={album.id}
                title={album.title}
                artist={album.artist}
                genre={album.genre}
                coverUrl={album.coverUrl}
            /></li>
        )
    })

    return (
        <div className="centered">
            <h1>All Albums to Review</h1>
            <ul className="grid-x grid-margin-x">{albumList}</ul>
        </div>
    )
}

export default IndexPage