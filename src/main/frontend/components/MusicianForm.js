import React, { useState } from 'react'
import { Redirect } from "react-router-dom"
import _ from "lodash"


export const MusicianForm = (props) => {
  const [newAlbum, setNewAlbum] = useState({
    title: "",
    artist: "",
    genre: "",
    email: "",
    coverUrl: "",
    releaseYear: "",
    embedUrl: ""
  })
  const [errors, setErrors] = useState([])
  const [redirect, setRedirect] = useState(false)
  const [returnAlbum, setReturnAlbum] = useState([])

  const addNewAlbum = async () => {
    try {
      const response = await fetch("/api/v1/albums/create", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newAlbum)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const albumBody = await response.json()
          return setErrors(albumBody)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      } else {
        const albumBody = await response.json()
        if (albumBody) {
          setReturnAlbum(albumBody)
          setRedirect(true)
        }
      }
    } catch (error) {
      console.error(`Error in fetch: ${error}`)
    }
  }

    const handleInput = event => {
      setNewAlbum({
        ...newAlbum,
        [event.currentTarget.name]: event.currentTarget.value
      })
    }

    const validateInput = () => {
      let submissionErrors = {}
      const requiredFields = [
        "title",
        "artist",
        "genre",
        "email",
        "coverUrl",
        "releaseYear",
        "embedUrl"
      ]
      requiredFields.forEach(field => {
        if (newAlbum[field].trim() === "") {
          submissionErrors = { ...submissionErrors, [field]: `is required` }
        }
      })
      setErrors(submissionErrors)
      return _.isEmpty(submissionErrors)
    }

    const handleSubmit = event => {
      event.preventDefault()
      if (validateInput()) {
        addNewAlbum()
      }
    }

    if (redirect) {
      return <Redirect to={`/albums/${returnAlbum.id}`} />
    }

    const clearChange = (event) => {
      event.preventDefault()
      setNewAlbum({
        title: "",
        artist: "",
        genre: "",
        email: "",
        coverUrl: "",
        releaseYear: "",
        embedUrl: ""
      })
    }

  return (
    <div>
      <img className="imageheader" src="https://pitch-spork.s3.us-east-2.amazonaws.com/add-an-album-text.png" alt="text reads add an album"/>
      <br/>
      <form onSubmit={handleSubmit} className="adoption_app">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            {/* <div className="cell">
              <Error errors={errors} />
            </div> */}

            <div className="row">
              <div className="medium-6 columns">
                <label htmlFor="title">
                   Album Title:
                  <input
                    id="title"
                    type="text"
                    name="title"
                    onChange={handleInput}
                    value={newAlbum.title}
                    placeholder="Album Title"
                  />
                <span className="error">{errors.title}</span>
                </label>
              </div>
              <div className="medium-6 columns">
                <label htmlFor="artist">
                   Artist Name:
                  <input
                    id="artist"
                    type="text"
                    name="artist"
                    onChange={handleInput}
                    value={newAlbum.artist}
                    placeholder="Your or Your Band's Name"
                  />
                  <span className="error">{errors.artist}</span>
                </label>
              </div>
              <div className="medium-6 columns">
                <label htmlFor="genre">
                   Genre:
                  <input
                    id="genre"
                    type="text"
                    name="genre"
                    onChange={handleInput}
                    value={newAlbum.genre}
                    placeholder="Genre of Your Album"
                  />
                  <span className="error">{errors.genre}</span>
                </label>
              </div>
              <div className="medium-6 columns">
                <label htmlFor="email">
                   Musician's Email:
                  <input
                    id="email"
                    type="text"
                    name="email"
                    onChange={handleInput}
                    value={newAlbum.email}
                    placeholder="Your Email"
                  />
                  <span className="error">{errors.email}</span>
                </label>
              </div>
              <div className="medium-6 columns">
                <label htmlFor="coverUrl">
                   Album's cover Photo Url:
                  <input
                    id="coverUrl"
                    type="text"
                    name="coverUrl"
                    onChange={handleInput}
                    value={newAlbum.coverUrl}
                    placeholder="URL for the album cover"
                  />
                  <span className="error">{errors.coverUrl}</span>
                </label>
              </div>
              <div className="medium-6 columns">
                <label htmlFor="releaseYear">
                   Album's Release Year:
                  <input
                    id="releaseYear"
                    type="number"
                    name="releaseYear"
                    onChange={handleInput}
                    value={newAlbum.releaseYear}
                    placeholder="Your Name"
                  />
                  <span className="error">{errors.releaseYear}</span>
                </label>
              </div>
              <div className="medium-6 columns">
                <label htmlFor="embedUrl">
                   Album's Play URL:
                  <input
                    id="embedUrl"
                    type="text"
                    name="embedUrl"
                    onChange={handleInput}
                    value={newAlbum.embedUrl}
                    placeholder="Embedded URL"
                  />
                  <span className="error">{errors.embedUrl}</span>
                </label>
              </div>
              <button className="button" onClick={clearChange}>Clear</button>
              <input className="button round" type="submit" value="Submit" />
           </div>
          </div>
        </div>
      </form> 
    </div>
  )
}

export default MusicianForm
