// import logo from './logo.svg'
import './App.css'
import './style.css'
import Header from './Component/Header/Header'
import Footer from './Component/Header/Footer'
import Home from './Component/MainComponent/Home'
import About from './Component/MainComponent/About'
import Contact from './Component/MainComponent/Contact'
import Faq from './Component/MainComponent/Faq'
import Signup from './Component/MainComponent/Signup'
import Company from './Component/MainComponent/Company'
import Login from './Component/MainComponent/Login'
import Apply from './Component/MainComponent/Apply'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';

function App() {
     const [ user, setLoginUser] = useState({})
  return (
       <BrowserRouter>
       <Header />
          <Routes>
               <Route path='/' element = {<Home />} />
               <Route path='/About' element = {<About />} />
               <Route path='/Contact' element = {<Contact />} />
               <Route path='/Faq' element = {<Faq />} />
               <Route path='/Signup' element = {<Signup />} />
               <Route path='/Login' element = {<Login setLoginUser={setLoginUser}/>} />
               <Route path='/Company' element = {<Company />} />
               <Route path='/Apply' element = {user && user._id ? <Apply setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>} />
            

          </Routes>
       
       <Footer />
       </BrowserRouter>
  );
}

export default App;
