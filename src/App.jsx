import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Signup from './pages/auth/Signup'
import ForgotPassword from './pages/auth/ForgotPassword'
import Login from './pages/auth/Login'
import ResetPassword from './pages/auth/ResetPassword'
// import Layout from './components/layout/Layout'
// import AuthRoute from './components/authRoute/AuthRoute'


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          <Route path="/" element={<Login />} />
          <Route path="/" >
            {/* <Route path="/" element={<AuthRoute permissionType="ALLOW"><Dashboard /></AuthRoute>} /> */}
          </Route>

          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
