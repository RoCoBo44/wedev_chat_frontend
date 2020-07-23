import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { onError } from 'apollo-link-error'
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter, Route } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from "apollo-link-http";
import gql from "graphql-tag";

import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './pages/signupPage'; //Si hay una carpeta ya de una toma el idex.js de esa carpeta
import SignIn from './pages/signInPage';
import Home from './pages/home';
import NavbarComp from "./pages/navbar.js"

const typeDefs = gql`
  extend type Query {
    jwt: String
  }

`;

const resolvers = {};

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: cache,
  headers: { authorization: "Bearer " + localStorage.getItem('jwt') },
  link: createHttpLink({
    headers: { authorization: "Bearer" + localStorage.getItem('jwt') },   
    uri: 'http://localhost:3001/graphql',
  }),
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  },
  typeDefs,  
  resolvers
});

cache.writeData({
  data: {
    jwt: localStorage.getItem("jwt"),
    currentUser: localStorage.getItem("currentUser"),
  }
});

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
