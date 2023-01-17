import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLinkStyle,
} from "./navigation.styles";

import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { isCartOpen } = useSelector((state) => state.cart);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLinkStyle to="/">Home</NavLinkStyle>
          <NavLinkStyle to="/shop">Shop</NavLinkStyle>
          {currentUser ? (
            <NavLinkStyle as={"span"} onClick={signOutUser}>
              Sign Out
            </NavLinkStyle>
          ) : (
            <NavLinkStyle to="/authentication">Sign In</NavLinkStyle>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
