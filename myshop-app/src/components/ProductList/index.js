import React, { useEffect } from "react";
import "./styles";
import { useDispatch, useSelector } from "react-redux";
import { StyledArticle } from "./styles";
import Product from "./Product";
import { addToCart } from "../../actions";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "../../state/status";
import { fetchProducts } from "../../state/productsSlice";
import Spinner from "../Spinner";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productsItems);
  console.log("PRODUCTS", products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    status === IDLE && dispatch(fetchProducts());
  });

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <main>
      <StyledArticle>
        {products.length > 0 ? (
          products.map((product) => {
            const { id, title, description, price, rating, image } = product;
            return (
              <Product
                image={image}
                title={title}
                description={description}
                price={price}
                rating={rating.rate}
                key={id}
                handleOnClick={() => handleAddToCart(product)}
                id={id}
              />
            );
          })
        ) : (
          <Spinner />
        )}
      </StyledArticle>
    </main>
  );
};

export default ProductList;
