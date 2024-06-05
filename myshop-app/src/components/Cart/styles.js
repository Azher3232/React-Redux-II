import styled from "styled-components";

const CartArticle = styled.article`
  margin: 3rem 2rem 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const CartDetails = styled.p`
  font-size: 2.8rem;
  font-weight: 600;
`;

export { CartArticle, CartDetails };
