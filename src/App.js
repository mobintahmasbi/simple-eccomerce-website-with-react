import React from 'react';
import Main from './Pages/main/Main';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register';
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import Profile from './Pages/Profile/Profile';
import Productpage from './Pages/Productpage/Productpage';


export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='Blog' element={<Blog />} />
            <Route path='Login' element={<Login />} />
            <Route path='Register' element={<Register />} />
            <Route path='Profile' element={<Profile />} />
            <Route path='Products/:id' element={<Productpage />} />
        </Routes>
    )
}