import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Blog from './components/Blog';
import Home from './components/home';
import Navbar from './components/Navbar';
import { selectLogin } from './features/user';


function App() {

  const isLogin = useSelector(selectLogin)
  return (
    <div className="App" >

      <Navbar />
      <Home />

      {isLogin && <Blog/>}

    </div>
  );
}

export default App;
