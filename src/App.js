import React, { Component} from 'react';
import './App.css';

import Header from "./components/Header/header";
import Nav from "./components/Navbar/nav";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/dialogs";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";

import {BrowserRouter, Route} from "react-router-dom";




const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Nav />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={()=><Dialogs dialogs={props.dialogs} message={props.message}/>}/>
                    <Route path='/profile' render={()=><Profile posts={props.posts}/>}/>
                    <Route path='/news' render={()=><News/>}/>
                    <Route path='/music' render={()=><Music/>}/>
                    <Route path='/settings' render={()=><Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
