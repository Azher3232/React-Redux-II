import React from "react";
import "./styles";
import { useDispatch, useSelector } from "react-redux";
import { CartArticle, CartDetails } from "./styles";
import Item from "./Item";
import { removeFromCart } from "../../actions";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <CartArticle>
      {cartProducts.length > 0 ? (
        cartProducts.map((cartProduct) => {
          return (
            <Item
              title={cartProduct.title}
              price={cartProduct.price}
              quantity={cartProduct.quantity}
              key={cartProduct.id}
              onDelete={() => handleDelete(cartProduct.id)}
            />
          );
        })
      ) : (
        <CartDetails>You don't have item in your cart</CartDetails>
      )}
    </CartArticle>
  );
};

export default Cart;
