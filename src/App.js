import logo from './logo.svg';
import './App.css';
import './MyStyle.css'
import { useState } from 'react';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Course from './component/Course';
import Login from './component/Login';
import Register from './component/Register';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import NotFound from './component/NotFound';
import Nav from './component/Nav';
import Quiz from './Quiz';
import Key from './Key';
import Api from './Api';
import PhotoApi from './PhotoApi';
import FPAII from './component/FAPI1';
import FPAI2 from './component/FAPI2';
import Insert from './component/Insert';
import Edit from './component/Edit';
import Delete from './component/Delete';


function App() {

return(
  <div>
      <BrowserRouter>
      <Nav/>

      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='course' element={<Course/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='quiz' element={<Quiz/>}/>
        <Route path='key' element={<Key/>}/>
        <Route path='api' element={<Api/>}/>
        <Route path='picture' element={<PhotoApi/>}/>
        <Route path='fapi1' element={<FPAII/>}/>
        <Route path='fapi2' element={<FPAI2/>}/>
        <Route path='insert' element={<Insert/>}/>
        <Route path='edit/:id' element={<Edit/>}/>
        <Route path='delete/:id' element={<Delete/>}/>
        
        
        <Route path='*' element={<NotFound/>}/>
          
          
          
      </Routes>
      </BrowserRouter>
      
  </div>
    
  );
}






export default App;
