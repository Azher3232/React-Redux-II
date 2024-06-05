import React from "react";
import {
  StyledHeader,
  HeaderHeadingPrimary,
  HeaderUList,
  StyledLink,
} from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderHeadingPrimary>My Shop</HeaderHeadingPrimary>
      <nav>
        <HeaderUList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/cart">Cart</StyledLink>
          </li>
        </HeaderUList>
      </nav>
    </StyledHeader>
  );
};

export default Header;
