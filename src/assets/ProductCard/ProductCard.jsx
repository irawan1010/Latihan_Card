import { MapPin, Star } from "lucide-react";
import ProductCardImage from "./ProductCardImage";
import ProductCardInfo from "./ProductCardInfo";

function ProductCard({ product, isPromo, isSearch }) {
  return (
    <div
      className={`${
        isSearch ? "flex" : "block"
      }  bg-neutral-primary-soft  max-w-sm p-4 border border-default rounded-2xl shadow-xs mb-6`}
    >
      <ProductCardImage image={product.image} />
      <ProductCardInfo product={product} isPromo={isPromo} />
    </div>
  );
}

export default ProductCard;
