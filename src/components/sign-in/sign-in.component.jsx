import { useState, useContext } from 'react'
import { 
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup, 
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.components'
import Button from '../button/button.component'
import { UserContext } from '../../contexts/user.context'


const defaultFormFields = {
    email: '',
    password: '',
}


const SignIn = () => {
    const { setCurrentUser } = useContext(UserContext)

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            setCurrentUser(user)

            setFormFields(defaultFormFields)
        }
        catch(error){
            if(error.code === 'auth/wrong-password'){
                alert('Incorrect password!')
            }
            if(error.code === 'auth/user-not-found'){
                alert("No user associated with this email!")
            }
            console.log('error signing in', error)
            setFormFields(defaultFormFields)
        }
    }

    const handleSignInWithGooglePopup = async () => {
        const { user } = await signInWithGooglePopup();
        setCurrentUser(user)

        await createUserDocumentFromAuth(user)
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label={'Email'}
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label={'Password'} 
                    type='password' 
                    name="password" 
                    value={password} 
                    onChange={handleChange}
                    required
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' onClick={handleSignInWithGooglePopup} buttonType={'google'}>
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn