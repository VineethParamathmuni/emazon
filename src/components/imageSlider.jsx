import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import StateFiller from "../state/StateFiller";


function ImageSlider() {
  const [index, setIndex] = useState(0);
  const len = useSelector((state) => state.image.images.length);
  const ima = useSelector((state) => state.image.images[index]);

  return (
    <>
      <StateFiller/>
      <div className="flex flex-column space-x-4 items-center justify-center mt-10">
        <button
          disabled={index === 0}
          onClick={() => setIndex(index - 1)}
          className="disabled:cursor-not-allowed cursor-pointer"
        >
          <BsArrowLeftCircleFill />
        </button>
        <div className="relative w-2/5 h-2/5">
          {ima && (
            <>
              <img
                alt={ima.author}
                src={ima.download_url}
                className="rounded-lg w-full h-full"
              />
              <span className="absolute inset-0 flex flex-wrap items-end justify-center space-x-6 mb-2">
                {Array.from({ length: len }, (_, inde) => (
                  <button
                    key={inde}
                    onClick={() => setIndex(inde)}
                    className={`${
                      inde == index
                        ? "bg-white text-white"
                        : "bg-gray-500 text-gray-500"
                    } space-x-6 rounded-md shadow-2xl shadow-white`}
                  >
                    {inde + 1}
                  </button>
                ))}
              </span>
            </>
          )}
        </div>
        <button
          onClick={() => setIndex(index === len - 1 ? 0 : index + 1)}
          className="cursor-pointer"
        >
          <BsArrowRightCircleFill />
        </button>
      </div>
    </>
  );
}

export default ImageSlider;
