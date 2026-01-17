import "./App.css";
import ProductCard from "./assets/ProductCard/ProductCard";

const ProductData = [
  {
    image:
      "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/65d684cb-c14a-43d4-80c2-c1c43b7892e6/NIKE+INTERACT+RUN.png",
    name: "NIKE RUNNING",
    price: "$ 400",
    rating: "4.5",
    location: "Kota Jakarta",
    kategori: "NIKE",
  },
  {
    image:
      "https://img.id.my-best.com/product_images/c7be909d06cb00f9c0e8135cb60ca899.png?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=c65779da0f9d94329f8685399cfdb3b8",
    name: "ADIDAS RUNNING",
    price: "$ 300",
    rating: "4.5",
    location: "Kota Bandung",
    kategori: "ADIDAS",
  },
];

function App() {
  return (
    <div className="flex items-center space-x-3 gap-4">
      {ProductData.map((item) => (
        <ProductCard props={item} />
      ))}
    </div>
  );
}

export default App;
