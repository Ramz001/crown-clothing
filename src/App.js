import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'

import { 
  createUserDocumentFromAuth, 
  onAuthStateChangedListener,
} from './utils/firebase/firebase.utils'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setCurrentUser } from './features/user/user.slice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user)=>{
        if(user){
            createUserDocumentFromAuth(user)
        }
        dispatch(setCurrentUser(JSON.stringify(user)))
    })

    return unsubscribe
  }, [])

 

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
