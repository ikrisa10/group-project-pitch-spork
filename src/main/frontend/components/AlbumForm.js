import React, { useState } from "react"
//import ErrorList from "./ErrorList"

const AlbumForm = props => {
    const [getForm, setForm] = useState({
        title: "",
        artist: "",
        genre: "",
        email: "",
        coverUrl: "",
        releaseYear: "",
        embedUrl: "",
    })

    const [shouldSucceed, setShouldSucceed] = useState(false)
    const [errors, setErrors] = useState({})

    const handleChange = event => {
        console.log(event.currentTarget.name, event.currentTarget.value)
        setForm({
            ...getForm,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    if (shouldRedirect) {
        return <Redirect push to="/albums" />
    }

    const postForm = async () => {
        try {
            const response = await fetch("/api/v1/albums/new", {
                method: "POST",
                credentials: "same-origin",
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify(getForm)
            })
            if (!response.ok) {
                if (response.status === 422) {
                    const body = await response.json()
                } else {
                    const errorMessage = `${response.status} {${response.statusText}}`
                    throw new Error(errorMessage)
                }
            } else {
                const body = await response.json()
                setShouldRedirect(true)
            }
        } catch (error) {
            console.error(`Error in fetchL ${error.message}`)
        }
    }

    const validForSubmission = () => {
        let submitErrors = {}
        const requiredFields = ["title", "artist", "genre", "email", "releaseYear", "embedUrl"]
        requiredFields.forEach(field => {
            if (getForm[field].trim() === "") {
                submitErrors = {
                    ...submitErrors,
                    [field]: "cannot be blank"
                }
            }
        })
        setErrors(submitErrors)
        return _.isEmpty(submitErrors)
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (validForSubmission()) {
            postForm()
            clearForm()
        }
    }

    const clearForm = event => {
        setForm({
            title: "",
            artist: "",
            genre: "",
            email: "",
            cover_url: "",
            release_year: "",
            embed_url: ""
        })
    }

    return (
        <div>
            <h1>Add your album [bands or musicians only]</h1>
            <hr></hr>
            <form onSubmit={handleSubmit} >
//                <ErrorList errors={errors} />
                {/*  title VARCHAR(255) NOT NULL,*/}
                <label htmlFor="title">
                    Album Title
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={getForm.title}
                        onChange={handleChange}
                        placeholder="Album Title"
                    />
                </label>
                {/*  artist VARCHAR(255) NOT NULL,*/}
                <label htmlFor="artist">
                    Your or Your Band's Name
                    <input
                        id="artist"
                        type="text"
                        name="artist"
                        value={getForm.artist}
                        onChange={handleChange}
                        placeholder="Your or Your Band's Name"
                    />
                </label>
                {/*  genre VARCHAR(255) NOT NULL,*/}
                <label htmlFor="genre">
                    Album Genre
                    <input
                        id="genre"
                        type="text"
                        name="genre"
                        value={getForm.genre}
                        onChange={handleChange}
                        placeholder="Genre of Your Album"
                    />
                </label>
                {/*  email VARCHAR(320) NOT NULL,*/}
                <label htmlFor="email">
                    Your Email
                    <input
                        id="email"
                        type="text"
                        name="email"
                        value={getForm.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                    />
                </label>
                {/*  cover_url VARCHAR(500),*/}
                <label htmlFor="coverUrl">
                    URL for Album Cover
                    <input
                        id="coverUrl"
                        type="URL"
                        name="coverUrl"
                        value={getForm.coverUrl}
                        onChange={handleChange}
                        placeholder="URL for the album cover"
                    />
                </label>
                {/*  release_year INTEGER NOT NULL,*/}
                <label htmlFor="releaseYear">
                    Release Year
                    <input
                        id="releaseYear"
                        type="number"
                        min={1889}
                        max={2021}
                        name="releaseYear"
                        value={getForm.releaseYear}
                        onChange={handleChange}
                        placeholder="Your Name"
                    />
                </label>
                {/*  embed_url INTEGER NOT NULL,*/}
                <label htmlFor="name">
                    Embeded URL Link
                    <input
                        id="name"
                        type="url"
                        name="name"
                        value={getForm.embedUrl}
                        onChange={handleChange}
                        placeholder="Embedded URL"
                    />
                </label>
                <div className="button-group">
                    <button className="button hollow" onClick={clearForm}>
                        Clear
                    </button>
                    <input className="button" type="submit" value="Submit your album for review" />
                </div>
            </form>
        </div>
    )
}

export default AlbumForm