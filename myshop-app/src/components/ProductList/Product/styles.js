import styled from "styled-components";
import { FaDollarSign, FaStar } from "react-icons/fa";

const StyledSection = styled.section`
  background-color: #fff;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border-radius: 5px;
  overflow: hidden;
  margin: 0 2rem 3.2rem 2rem;
`;

const ProductImage = styled.img`
  grid-column: 1/2;
  grid-row: 1 / 3;
  width: 60%;
  padding: 1rem 0;
  justify-self: center;
  border-radius: 2rem;
  overflow: hidden;
`;

const ProductTitle = styled.h4`
  grid-column: 2 / -1;
  font-size: 2rem;
  text-align: center;
  padding-top: 0.5rem;
  letter-spacing: 0.1rem;
  color: #ee6c4d;
`;

const ProductDescription = styled.p`
  padding: 1rem;
  font-size: 1.6rem;
  grid-column: 2/-1;
  line-height: 2rem;
`;

const ProductDetails = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  padding-left: ${(props) => (props.$rating ? "0.5rem" : "")};
`;

const ProductPriceIcon = styled(FaDollarSign)`
  color: #fcbf49;
  font-size: 2.6rem;
`;

const ProductRatingIcon = styled(FaStar)`
  color: #fcbf49;
  font-size: 2.6rem;
`;

const DivIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  font-family: inherit;
  font-size: 1.8rem;
  background-color: #ee6c4d;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  width: 60%;
  cursor: pointer;
  transition: ease-in-out 0.2s all;

  &:hover {
    background-color: #0077b6;
  }
`;

export {
  StyledSection,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductDetails,
  ProductPriceIcon,
  ProductRatingIcon,
  DivIconContainer,
  StyledButton,
};
