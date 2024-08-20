import { useSelector } from "react-redux";
import React from "react";

function Accordion() {
  const products = useSelector((state) => state.emaz.products);
  const [id, setId] = React.useState(null);
  const [multiIds, setMultiIds] = React.useState([]);
  const [enableMulti, setEnableMulti] = React.useState(false);

  function handleClick(ind) {
    if (enableMulti) {
      if (multiIds.indexOf(ind) > -1) {
        setMultiIds(multiIds.filter(id => id !== ind));
      } else {
        setMultiIds((prev) => [...prev, ind]);
      }
    } else {
      setId(ind === id ? null : ind);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-amber-900 text-white font-bold px-4 py-2 max-h-10 border-white border-2 rounded-md mb-4"
        onClick={() => {
          setEnableMulti(!enableMulti);
        }}
      >
        {enableMulti ? "Disable Multi Selection" : "Enable Multi Selection"}
      </button>
      {products.map((product) => (
        <div className="flex flex-row space-x-4 justify-center items-center">
          <button
            className="bg-black text-white px-4 py-2 rounded-md mb-4 text-wrap"
            key={product.id}
            onClick={() => handleClick(product.id)}
          >
            {product.title}
          </button>
          <div>
            {enableMulti
              ? multiIds.indexOf(product.id) > -1 && (
                  <img src={product.thumbnail} className="mb-4" />
                )
              : product.id === id && (
                  <img src={product.thumbnail} className="mb-4" />
                )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
