import { useState } from 'react'
import './App.css'

import Signup from './Pages/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
      </Routes>
    </Router>
  )
}

export default App
