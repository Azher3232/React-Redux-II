import React from "react";
import {
  StyledSection,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductDetails,
  ProductPriceIcon,
  ProductRatingIcon,
  DivIconContainer,
  StyledButton,
} from "./styles";

const Product = ({
  title,
  description,
  price,
  rating,
  image,
  handleOnClick,
}) => {
  return (
    <StyledSection>
      <ProductImage src={image} />
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <DivIconContainer>
        <ProductPriceIcon />
        <ProductDetails>{price}</ProductDetails>
      </DivIconContainer>
      <DivIconContainer>
        <ProductRatingIcon />
        <ProductDetails $rating={rating}>{rating}</ProductDetails>
      </DivIconContainer>
      <DivIconContainer>
        <StyledButton onClick={handleOnClick}>Add to cart</StyledButton>
      </DivIconContainer>
    </StyledSection>
  );
};

export default Product;
