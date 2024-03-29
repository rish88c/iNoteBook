import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useState } from 'react';
import Display from './components/display';
import ParentDashboard from './components/Parent';

function App() {

  const [alert, setAlert]= useState({type:"", msg:""})

  const showAlert=(type, msg)=>{
      setAlert({
        type:type,
        msg:msg
      })
      setTimeout( () => {
        setAlert("")
      }, 1000)
  }


  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert}/>
          <div className='container'>
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert}/>}></Route>
              <Route exact path="/about" element={<About showAlert={showAlert}/>}></Route>
              <Route exact path="/login" element={<Login showAlert={showAlert}/>}></Route>
              <Route exact path="/signup" element={<SignUp showAlert={showAlert}/>}></Route>
              <Route exact path="/notes" element={<Display showAlert={showAlert}/>}></Route>
              <Route exact path="/parent"element={<ParentDashboard showAlert={showAlert} />}
              />
            </Routes>
          </div>


        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
