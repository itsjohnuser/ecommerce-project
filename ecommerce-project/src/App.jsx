import {Routes, Route} from 'react-router'

import { HomePage } from './pages/HomePage'

import './App.css'

function App() {

  return (
    <Routes>
      <Route index element ={<HomePage />}/>  {/* shortcut for path="/"==> index */}
    
      <Route path = "checkout" element = {<div>Checkout Page</div>}/>
    </Routes>
    
    
  )
}

export default App
