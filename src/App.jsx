import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Signup from './modules/auth/Signup'
import ForgotPassword from './modules/auth/ForgotPassword'
import Login from './modules/auth/Login'
import ResetPassword from './modules/auth/ResetPassword'
import Home from './modules/home/Home'
import Layout from './common/components/layout/Layout'
import Profile from './modules/profile/Profile'
import Blog from './modules/blog/Blog'
import BlogDetails from './modules/blog/BlogDetails'
import CreateListing from './modules/create-listing/CreateListing'
import About from './modules/about/About'
import Contact from './modules/contact/Contact'
import PropertyDetails from './modules/property-details/PropertyDetails'
import ListingSuccess from './modules/create-listing/ListingSuccess'
import NotFound from './modules/others/404'
import EditProfile from './modules/profile/EditProfile'

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
          <Route path="/profile/edit" element={<Layout><EditProfile /></Layout>} />

          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/blog/:id" element={<Layout><BlogDetails /></Layout>} />

          <Route path="/create-listing" element={<Layout><CreateListing /></Layout>} />
          <Route path="/create-listing/submit" element={<Layout><ListingSuccess /></Layout>} />
          <Route path="/property/:id" element={<Layout><PropertyDetails /></Layout>} />

          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />

          <Route path="/" >
            {/* <Route path="/" element={<AuthRoute permissionType="ALLOW"><Dashboard /></AuthRoute>} /> */}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
