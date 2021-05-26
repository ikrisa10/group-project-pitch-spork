import React, { useState } from "react"
import _ from "lodash"

const ReviewForm = props => {
  
  const [getForm, setForm] = useState({
  rating: "",
  name: "",
  email: "",
  reviewBody: ""
  })
  const [errors, setErrors] = useState({})
  
  const postForm = async () => {
      try {
        const response = await fetch(`/api/v1/review/create/${props.albumId}`, {
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
            setErrors(body)
          } else {
            const errorMessage = `${response.status} {${response.statusText}}`
            throw new Error(errorMessage)
          }
        } else {
          const body = await response.json()
        }
      } catch (error) {
        console.error(`Error in fetch: ${error.message}`)
      }
  }
  
  const validForSubmission = () => {
      let submitErrors = {}
      const requiredFields = ["rating", "name", "email", "reviewBody"]
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
        rating: "",
        name: "",
        email: "",
        reviewBody: "",
      })
  }
  
  return(
    <div>
      
      <h3>Review Form</h3>  
      <hr></hr>
      <form onSubmit={handleSubmit}>
    
        <label htmlFor="rating">
          Your Album rating:
          <input
            id="rating"
            type="text"
            name="rating"
            value={getForm.rating}
            onChange={handleChange}
            placeholder="Your Rating"
          />
        </label>
        
        <label htmlFor="name">
          Your Name:
          <input
            id="name"
            type="text"
            name="name"
            value={getForm.name}
            onChange={handleChange}
          />
        </label>
        
        <label htmlFor="email">
          E-Mail address:
          <input
            id="email"
            type="email"
            name="email"
            value={getForm.email}
            onChange={handleChange}
            placeholder="youremail@email.com"
          />
        </label>
        
        <label htmlFor="reviewBody">
          Your Album review:
          <input
            id="reviewBody"
            type="text"
            name="reviewBody"
            value={getForm.reviewBody}
            onChange={handleChange}
            placeholder="Your Album Review"
          />
        </label>
        
        <div className="button-group">
          <button className="button hollow" onClick={clearForm}>
          </button>
          <input className="button" type="submit" value="Submit your review" />
        </div>

      </form>
    </div>
  )
}

export default ReviewForm