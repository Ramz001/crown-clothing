import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()

export const  addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })

    await batch.commit()
    console.log('done');
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)
    const categoriesMap = querySnapshot.docs.reduce((acc, docSnapshot) =>{
        const { title, items } = docSnapshot.data()
        acc[title.toLowerCase()] = items
        return acc
    },{})

    return categoriesMap
}   

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = doc(db,'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try{
            setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        }
        catch(error){
            console.log('error creting the user', error.message);
        }
    }
    
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return
    
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)