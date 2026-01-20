import { MapPin, Star } from "lucide-react";
import { useEffect } from "react";
import ProductCardActions from "./ProductCardActions";

function ProductCardInfo({ product, isPromo }) {
  useEffect(() => {}, []);

  return (
    <div>
      <div className=" space-x-3 mb-3">
        <div className="flex items-center justify-between gap-2">
          <p className="mt-2 font-bold text-2xl text-slate-800">
            {product.name}
          </p>
          {!isPromo && <ProductCardActions isAvailable={product.isAvailable} />}
        </div>
        <div>
          <span className="text-slate-300 text-2xl flex mt-1 ">
            {product.kategori}
          </span>
          <span className="mt-2 flex text-2xl text-slate-800 font-bold">
            {product.price}
          </span>
          <div className="flex items-center justify-start mt-3">
            <Star color="#fce303" />
            <h5>{product.rating}</h5>
          </div>
          {!isPromo && (
            <div className="flex mt-5 text-slate-600 font-bold items-center">
              <MapPin />
              <h5 className="ml-2">{product.location}</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCardInfo;
