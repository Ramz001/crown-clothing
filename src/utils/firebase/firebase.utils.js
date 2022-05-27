import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyAhzvzbrMXxcm-ZY11qU4THGnKL0p9Ea6o",
  authDomain: "crown-clothing-ramz.firebaseapp.com",
  projectId: "crown-clothing-ramz",
  storageBucket: "crown-clothing-ramz.appspot.com",
  messagingSenderId: "1019723124446",
  appId: "1:1019723124446:web:233c33e4ae4df12073bc4f"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db,'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try{
            setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }
        catch(error){
            console.log('error creting the user', error.message);
        }
    }
    
    return userDocRef
}
