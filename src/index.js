import React from 'react' 
import ReactDOM from 'react-dom' 
import * as serviceWorker from './serviceWorker' 
import { ApolloProvider } from '@apollo/react-hooks' 
import { BrowserRouter, Route } from 'react-router-dom' 

import 'bootstrap/dist/css/bootstrap.min.css' 
import './css/main.css' 
import SignUp from './pages/signupPage' 
import SignIn from './pages/signInPage' 
import Home from './pages/home' 
import NavbarComp from  './components/navbar.js' 

import client from './apollo/configurations/client' 


const withNavbar = (Page) => (
  <>
    <NavbarComp />
    {Page}
  </>
) 

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Route exact path= '/' render={() => withNavbar(<SignIn/>)} />
      <Route exact path= '/home' render={() => withNavbar(<Home/>)} />
      <Route exact path= '/signup' render={() => withNavbar(<SignUp/>)} />
      <Route exact path= '/signin' render={() => withNavbar(<SignIn/>)} />
    </BrowserRouter>
  </ApolloProvider>
) 


ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
) 

serviceWorker.unregister() 
