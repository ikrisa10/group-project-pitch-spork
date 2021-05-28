import React from "react"

const ReviewTile = props => {

    let reviewDiv = "blank"
    if(props.reviewBody == null || props.reviewBody == "") {
        reviewDiv = <p>This user did not leave additional details for their rating</p>
    } else {
        reviewDiv = <p>{props.reviewBody}</p>
    }

    let starImage = ""
    if(props.rating == 1) {
        starImage="https://pitch-spork.s3.us-east-2.amazonaws.com/1star.png"
    } else if(props.rating == 2) {
        starImage="https://pitch-spork.s3.us-east-2.amazonaws.com/2star.png"
    } else if(props.rating == 3) {
        starImage="https://pitch-spork.s3.us-east-2.amazonaws.com/3star.png"
    } else if(props.rating == 4) {
        starImage="https://pitch-spork.s3.us-east-2.amazonaws.com/4star.png"
    } else if(props.rating == 5) {
        starImage="https://pitch-spork.s3.us-east-2.amazonaws.com/5star.png"
    }

    return (
        <div className="inner-content cell small-3 spaceddown">
          <div className="reviewTop">
              <img src={starImage} id="starrating"/>
              <br/>
              <h3>by {props.name} on {props.createdAt}</h3>

          </div>
            <div className="reviewContent">
                {reviewDiv}
            </div>
        </div>
    )
}

export default ReviewTile