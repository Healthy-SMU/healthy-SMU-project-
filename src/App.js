import React from 'react';
import Home from './components/Home'
import LoginSignUp from './components/LoginSignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationSTUDENT from './components/NavigationSTUDENT';
import ProfileDetails from './components/ProfileDetails';
import BookMeeting from './components/BookMeeting';
import SetTimeSlots from './componentsHCP/SetTimeSlots'
import HCPProfileDetails from './componentsHCP/HCPProfileDetails';
import NavigationHCP from './componentsHCP/NavigationHCP';

const App = () => {

  const weeklyEvents = [
    {
      id: 1,
      text: "Meeting A",
      start: "2023-11-28T08:30:00",
      end: "2023-11-28T10:00:00",
    },
    {
      id: 2,
      text: "Meeting B",
      start: "2023-11-28T10:30:00",
      end: "2023-11-28T12:00:00",
    },
    {
      id: 3,
      text: "Meeting C",
      start: "2023-11-28T13:30:00",
      end: "2023-11-28T15:00:00",
    },
    {
      id: 4,
      text: "Meeting D",
      start: "2023-11-28T15:30:00",
      end: "2023-11-28T17:00:00",
    },
    
    // Add more events as needed
  ];

 //set your condition here 
  const isHCP = true;

  return (
      <div>
        <BrowserRouter>
        {isHCP ? <NavigationHCP /> : <NavigationSTUDENT />}
        
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/profile-details' element={<ProfileDetails/>}/>
            <Route path='/book-a-meeting' element={<BookMeeting weeklyEvents={weeklyEvents}/>}/>
            <Route path='/Set-time-slots' element={<SetTimeSlots weeklyEvents={weeklyEvents} />}/>
            <Route path='/login' element={<LoginSignUp/>}/>
            <Route path='/profile-details-HCP' element={<HCPProfileDetails/>}/>
          </Routes>
        </BrowserRouter>
      
       
      </div>
  );
};

export default App;
