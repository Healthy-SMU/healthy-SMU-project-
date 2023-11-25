import React from 'react';
import Home from './components/Home'
import LoginSignUp from './components/LoginSignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProfileDetails from './components/ProfileDetails';
import BookMeeting from './components/BookMeeting';

const App = () => {
  return (
      <div>
        <BrowserRouter>
        <Navigation/> 
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile-details' element={<ProfileDetails/>}/>
            <Route path='/book-a-meeting' element={<BookMeeting/>}/>
            <Route path='/login' element={<LoginSignUp/>}/>
          </Routes>
        </BrowserRouter>
      
       
      </div>
  );
};

export default App;
