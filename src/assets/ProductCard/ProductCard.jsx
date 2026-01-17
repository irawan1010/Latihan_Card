import { MapPin, Star } from "lucide-react";

function ProductCard({ props }) {
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-4 border border-default rounded-2xl shadow-xs">
      <a href="#">
        <img className=" rounded-2xl bg-slate-100 size-85" src={props.image} />
      </a>
      <div className=" space-x-3 mb-3">
        <div className="flex items-center justify-between gap-2">
          <p className="mt-2 font-bold text-2xl text-slate-800">{props.name}</p>
          <button
            className="rounded-md ml-auto mt-3 bg-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white w-max font-bold"
            type="button"
          >
            + Add to Cart
          </button>
        </div>
        <div>
          <span className="text-slate-300 text-2xl flex mt-1 ">
            {props.kategori}
          </span>
          <span className="mt-2 flex text-2xl text-slate-800 font-bold">
            {props.price}
          </span>
          <div className="flex items-center justify-baseline mt-3">
            <Star color="#fce303" />
            <h5>{props.rating}</h5>
          </div>
          <div className="flex mt-5 text-slate-600 font-bold items-center">
            <MapPin />
            <h5 className="ml-2">{props.location}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
