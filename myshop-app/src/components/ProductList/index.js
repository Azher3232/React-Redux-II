import React from "react";
import "./styles";
import { useDispatch, useSelector } from "react-redux";
import { StyledArticle } from "./styles";
import Product from "./Product";
import { addToCart } from "../../actions";

const ProductList = () => {
  const products = useSelector((state) => state.products.productsItems);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <main>
      <StyledArticle>
        {products.length > 0
          ? products.map((product) => {
              const { id, title, description, price, rating, image } = product;
              return (
                <Product
                  image={image}
                  title={title}
                  description={description}
                  price={price}
                  rating={rating}
                  key={id}
                  handleOnClick={() => handleAddToCart(product)}
                  id={id}
                />
              );
            })
          : null}
      </StyledArticle>
    </main>
  );
};

export default ProductList;
