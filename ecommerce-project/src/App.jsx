import {Routes, Route} from 'react-router'

import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'

import './App.css'


function App() {

  return (
    <Routes>
      <Route index element ={<HomePage />}/>  {/* shortcut for path="/"==> index */}
    
      <Route path = "checkout" element = {<CheckoutPage/>}/>
    </Routes>
    
    
  )
}

export default App
