import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'

import { 
  createUserDocumentFromAuth, 
  onAuthStateChangedListener,
  getCategoriesAndDocuments 
} from './utils/firebase/firebase.utils'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setCurrentUser } from './features/user/user.slice'
import { setCategoriesMap } from './features/categories/categories.slice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user)=>{
        if(user){
            createUserDocumentFromAuth(user)
        }
        dispatch(setCurrentUser(user))
    })

    return unsubscribe
  }, [])

  useEffect(()=>{
    const getCategoriesMap = async () => {
        const categories = await getCategoriesAndDocuments();
        dispatch(setCategoriesMap(categories));
    }

    getCategoriesMap()
  },[])

  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='authentication' element={<Authentication />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;
