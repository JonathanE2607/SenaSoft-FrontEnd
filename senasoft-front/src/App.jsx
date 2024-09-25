
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import './App.css'
import Forum from './components/forum'

function App() {
 

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/forum' element={<Forum />}/>
    </Routes>
    
  )
}

export default App
