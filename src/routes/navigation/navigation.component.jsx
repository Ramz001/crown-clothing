import './navigation.styles.scss'
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'


const Navigation = () => {
  return (
    <>
        <nav className="navigation">
            <Link to="/" className="logo-container">
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/sign-in" className='nav-link'>Sign In</Link>
            </div>
        </nav>
        <Outlet />
    </>
    )
}

export default Navigation;