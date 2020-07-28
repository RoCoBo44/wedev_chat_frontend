import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './pages/signupPage'; //Si hay una carpeta ya de una toma el idex.js de esa carpeta
import SignIn from './pages/signInPage';
import Home from './pages/home';
import NavbarComp from "./components/navbar.js"

import client from './apollo/configurations/client' 

const view = (Page) => (
  <div><NavbarComp></NavbarComp>{Page}</div>
);

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Route exact={true} path="/" render={() => view(<SignIn></SignIn>)}></Route>
      <Route exact={true} path="/home" render={() => view(<Home></Home>)}></Route>
      <Route exact={true} path="/signup" render={() => view(<SignUp></SignUp>)}></Route>
      <Route exact={true} path="/signin" render={() => view(<SignIn></SignIn>)}></Route>
    </BrowserRouter>
  </ApolloProvider>
);


ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
