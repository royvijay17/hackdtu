// import logo from './logo.svg';
import './App.css';
import Start from '../src/component/start' 
import {Routes, Route} from 'react-router-dom';
import {useState} from 'react';

function App() {
  const [username,setUsername]=useState("");
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Start setUsername={setUsername} username={username}/>}/>
        <Route path="/home" element={
          <>
        <div className="nav">
        <div className="logo">COMPANY</div>
        <div className="rightnav">
          <div botton ="Home">Home</div>
          < div botton ='Shop'>Shop</div>
          < div botton ='Blog'>Blog</div>
          < div botton ='About'>About</div>
          < div botton ='Contact'>Contact</div>
        </div>
      </div>
      <div className="newbody">
        hello there
      </div>
     </>
        }/>
      </Routes>
      </div>
      

  );
}

export default App;
