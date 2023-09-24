import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Signup from './pages/auth/Signup'
import ForgotPassword from './pages/auth/ForgotPassword'
import Login from './pages/auth/Login'
import ResetPassword from './pages/auth/ResetPassword'
import Home from './pages/home/Home'
import Layout from './components/layout/Layout'
import Profile from './pages/profile/Profile'
import Blog from './pages/blog/Blog'
import BlogDetails from './pages/blog/BlogDetails'
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

          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />

          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/blog/:id" element={<Layout><BlogDetails /></Layout>} />

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
