import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import View from './components/View';
import Update from './components/Update';
import Delete from './components/Delete';
import Addrecord from './components/Addrecord';
const App = () => {
  return (
    <>
    <BrowserRouter>
     <div className='container'>
       <ToastContainer position='top-center'/>
       <Routes>
        <Route exact path='/' element={<Home/>}  />
        <Route path='/addrecord' element={<Addrecord/>} />
        <Route path='/view/:id' element={<View/>} />
        <Route path='/update/:id' element={<Update/>} />
        <Route path='/delete/:id' element={<Delete/>} />
        </Routes> 
     </div>
    </BrowserRouter>
    
    </>
  )
}

export default App