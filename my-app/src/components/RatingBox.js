import "../styles/App.css";
import RatingIcon from "../components/RatingIcon";
import React from "react";
import { useState } from "react";

function RatingBox() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };

  return (
    <div className="App">
      <section className="RatingBox">
        <p className="TopHeading">We'd Love to Hear From You</p>
        <section className="BottomBox">
          <p className="SubHeading">Please Leave a Rating Below</p>
          <section className="StarBox">
            {[1, 2, 3, 4, 5].map((index) => {
              return (
                <RatingIcon
                  index={index}
                  rating={rating}
                  hoverRating={hoverRating}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  onSaveRating={onSaveRating}
                />
              );
            })}
          </section>
        </section>
          <a href="http://localhost:3000/ThankYou">Submit</a>
      </section>
    </div>
  );
}

export default RatingBox;
