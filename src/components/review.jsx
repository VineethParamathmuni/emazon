import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Review({ leng }) {
  const [hove, sethove] = useState(0);
  const [rating, setRating] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex flex-row mt-10 justify-center items-center">
        <p className="mx-4">Please rate the website</p>
        {Array.from({ length: leng }, (_, index) => {
          index += 1;
          return (
            <FaStar
              onClick={() => setRating(index)}
              onMouseEnter={() => sethove(index)}
              onMouseLeave={() => sethove(rating)}
              className={`${
                index <= (hove || rating) ? "text-yellow-400" : "text-black"
              }`}
              key={index}
            />
          );
        })}
      </div>      
    </div>
  );
}

export default Review;
