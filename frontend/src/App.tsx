import './router'
import './App.css'
import 'normalize.css';
import AppRouter from './router';
import { apolloClient } from './apollo';
import { ApolloProvider } from '@apollo/client/react';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AppRouter />
    </ApolloProvider>
  )
}

export default App