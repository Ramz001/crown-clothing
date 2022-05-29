import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up/sign-up.component";

const SignIn = () => {
    const handleSignInWithGooglePopup = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={handleSignInWithGooglePopup}>Sign in with Google Popup</button>
            <SignUp />
        </div>
    )
}

export default SignIn;