import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Profiles from './pages/Profiles'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import Createlisting from './pages/Createlisting'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'
import Listings from './pages/Listings'
import Search from './pages/Search'
import Footer from './components/Footer'



function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        {/* <Route path='/Listings/:listingId' element={<Listings />} /> */}
        <Route path='/Listing/:listingId' element={<Listing />} />
        <Route  element={<PrivateRoute />}>
          <Route path='/profiles' element={<Profiles />} />
        <Route path='/Create-listing' element={<Createlisting />} />
        <Route path='/update-listing/:listingId' element={<UpdateListing />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App