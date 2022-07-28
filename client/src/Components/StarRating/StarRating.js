import React from 'react'
import ReactStars from "react-rating-stars-component";
import "./StarRating.css";

const StarRating = () => {
    const ratingChanged = (newRating) => {
        // alert(` You have given ${newRating} star rating for us.`)
        console.log(newRating);
      }
  return (
    <div>
        <ReactStars
    count={5}
    onChange={ratingChanged}
    size={50}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />,
    </div>
  )
}

export default StarRating