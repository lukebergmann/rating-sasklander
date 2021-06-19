import StarIcon from "./StarIcon";
import React from "react";
import '../styles/RatingIcon.css'

function RatingIcon(props) {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;
  // Fill in the stars if hovered over
  const fill = React.useMemo(() => {
    if (hoverRating >= index) {
      return "#F28A3A";
    } else if (!hoverRating && rating >= index) {
      return "#F28A3A";
    }
    return "none";
  }, [rating, hoverRating, index]);
  return (
    <div
      class="cursor"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <StarIcon fill={fill} />
    </div>
  );
}
export default RatingIcon;
