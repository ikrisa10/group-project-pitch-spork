import React from "react"

const ReviewTile = props => {

    let reviewDiv = "blank"
    if(props.reviewBody == null || props.reviewBody == "") {
        reviewDiv = <p>This user did not leave additional details for their rating</p>
    } else {
        reviewDiv = <p>{props.reviewBody}</p>
    }

    return (
        <div className="inner-content cell small-3 spaceddown">
          <div className="reviewTop">
              {props.rating}
              <h3>by {props.name} on {props.createdAt}</h3>

          </div>
            <div className="reviewContent">
                {reviewDiv}
            </div>
        </div>
    )
}

export default ReviewTile