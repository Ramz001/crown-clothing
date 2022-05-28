import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName: displayName } )
            setFormFields(defaultFormFields)
        }
        catch(error){
            if(error.code === 'auth/email-already-in-use') {
                alert('Profile already exists')
            }
            if(error.code === 'auth/weak-password'){
                alert('Password is too weak')
            }
            console.log("error signing up", error)
        }
    }

    return (
        <div>
            <h1>sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input 
                    type='text' 
                    name='displayName' 
                    value={displayName} 
                    onChange={handleChange}
                    required
                />

                <label>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={handleChange}
                    required
                />

                <label>Password</label>
                <input 
                    type='password' 
                    name="password" 
                    value={password} 
                    onChange={handleChange}
                    required
                />

                <label>Confirm Password</label>
                <input 
                    type='password' 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    onChange={handleChange}
                    required
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp