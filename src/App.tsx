import React, {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Button} from "antd";
import Header from "./components/Header";
import './scss/main.scss'
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import {Route, Routes, useLocation} from "react-router-dom";

import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import FeedbackForm from "./components/FeedbackForm";
import News from './pages/News';
import ServicesDisign from "./pages/ServicesDisign";
function App() {
    const location = useLocation();
    console.log( location.pathname)

  return (
    <div className="main-app">
       <Header type={location.pathname==='/'?'white':'default'}/>
        <Routes>
            <Route path='/' element={<HomePage/>} />

            <Route path='/About' element={<About/>} />
            <Route path='/Services' element={<Services/>} />
            <Route path='/Services/Disign' element={<ServicesDisign/>} />
            <Route path='/Work' element={<Work/>} />
            <Route path='/News' element={<News/>} />
            <Route path='/Contacts' element={<HomePage/>} />
        </Routes>
        <FeedbackForm/>
        <Footer/>
    </div>
  )
}

export default App
