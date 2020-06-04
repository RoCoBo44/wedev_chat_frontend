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
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Route exact={true} path="/" render={() => <SignUp></SignUp>}></Route>
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
