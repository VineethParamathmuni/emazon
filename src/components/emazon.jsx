import React from "react";
import EmazonStateFiller from "../state/emazonStateFiller";
import { useState } from "react";
import { useSelector } from "react-redux";

function Emazon() {
  const [count, setCount] = useState(0);
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
              <img src={product.thumbnail} />
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
          {products.length > 0 ? 'Load More Products': 'Load Products' }
        </button>
      </div>
      {count > 0 && (
        <button
          onClick={handleDown}
          className="rounded-md bg-black text-white px-4 py-2"
        >
          Go to Top
        </button>
      )}
    </div>
  );
}

export default Emazon;
