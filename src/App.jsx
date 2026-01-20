import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import ProductCard from "./assets/ProductCard/ProductCard";

const ProductData = [
  {
    id: "1",
    image: "/img/nike.jpeg",
    name: "NIKE RUNNING",
    price: "$ 400",
    rating: "4.5",
    location: "Kota Jakarta",
    kategori: "NIKE",
    isAvailable: true,
  },
  {
    id: "2",
    image: "/img/adidas.jpeg",
    name: "ADIDAS RUNNING",
    price: "$ 300",
    rating: "4.5",
    location: "Kota Semarang",
    kategori: "ADIDAS",
    isAvailable: false,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex items-center space-x-3 gap-4">
              <div>
                <h2>Promo Product</h2>
                {ProductData.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isPromo={true}
                  />
                ))}
              </div>
              <div>
                <h3>Product List</h3>
                {ProductData.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div>
                <h3>Search Result</h3>
                {ProductData.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isSearch={true}
                  />
                ))}
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
