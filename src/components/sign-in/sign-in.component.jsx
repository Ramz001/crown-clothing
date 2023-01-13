import { useState } from 'react'
import { 
    signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup, 
} from '../../utils/firebase/firebase.utils'
import { SignInContainer, ButtonsContainerStyles } from './sign-in.styles'
import FormInput from '../form-input/form-input.components'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'


const defaultFormFields = {
    email: '',
    password: '',
}


const SignIn = () => {
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
        await signInWithGooglePopup();
    }

    return (
        <SignInContainer>
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
                
                <ButtonsContainerStyles>
                    <Button type='submit'>Sign In</Button>
                    <Button 
                        type='button' 
                        onClick={handleSignInWithGooglePopup} 
                        buttonType={BUTTON_TYPE_CLASSES.google}
                    >
                        Google Sign In
                    </Button>
                </ButtonsContainerStyles>
            </form>
        </SignInContainer>
    )
}

export default SignIn