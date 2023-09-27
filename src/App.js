import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/cont/Home';
import Header from './components1/Header';
import Details from './pages/details/Details';

import Account from './pages/logins/Account'
import Login from '../src/pages/logins/Login'
import Register from './pages/logins/Register';
import Create from './components1/create/Create';
import Footer from './components1/Footer';



const App = () => {
  return (
   <Router>
    <Header/>
<Routes>


<Route path='/'Component={Home}/>
<Route path='/details/:id'Component={Details}/>
<Route path='/account'Component={Account}/>
<Route path='/login'Component={Login}/>
<Route path='/Register'Component={Register}/>
<Route path='/create'Component={Create}/>











</Routes>
<Footer/>



   </Router>
  )
}

export default App