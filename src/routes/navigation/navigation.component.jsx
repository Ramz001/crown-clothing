// importing styles
import { 
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLinkStyle,
 } from './navigation.styles'
// importing react hooks
import { useContext } from 'react'
import { Outlet, Link } from "react-router-dom"
// importing contexts
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context' 
// importing firebase methods
import { signOutUser } from '../../utils/firebase/firebase.utils'
// importing components
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    return (
        <>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo"/>
                </LogoContainer>
                <NavLinks>
                    <NavLinkStyle to="/">Home</NavLinkStyle>
                    <NavLinkStyle to="/shop">Shop</NavLinkStyle>
                    {
                        currentUser 
                        ? (
                            <NavLinkStyle as={'span'} onClick={signOutUser}>
                                Sign Out
                            </NavLinkStyle>)
                        : (
                            <NavLinkStyle to="/authentication">
                                Sign In
                            </NavLinkStyle>)
                    }
                    <CartIcon />
                </NavLinks>
                { isCartOpen && <CartDropdown /> }
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation;