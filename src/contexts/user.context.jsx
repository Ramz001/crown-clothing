import { createContext, useReducer } from 'react'
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const UserReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            }
        default:
            throw new Error('UserReducer: action type not recognized');
    }
}

const INITIAL_STATE = {
    currentUser: null,
}

export const UserProvider = ({ children }) => {
    const [ { currentUser }, dispatch ] = useReducer(UserReducer, INITIAL_STATE)

    const setCurrentUser = (user) => {
        dispatch({
            type: USER_ACTION_TYPES.SET_CURRENT_USER,
            payload: user,
        })
    }
    
    const value = {
        currentUser,
        setCurrentUser
    }
    
    

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}