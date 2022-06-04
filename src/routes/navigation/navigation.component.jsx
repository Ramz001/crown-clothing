import './navigation.styles.scss'
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../contexts/cart.context' 

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    return (
        <>
            <nav className="navigation">
                <Link to="/" className="logo-container">
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/shop" className='nav-link'>Shop</Link>
                    {
                        currentUser 
                        ? (
                            <span className='nav-link' onClick={signOutUser}>
                                Sign Out
                            </span>)
                        : (
                            <Link to="/authentication" className='nav-link'>
                                Sign In
                            </Link>)
                    }
                    <CartIcon />
                </div>
                { isCartOpen && <CartDropdown /> }
            </nav>
            <Outlet />
        </>
    )
}

export default Navigation;