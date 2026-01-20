import React from "react";

function ProductCardActions({ isAvailable }) {
  return (
    <div>
      <button
        className={`${isAvailable ? "bg-slate-700" : "bg-gray-400"} rounded-md ml-auto mt-3 py-2 px-4 border border-transparent text-center text-sm text-white w-max font-bold`}
        disabled={!isAvailable}
        type="button"
      >
        {isAvailable ? "+ Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
}

export default ProductCardActions;
