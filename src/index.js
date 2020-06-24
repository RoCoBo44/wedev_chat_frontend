import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter, Route } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from "apollo-link-http";
import gql from "graphql-tag";

import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/signupPage';
import SignIn from './components/signInPage';
import Home from './components/home';

//mandar a otro archivo 
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
  link: createHttpLink({
    headers: { authorization: localStorage.getItem('jwt') },   
    uri: 'http://localhost:3001/graphql',
  }),

  typeDefs,  
  resolvers
});

cache.writeData({
  data: {
    jwt: localStorage.getItem("jwt"),
    currentUser: localStorage.getItem("currentUser"),
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Route exact={true} path="/" render={() => <SignIn></SignIn>}></Route>
      <Route exact={true} path="/home" render={() => <Home></Home>}></Route>
      <Route exact={true} path="/signup" render={() => <SignUp></SignUp>}></Route>
      <Route exact={true} path="/signin" render={() => <SignIn></SignIn>}></Route>
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
