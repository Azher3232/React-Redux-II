import styled from "styled-components";
import { FaDollarSign, FaTrash } from "react-icons/fa";

const StyledSectionContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1.5rem;
  margin: 1rem 2rem 1rem 0;
  padding: 2rem 0;
  background-color: #fff;
  border-radius: 0.5rem;
`;

const StyledPriceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledItemTitle = styled.h4`
  font-size: 1.8rem;
  padding: 0.5rem;
`;

const StyledItemPrice = styled.p`
  font-size: 2rem;
`;

const StyledItemPriceIcon = styled(FaDollarSign)`
  color: #fcbf49;
  font-size: 2.2rem;
`;

const StyledItemDeleteIcon = styled(FaTrash)`
  color: #cc3636;
  font-size: 2.2rem;
  margin-left: 0.5rem;
`;

const StyledButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

export {
  StyledSectionContainer,
  StyledItemTitle,
  StyledItemPrice,
  StyledItemPriceIcon,
  StyledItemDeleteIcon,
  StyledButton,
  StyledPriceContainer,
};
