import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: #92c7cf;
  padding: 3.5rem 10rem;
  display: flex;
  justify-content: space-between;
`;

const HeaderHeadingPrimary = styled.h1`
  font-size: 2.6rem;
  color: #0077b6;
`;

const HeaderUList = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 3rem;

  li {
    list-style: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 2.2rem;
  color: #0077b6;
  font-weight: 500;

  &:hover {
    color: #dd5746;
  }
`;

export { StyledHeader, HeaderHeadingPrimary, HeaderUList, StyledLink };
