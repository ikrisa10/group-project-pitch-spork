import React from 'react'

export const MusicianForm = (props) => {
  const [newAlbum, setNewAlbum] = useState({
    title = "",
    artist = "",
    genre = "",
    email = "",
    coverUrl = "",
    releaseYear = "",
    embedUrl = ""
  })
  const [errors, setErrors] = useState([])
  const [redirect, setRedirect] = useState(false)

  const addNewAlbum = async () => {
    try {
      const response = await fetch("/api/v1/album/create", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newSurrender)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const albumBody = await response.json()
          return setErrors(albumBody.errors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw error
        }
      } else {
        const albumBody = await response.json()
        if (albumBody) {
          setRedirect(true)
        }
      }
    } catch (error) {
      console.error(`Error in fetch: ${error}`)
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
        if (newSurrender[field].trim() === "") {
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
    let albumId = albumBody.id
    if (redirect) {
      return <Redirect to={`/album/create/${albumId}`} />
    }

    const clearChange =(event) =>{
      event.preventDefault()
      if((newAlbum.title !== "" || newAlbum.artist !== ""
       || newAlbum.genre !== "" || newAlbum.email !== "" 
       || newAlbum.coverUrl !== "" || newAlbum.releaseYear !== "" || newAlbum.embedUrl !== "")){
        setNewAlbum({
          title = "",
          artist = "",
          genre = "",
          email = "",
          coverUrl = "",
          releaseYear = "",
          embedUrl = ""
        })
      }
    }
  }
  return (
    <div>
           <h2>Add Your Album:</h2>
      <form onSubmit={handleSubmit} className="adoption_app">
        <div className="grid-contrainer">
          <div className="grid-x grid-padding-x">
            <div className="cell">
              <Error errors={errors} />
            </div>

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
                  />
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
                  />
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
                  />
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
                  />
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
                  />
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
                  />
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
                  />
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
