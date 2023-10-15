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
import { Provider } from 'react-redux'
import { persistor, store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import AuthRoute from './common/components/authRoute/AuthRoute'

const App = () => {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              {/* General routes */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forget-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />

              {/* Public routes */}
              <Route path="/" element={<Layout><Home /></Layout>} />

              <Route path="/blog" element={<Layout><Blog /></Layout>} />
              <Route path="/blog/:id" element={<Layout><BlogDetails /></Layout>} />

              <Route path="/create-listing" element={<AuthRoute><Layout><CreateListing /></Layout></AuthRoute>} />
              <Route path="/listing-success" element={<AuthRoute><Layout><ListingSuccess /></Layout></AuthRoute>} />
              <Route path="/property/:id" element={<Layout><PropertyDetails /></Layout>} />

              <Route path="/about" element={<Layout><About /></Layout>} />
              <Route path="/contact" element={<Layout><Contact /></Layout>} />

              {/* Private routes */}
              <Route path="/profile" element={<AuthRoute><Layout><Profile /></Layout></AuthRoute>} />
              <Route path="/profile/edit" element={<AuthRoute><Layout><EditProfile /></Layout></AuthRoute>} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
