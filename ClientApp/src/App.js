import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile store={props.store} />} />
            <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>} />
            <Route path='/users' element={<UsersContainer store={props.store} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
