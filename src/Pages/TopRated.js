import React from "react";
import ProductCard from "../Components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const TopRated = () => {
  const {
    state: { products, loading, error },
  } = useProducts();

  let content;

  if (loading) {
    content = <p>Loading.......</p>;
  }

  if (error) {
    content = <p>Error occured</p>;
  }

  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }

  if (products.length) {
    content = products
      .filter((product) => product.rating >= 4)
      .map((product) => <ProductCard key={product._id} product={product} />);
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {content}
      </div>
    </div>
  );
};

export default TopRated;
