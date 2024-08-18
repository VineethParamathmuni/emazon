import React from "react";
import EmazonStateFiller from "../state/emazonStateFiller";
import { useState } from "react";
import { useSelector } from "react-redux";

function Emazon() {
  const [count, setCount] = useState(0);
  const [hoverImage, setHoverImage] = useState("");
  const products = useSelector((state) => state.emaz.products);
  function handleDown() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="mt-5 mb-4 space-y-6">
      <EmazonStateFiller count={count} />
      <div className="grid grid-auto-fit-md place-items-stretch gap-10 mx-4">
        {products.map((product) => (
          <div className="px-4 py-2" key={product.id}>
            <div className="flex flex-col rounded-md items-center shadow-lg">
              <img
                src={product.thumbnail}
                className="hover:cursor-pointer"
                onClick={() => setHoverImage(product.thumbnail)}
              />
              <p className="text-center">{product.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="px-4 py-2 bg-black text-white rounded-md "
          onClick={() => setCount(count + 1)}
        >
          {products.length > 0 ? "Load More Products" : "Load Products"}
        </button>
      </div>
      {count > 0 && (
        <button
          onClick={handleDown}
          className="rounded-md bg-black text-white px-4 py-2 mx-3"
        >
          Go to Top
        </button>
      )}
      {hoverImage && (
        <div
          className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-10 space-y-4 "
          style={{ zIndex: 1000 }}
        >
          <img
            src={hoverImage}
            alt="Enlarged"
            className="max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
          <button
            className="rounded-md px-4 py-2 bg-white text-black"
            onClick={() => setHoverImage(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Emazon;