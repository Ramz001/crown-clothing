import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLinkStyle,
} from "./navigation.styles";

import { Outlet } from "react-router-dom";

import { signOutStart } from "../../features/user/user.slice";
import { useAppSelector, useAppDispatch } from "../../utils/hooks/hooks";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.user);
  const { isCartOpen } = useAppSelector((state) => state.cart);

  const handleSignOut = () => {
    dispatch(signOutStart());
  };
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
            <NavLinkStyle as={"span"} onClick={handleSignOut}>
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
