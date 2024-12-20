import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signin from './Pages/Signin'
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
