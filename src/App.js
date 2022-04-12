import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
            <Route path='/dialogs/*' element={<Dialogs messagesPage={props.state.messagesPage} dispatch={props.dispatch} 
            newMessageText={props.state.messagesPage.newMessageText}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
