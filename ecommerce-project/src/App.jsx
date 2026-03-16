import {Routes, Route} from 'react-router'
import { useEffect , useState } from 'react';
import axios from 'axios';
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { OrdersPage } from './pages/orders'
import { TrackingPage } from './pages/tracking'

import './App.css'


function App() {
  const [cart , setCart] = useState([]);

  useEffect(()=>{
    axios.get('/api/cart-items?expand=product').then((Response)=>{
          setCart(Response.data);
        });
  },[])



  return (
    <Routes>
      <Route index element ={<HomePage cart = {cart}  />}/>  {/* shortcut for path="/"==> index */}
    
      <Route path = "checkout" element = {<CheckoutPage cart = {cart}/>}/>
      <Route path = "orders" element = {<OrdersPage/>}/>
      <Route path = "tracking" element = {<TrackingPage/>}/>
    </Routes>
    
    
  )
}

export default App
