import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Home } from './pages/home/Home';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} /> 

    </Routes>
    {/* <Footer /> */}
    </>
  )
}

export default App
