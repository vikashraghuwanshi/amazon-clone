import './App.css'
import React, { useEffect } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useStateValue } from './components/StateProvider';
import { auth } from './components/firebase'
import { onAuthStateChanged } from 'firebase/auth'


function App() {

  const [, dispatch] = useStateValue()

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (authUser)=>{
      if(authUser) {
        // user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user not logged in
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    return () => {
      // cleanup operations go here
      unsubscribe()
    }
  }, [])

  return (
    <React.Fragment>
      <Router>
        <div className="app">
          <Routes>
              <Route exact path='/' Component={Home} />
              <Route exact path='/login' Component={Login} />
              <Route exact path='/checkout' Component={Checkout} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
    );
}

export default App;
