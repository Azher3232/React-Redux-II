import React from "react";
import {
  StyledSectionContainer,
  StyledItemTitle,
  StyledItemPrice,
  StyledItemPriceIcon,
  StyledItemDeleteIcon,
  StyledButton,
  StyledPriceContainer,
} from "./styles";

const Item = ({ title, price, quantity, onDelete }) => {
  return (
    <StyledSectionContainer>
      <StyledItemTitle>{title}</StyledItemTitle>
      <StyledPriceContainer>
        <StyledItemPriceIcon />
        <StyledItemPrice>{price}</StyledItemPrice>
      </StyledPriceContainer>
      <StyledItemPrice>Quantity: {quantity}</StyledItemPrice>
      <StyledButton onClick={onDelete}>
        <StyledItemDeleteIcon />
      </StyledButton>
    </StyledSectionContainer>
  );
};

export default Item;
