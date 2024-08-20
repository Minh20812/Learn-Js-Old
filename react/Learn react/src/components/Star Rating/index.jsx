import { useState } from "react";

export default function StarRating() {
  const [idHover, setIdHover] = useState(0);
  function handleIdStar() {
    console.log(idHover);
  }
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        let starRatingValue = i + 1;
        return (
          <label key={i}>
            <span
              onMouseEnter={() => setIdHover(starRatingValue)}
              onMouseLeave={() => setIdHover(0)}
              onClick={() => handleIdStar()}
            >
              {starRatingValue <= idHover ? "★" : "☆"}
            </span>
          </label>
        );
      })}
    </div>
  );
}
