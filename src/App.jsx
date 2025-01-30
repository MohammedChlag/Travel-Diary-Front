import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import SignupPage from './pages/SignupPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ValidatePage from './pages/ValidatePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import UserProfilePage from './pages/UserProfilePage.jsx'
import NewTravelPage from './pages/NewTravelPage.jsx'
import CompanionsPage from './pages/CompanionsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/new-travel' element={<NewTravelPage />} />
          <Route path='/companions' element={<CompanionsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/profile' element={<ProfilePage />}>
            <Route path='/profile/:id' element={<UserProfilePage />} />
          </Route>
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/validate/:registrationCode' element={<ValidatePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<h2>Not Found</h2>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
