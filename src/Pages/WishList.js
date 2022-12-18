import React from "react";
import ProductCard from "../Components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const WishList = () => {
  const {
    state: { wishList, loading, error },
  } = useProducts();

  let content;

  if (loading) {
    content = <p>Loading.......</p>;
  }

  if (error) {
    content = <p>Error occured</p>;
  }

  if (!loading && !error && wishList.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }

  if (wishList.length) {
    content = wishList.map((product) => (
      <ProductCard key={product._id} product={product} />
    ));
  }

  return (
    <div>
      <h1>wish List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {content}
      </div>
    </div>
  );
};

export default WishList;
