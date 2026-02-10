import {Routes, Route} from 'react-router'

import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/orders'
import { TrackingPage } from './pages/tracking'

import './App.css'


function App() {

  return (
    <Routes>
      <Route index element ={<HomePage />}/>  {/* shortcut for path="/"==> index */}
    
      <Route path = "checkout" element = {<CheckoutPage/>}/>
      <Route path = "orders" element = {<OrdersPage/>}/>
      <Route path = "tracking" element = {<TrackingPage/>}/>
    </Routes>
    
    
  )
}

export default App
