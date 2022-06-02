import './navigation.styles.scss'
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { useContext } from 'react'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)

    const signOutHandler = async () => {
        await signOutUser()
        setCurrentUser(null)
    }

    console.log(currentUser)

    return (
        <>
            <nav className="navigation">
                <Link to="/" className="logo-container">
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link to="/" className='nav-link'>Home</Link>
                    {
                        currentUser 
                        ? (
                            <span className='nav-link' onClick={signOutHandler}>
                                Sign Out
                            </span>)
                        : (
                            <Link to="/authentication" className='nav-link'>
                                Sign In
                            </Link>)
                    }
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navigation;