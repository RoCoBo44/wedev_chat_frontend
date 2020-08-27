<<<<<<< Updated upstream
import React from 'react' 
import ReactDOM from 'react-dom' 
import * as serviceWorker from './serviceWorker' 
=======
<<<<<<< Updated upstream
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './signupPage';
import SignIn from './signInPage';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
});



/*
client
  .query({
    query: gql`
      {
        user(id: "2c5ea4c0-4067-11e9-8bad-9b1deb4d3b7d"){
          firstName
          lastName
          username
        }
      }
    `
  })
  .then(result => console.log(result)); // No me esta devolviendo el result, pero la query la hace 

console.log(client)
*/

const App = () => (
=======
import React from 'react' 
import ReactDOM from 'react-dom' 
//import * as serviceWorker from './serviceWorker' 
>>>>>>> Stashed changes
import { ApolloProvider } from '@apollo/react-hooks' 
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { withRouter } from "react-router"; 

import 'bootstrap/dist/css/bootstrap.min.css' 
import './css/main.css' 
import SignUp from './pages/signupPage' 
import SignIn from './pages/signInPage' 
import Home from './pages/home' 
import NavbarComp from  './components/navbar.js' 

import client from './apollo/configurations/client' 

import useCurrentUserQuery from './hooks/useCurrentUserQuery'

const NavBarWithRouter = withRouter(NavbarComp);

<<<<<<< Updated upstream
=======
require('dotenv').config() 

>>>>>>> Stashed changes
const withNavbar = (Page) => (
  <>
    <NavBarWithRouter />
    {Page}
  </>
) 

<<<<<<< Updated upstream
const ProtectedHome = () => {
=======
const ProtectedHome = ()  => {
>>>>>>> Stashed changes
  const { currentUser } = useCurrentUserQuery()
  return currentUser ?  withNavbar(<Home/>) : withNavbar(<SignIn/>)
}

const App = () => {
  return (
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Route exact path='/' render={() => <ProtectedHome/>} />
      <Route exact path='/home' render={() => withNavbar(<Home/>)} />
      <Route exact path='/signup' render={() => withNavbar(<SignUp/>)} />
      <Route exact path='/signin' render={() => withNavbar(<SignIn/>)} />
    </BrowserRouter>
  </ApolloProvider>
  )} 


ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
) 

<<<<<<< Updated upstream
serviceWorker.unregister() 
=======
<<<<<<< Updated upstream
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
=======
//serviceWorker.unregister() 
>>>>>>> Stashed changes
>>>>>>> Stashed changes
