import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid #0001 1px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavLinks = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const NavLinkStyle = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: #323;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 1.25s;

  &:hover {
    color: #000;
  }
`;
