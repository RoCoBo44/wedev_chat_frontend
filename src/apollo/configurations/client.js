import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { setContext } from 'apollo-link-context';
import {ApolloClient} from '@apollo/client';
import { onError } from 'apollo-link-error'

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('jwt') ;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const errorLink  = onError (({ networkError, graphQLErrors }) => {
  console.log('graphQLErrors', graphQLErrors)
  console.log('networkError', networkError)
})

const link = ApolloLink.from([authLink, errorLink, httpLink]);

const cache = new InMemoryCache();

cache.writeData({
    data: {
      jwt: localStorage.getItem("jwt"),
      currentUser: localStorage.getItem("currentUser"),
    }
});

const client = new ApolloClient({
  link,
  cache
});


export default client
